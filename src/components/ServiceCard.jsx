export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="p-6 transition border bg-zinc-900 border-white/10 rounded-xl hover:border-yellow-400">
      <div className="mb-4 text-3xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{desc}</p>
    </div>
  );
}
