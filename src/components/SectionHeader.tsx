
import { useEffect, useRef } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div ref={headerRef} className="section-transition mb-10">
      <h2 className="font-display text-2xl font-medium tracking-tight mb-3 text-[#333]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#666] max-w-xl text-sm">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
