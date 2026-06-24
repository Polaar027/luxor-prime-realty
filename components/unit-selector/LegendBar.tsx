export function LegendBar() {
  const items = [
    { color: "bg-emerald-500", label: "Available" },
    { color: "bg-amber-500", label: "Reserved" },
    { color: "bg-rose-600", label: "Sold" },
  ];

  return (
    <div className="flex items-center gap-6 mt-4 px-1">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <span className={`w-3 h-3 rounded-sm ${item.color}`} />
          <span className="text-xs text-luxor-gray">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
