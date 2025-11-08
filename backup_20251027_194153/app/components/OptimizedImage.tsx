import { memo } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  fallback?: string;
  aspectRatio?: string;
  critical?: boolean;
}

const OptimizedImage = memo(function OptimizedImage({
  alt,
  fallback = '/images/placeholder.jpg',
  aspectRatio,
  critical = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  const imageProps: ImageProps = {
    alt,
    className: `${className} ${critical ? 'critical-image' : ''} transition-opacity duration-300`,
    quality: critical ? 90 : 85,
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=',
    loading: critical ? 'eager' : 'lazy',
    priority: critical,
    ...props,
  };

  if (aspectRatio) {
    return (
      <div className={`relative overflow-hidden`} style={{ aspectRatio }}>
        <Image {...imageProps} fill />
      </div>
    );
  }

  return <Image {...imageProps} />;
});

export default OptimizedImage;