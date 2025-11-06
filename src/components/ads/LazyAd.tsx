'use client';

import { useEffect, useRef, useState } from 'react';

interface LazyAdProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

/**
 * Lazy Loading Ad Wrapper Component
 * 
 * Loads ads only when they're about to enter the viewport,
 * improving initial page load performance.
 * 
 * @param children - The ad component to lazy load
 * @param threshold - Intersection threshold (0-1)
 * @param rootMargin - Margin around the viewport for triggering load
 * @param className - Additional CSS classes
 * 
 * @example
 * <LazyAd threshold={0.1} rootMargin="100px">
 *   <GoogleAd slot="1234567890" />
 * </LazyAd>
 */
export default function LazyAd({ 
  children, 
  threshold = 0.1,
  rootMargin = '100px',
  className = ''
}: LazyAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            setIsVisible(true);
            setHasLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div 
      ref={adRef} 
      className={`lazy-ad-container ${className}`}
      style={{ minHeight: isVisible ? 'auto' : '250px' }}
    >
      {isVisible ? (
        children
      ) : (
        <div className="ad-placeholder flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg" style={{ minHeight: '250px' }}>
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-4 w-32 bg-gray-300 dark:bg-gray-600 rounded mx-auto mb-2"></div>
              <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded mx-auto"></div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">Loading ad...</p>
          </div>
        </div>
      )}
    </div>
  );
}
