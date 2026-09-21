export default function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E0D9D1] bg-[#FAF7F4] px-3 py-1 text-[10px] font-medium tracking-[0.1em] text-[#6B6560] uppercase">
      {label}
    </span>
  );
}
