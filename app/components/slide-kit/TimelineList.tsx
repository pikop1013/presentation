type TimelineItem = [string, string];

export function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-4">
      {items.map(([phase, detail]) => (
        <div key={phase} className="grid grid-cols-[220px_minmax(0,1fr)] items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="text-2xl font-semibold text-blue-800">{phase}</p>
          <p className="text-2xl text-slate-700">{detail}</p>
        </div>
      ))}
    </div>
  );
}
