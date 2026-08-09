"""
Flask mailing API for the portfolio's contact form.

Sends an email to the owner's inbox whenever a recruiter submits the
contact form on the React frontend. Configure credentials via environment
variables (see .env.example) — never hard-code secrets in this file.

Run:
    pip install -r requirements.txt
    flask --app app run --debug
"""

import os
import smtplib
from email.message import EmailMessage

from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=os.getenv("ALLOWED_ORIGIN", "*"))

SMTP_HOST = os.getenv("SMTP_HOST", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASS = os.getenv("SMTP_PASS")
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL", "attarmohammadawais05@gmail.com")


@app.get("/api/health")
def health():
    return jsonify(status="ok")


@app.post("/api/contact")
def contact():
    data = request.get_json(silent=True) or {}

    name = (data.get("name") or "").strip()
    email = (data.get("email") or "").strip()
    phone = (data.get("phone") or "").strip()
    message = (data.get("message") or "").strip()

    if not name or not email or not message:
        return jsonify(error="name, email and message are required"), 400

    if not SMTP_USER or not SMTP_PASS:
        # Credentials aren't configured yet — fail clearly instead of
        # silently pretending the email was sent.
        return jsonify(
            error="Mail server isn't configured. Set SMTP_USER / SMTP_PASS in backend/.env"
        ), 500

    msg = EmailMessage()
    msg["Subject"] = f"Portfolio contact from {name}"
    msg["From"] = SMTP_USER
    msg["To"] = RECEIVER_EMAIL
    msg["Reply-To"] = email
    msg.set_content(
        f"New message from your portfolio contact form\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Phone: {phone or '—'}\n\n"
        f"Message:\n{message}\n"
    )

    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg)
    except Exception as exc:  # noqa: BLE001 — surface a clean error to the client
        return jsonify(error=f"Failed to send email: {exc}"), 502

    return jsonify(status="sent"), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
