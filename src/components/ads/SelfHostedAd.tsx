'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Ad {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  targetUrl: string;
  impressions: number;
  clicks: number;
}

interface SelfHostedAdProps {
  format?: 'horizontal' | 'vertical' | 'square';
  className?: string;
}

export default function SelfHostedAd({ format = 'horizontal', className = '' }: SelfHostedAdProps) {
  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState(true);
  const impressionTracked = useRef(false);

  useEffect(() => {
    // Fetch a random active ad
    const fetchAd = async () => {
      try {
        const response = await fetch('/api/ads');
        const ads = await response.json();
        
        if (ads.length > 0) {
          // Get a random ad
          const randomAd = ads[Math.floor(Math.random() * ads.length)];
          setAd(randomAd);
        }
      } catch (error) {
        console.error('Error fetching ad:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAd();
  }, []);

  useEffect(() => {
    // Track impression when ad is loaded
    if (ad && !impressionTracked.current) {
      impressionTracked.current = true;
      fetch(`/api/ads/${ad.id}/impression`, { method: 'POST' }).catch(
        console.error
      );
    }
  }, [ad]);

  const handleClick = async () => {
    if (ad) {
      // Track click
      try {
        await fetch(`/api/ads/${ad.id}/click`, { method: 'POST' });
      } catch (error) {
        console.error('Error tracking click:', error);
      }
      
      // Open ad in new tab
      window.open(ad.targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  if (loading) {
    return (
      <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${className}`}>
        <div className="h-full w-full" />
      </div>
    );
  }

  if (!ad) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center ${className}`}>
        <p className="text-gray-500 dark:text-gray-400">No ads available</p>
      </div>
    );
  }

  const formatClasses = {
    horizontal: 'flex-row items-center',
    vertical: 'flex-col',
    square: 'flex-col',
  };

  const imageClasses = {
    horizontal: 'w-1/3 h-32',
    vertical: 'w-full h-48',
    square: 'w-full h-64',
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow ${className}`}
      onClick={handleClick}
    >
      <div className={`flex ${formatClasses[format]}`}>
        <div className={`relative ${imageClasses[format]}`}>
          <Image
            src={ad.imageUrl}
            alt={ad.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="font-bold text-lg mb-2">{ad.title}</h3>
          {ad.description && (
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              {ad.description}
            </p>
          )}
          <div className="text-xs text-gray-400">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              Sponsored
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
