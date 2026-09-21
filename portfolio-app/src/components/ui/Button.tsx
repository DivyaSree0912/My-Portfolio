import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external,
  className,
  onClick,
  arrow = false,
}: Props) {
  const baseStyles =
    'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F0EB]';

  const variants = {
    primary:
      'bg-[#1A1A1A] text-[#F5F0EB] hover:bg-[#333] active:bg-[#111]',
    secondary:
      'border border-[#1A1A1A] bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F0EB]',
    ghost:
      'text-[#6B6560] hover:text-[#1A1A1A]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs tracking-[0.08em] uppercase',
    md: 'px-6 py-2.5 text-xs tracking-[0.08em] uppercase',
    lg: 'px-8 py-3 text-sm tracking-[0.06em] uppercase',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  const arrowEl = arrow ? (
    <ArrowRight
      size={14}
      className="transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    />
  ) : null;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        {arrowEl}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
      {arrowEl}
    </button>
  );
}
