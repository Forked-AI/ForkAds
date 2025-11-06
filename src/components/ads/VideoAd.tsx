'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoAdProps {
  adTagUrl: string;
  width?: string;
  height?: string;
  className?: string;
}

/**
 * Video Ad Component using YouTube IMA SDK
 * 
 * @param adTagUrl - Your VAST/VPAID ad tag URL
 * @param width - Video player width
 * @param height - Video player height
 * @param className - Additional CSS classes
 * 
 * @example
 * <VideoAd adTagUrl="https://pubads.g.doubleclick.net/..." />
 */
export default function VideoAd({ 
  adTagUrl, 
  width = '100%', 
  height = '360px',
  className = ''
}: VideoAdProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This is a placeholder implementation
    // In production, you would load the IMA SDK and initialize it here
    
    const loadIMAScript = () => {
      return new Promise((resolve, reject) => {
        if (document.querySelector('script[src*="ima3.js"]')) {
          resolve(true);
          return;
        }

        const script = document.createElement('script');
        script.src = '//imasdk.googleapis.com/js/sdkloader/ima3.js';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => reject(new Error('Failed to load IMA SDK'));
        document.head.appendChild(script);
      });
    };

    const initializeAd = async () => {
      try {
        await loadIMAScript();
        
        // IMA SDK initialization would go here
        // For now, just simulate loading
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
        
      } catch (err) {
        setError('Failed to load video ad');
        setIsLoading(false);
      }
    };

    initializeAd();
  }, [adTagUrl]);

  return (
    <div className={`video-ad-container ${className}`} style={{ width, height }}>
      <div ref={adContainerRef} className="ad-display-container" style={{ width: '100%', height: '100%' }}>
        <video
          ref={videoRef}
          className="video-element"
          style={{ width: '100%', height: '100%' }}
          controls
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="text-white">Loading ad...</div>
          </div>
        )}
        
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-red-900 bg-opacity-75">
            <div className="text-white">{error}</div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        .video-ad-container {
          position: relative;
          background: #000;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .ad-display-container {
          position: relative;
        }
      `}</style>
    </div>
  );
}
