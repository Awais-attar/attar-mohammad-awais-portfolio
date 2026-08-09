import { Component } from "react";
import type { ReactNode } from "react";

// Isolates a failure-prone child (the Three.js/WebGL hero scene) so that if
// it throws — e.g. no WebGL context available — React doesn't unmount
// everything above the nearest boundary. Without this, an uncaught render
// error in a lazy-loaded child can blank far more of the page than the
// child itself, which looks identical to a CSS/animation bug from the
// outside.
export default class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Non-critical section failed to render:", error);
  }

  render() {
    if (this.state.hasError) return this.props.fallback ?? null;
    return this.props.children;
  }
}
