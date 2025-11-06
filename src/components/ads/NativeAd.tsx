'use client';

import Image from 'next/image';

interface NativeAdProps {
  title: string;
  description: string;
  imageUrl: string;
  sponsoredBy: string;
  clickUrl: string;
  className?: string;
}

/**
 * Native Ad Component
 * 
 * A reusable component for displaying native ads that blend with your content.
 * 
 * @param title - Ad headline
 * @param description - Ad description text
 * @param imageUrl - URL of the ad image
 * @param sponsoredBy - Sponsor/brand name
 * @param clickUrl - Destination URL when clicked
 * @param className - Additional CSS classes
 * 
 * @example
 * <NativeAd 
 *   title="Amazing Product"
 *   description="Check out this great product"
 *   imageUrl="/images/product.jpg"
 *   sponsoredBy="Brand Name"
 *   clickUrl="https://example.com"
 * />
 */
export default function NativeAd({
  title,
  description,
  imageUrl,
  sponsoredBy,
  clickUrl,
  className = ''
}: NativeAdProps) {
  return (
    <a
      href={clickUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`native-ad-card block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-2 left-2 bg-gray-900 bg-opacity-75 text-white text-xs px-2 py-1 rounded z-10">
          Sponsored
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            by {sponsoredBy}
          </span>
          <svg 
            className="w-4 h-4 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
