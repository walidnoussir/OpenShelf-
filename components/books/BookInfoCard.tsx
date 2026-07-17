interface BookInfoCardProps {
  title: string;
  value: string | number;
  full?: boolean;
}

export default function BookInfoCard({
  title,
  value,
  full = false,
}: BookInfoCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
        {title}
      </p>

      <p
        className={`mt-3 font-semibold text-slate-900 ${
          full ? "break-all text-base" : "text-2xl"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
