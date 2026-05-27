import { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export const Image = ({
  src,
  alt,
  className = '',
  fallback = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f0fdf4" width="400" height="300"/%3E%3Cpath fill="%23166534" opacity="0.1" d="M150 150h100v100h-100z"/%3E%3Ccircle fill="%2322c55e" opacity="0.1" cx="200" cy="120" r="40"/%3E%3C/svg%3E',
  ...props
}: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative overflow-hidden">
      <img
        src={error ? fallback : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        className={`w-full h-full object-cover transition-all duration-500 ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} ${className}`}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-light animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
};
