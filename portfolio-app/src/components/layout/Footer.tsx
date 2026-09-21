import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#E0D9D1] bg-[#F5F0EB] py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#1A1A1A] uppercase">
            {site.name}
          </p>
          <p className="text-[11px] text-[#A39E98] mt-1 tracking-wider uppercase">
            SOFTWARE ENGINEERING · AI/ML · &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-[#6B6560]">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1A1A1A] transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1A1A1A] transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-[#1A1A1A] transition-colors"
          >
            Email
          </a>
          <span>·</span>
          <a
            href="#hero"
            className="text-[#1A1A1A] font-semibold hover:underline"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}