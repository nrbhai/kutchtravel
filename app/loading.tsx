import { Suspense } from 'react';

interface LoadingProps {
  className?: string;
}

export function ImageSkeleton({ className = "w-full h-64" }: LoadingProps) {
  return (
    <div className={`${className} animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]`} />
  );
}

export function CardSkeleton({ className = "" }: LoadingProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-white/10 backdrop-blur-xl h-48 rounded-t-lg"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-white/10 backdrop-blur-xl rounded w-3/4"></div>
        <div className="h-3 bg-white/10 backdrop-blur-xl rounded w-full"></div>
        <div className="h-3 bg-white/10 backdrop-blur-xl rounded w-2/3"></div>
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-50 to-gray-50">
      <div className="animate-pulse">
        {/* Hero skeleton */}
        <div className="h-screen bg-white/10 backdrop-blur-xl"></div>
        
        {/* Content skeleton */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Loading() {
  return <PageSkeleton />;
}
