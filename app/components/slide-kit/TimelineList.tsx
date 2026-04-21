type TimelineItem = [string, string];

export function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-4">
      {items.map(([phase, detail]) => (
        <div
          key={phase}
          className="grid grid-cols-[240px_minmax(0,1fr)] items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50/85 px-6 py-5 shadow-[0_2px_8px_rgba(15,23,42,0.03)]"
        >
          <p className="text-[1.4rem] font-semibold tracking-[-0.01em] text-blue-800">{phase}</p>
          <p className="text-[1.3rem] leading-[1.6] text-slate-700">{detail}</p>
        </div>
      ))}
    </div>
  );
}
