import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-36 text-center bg-[#F5F0EB]">
      <p className="text-xs font-semibold tracking-[0.24em] text-[#A39E98] uppercase">
        404 // NOT FOUND
      </p>
      <h1 className="mt-4 text-5xl sm:text-7xl font-black tracking-tight text-[#1A1A1A] uppercase">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-base text-[#6B6560] leading-relaxed">
        The requested page does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1A1A1A] text-[#F5F0EB] px-8 py-3 text-xs font-semibold tracking-[0.1em] uppercase hover:bg-[#333] transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
