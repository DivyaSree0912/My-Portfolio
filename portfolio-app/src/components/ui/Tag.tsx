export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-zinc-300 uppercase transition-colors duration-200 hover:border-white/20 hover:text-white">
      {label}
    </span>
  );
}
