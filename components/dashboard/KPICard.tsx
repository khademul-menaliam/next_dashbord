type KPICardProps = {
  title: string;
  value: string;
  subtitle?: string;
  gradientFrom: string;
  gradientTo: string;
};

export function KPICard({ title, value, subtitle, gradientFrom, gradientTo }: KPICardProps) {
  return (
    <div className={`rounded-xl p-5 text-white shadow-lg bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
      <div className="text-sm/5 opacity-90">{title}</div>
      <div className="text-3xl font-bold mt-1">{value}</div>
      {subtitle ? <div className="text-xs/5 opacity-90 mt-2">{subtitle}</div> : null}
    </div>
  );
}


