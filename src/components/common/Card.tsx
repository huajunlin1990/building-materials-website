import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({
  children,
  className = '',
  hoverable = true,
}: CardProps) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm ${
        hoverable
          ? 'transition-all duration-500 hover:-translate-y-2 hover:shadow-card'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

Card.Header = ({ children, className = '' }: CardHeaderProps) => (
  <div className={`p-6 border-b border-gray-100 ${className}`}>{children}</div>
);

interface CardBodyProps {
  children: ReactNode;
  className?: string;
}

Card.Body = ({ children, className = '' }: CardBodyProps) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

Card.Footer = ({ children, className = '' }: CardFooterProps) => (
  <div className={`p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl ${className}`}>
    {children}
  </div>
);
