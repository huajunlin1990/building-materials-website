import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
}

Section.Header = ({
  title,
  subtitle,
  label,
  className = '',
}: SectionHeaderProps) => (
  <div className={`text-center mb-12 ${className}`}>
    {label && (
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
        <span className="w-2 h-2 bg-secondary rounded-full" />
        <span className="text-sm font-medium">{label}</span>
      </div>
    )}
    <h2 className="section-title">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);
