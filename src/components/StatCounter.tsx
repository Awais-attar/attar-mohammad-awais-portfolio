import CountUp from "react-countup";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export default function StatCounter({
  value,
  suffix = "",
  label,
  decimals = 0,
}: StatCounterProps) {
  return (
    <div className="text-center">
      <div className="font-display text-4xl sm:text-5xl font-semibold gradient-text">
        <CountUp
          end={value}
          duration={2}
          decimals={decimals}
          suffix={suffix}
        />
      </div>
      <p className="mt-2 text-sm text-ink-soft font-medium">{label}</p>
    </div>
  );
}
