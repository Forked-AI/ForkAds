'use client';

import GoogleAd from '@/components/ads/GoogleAd';
import Link from 'next/link';
import { useState } from 'react';

export default function AdsPage() {
  const [activeTab, setActiveTab] = useState<'video' | 'banner' | 'native'>('video');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ad Showcase
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Display ads from multiple providers with seamless integration
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'video'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Video Ads
            </button>
            <button
              onClick={() => setActiveTab('banner')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'banner'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Banner Ads
            </button>
            <button
              onClick={() => setActiveTab('native')}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === 'native'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              Native Ads
            </button>
          </div>
        </div>

        {/* Ad Content */}
        <div className="space-y-8">
          {/* Video Ads Section */}
          {activeTab === 'video' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Video Ad Placements
              </h2>
              
              {/* Google AdSense Video Placeholder */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Google AdSense
                  </span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Video Ad Placeholder</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">720x480 - In-Stream Video</p>
                  </div>
                </div>
              </div>

              {/* YouTube IMA SDK Placeholder */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3">
                  <span className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    YouTube IMA
                  </span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Pre-roll Video Ad</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">1280x720 - VAST Compatible</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Banner Ads Section */}
          {activeTab === 'banner' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Banner Ad Placements
              </h2>

              {/* Google AdSense Display - LIVE */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Google AdSense - Live Ad ✅
                    </span>
                    <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">ACTIVE</span>
                  </div>
                  <span className="text-xs text-gray-500">Responsive</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Advertisement</div>
                <GoogleAd 
                  slot="9762507232" 
                  format="auto"
                  responsive={true}
                  className="min-h-[90px]"
                />
              </div>

              {/* Google AdSense Display Placeholder */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Google AdSense - Leaderboard (Placeholder)
                  </span>
                  <span className="text-xs text-gray-500">728x90</span>
                </div>
                <div className="h-24 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Create another ad unit for this size</p>
                </div>
              </div>

              {/* Media.net Display */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Media.net - Rectangle
                  </span>
                  <span className="text-xs text-gray-500">300x250</span>
                </div>
                <div className="h-64 w-full md:w-80 bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Medium Rectangle Ad</p>
                </div>
              </div>

              {/* Amazon Native Shopping Ads */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Amazon Associates - Shopping
                  </span>
                  <span className="text-xs text-gray-500">Responsive</span>
                </div>
                <div className="h-32 bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900 dark:to-yellow-900 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Amazon Product Banner</p>
                </div>
              </div>
            </div>
          )}

          {/* Native Ads Section */}
          {activeTab === 'native' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Native Ad Placements
              </h2>

              {/* Taboola Feed */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Taboola - Content Feed
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700"></div>
                      <div className="p-3">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Sponsored Content Title</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Brand Name</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outbrain Feed */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="mb-3">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Outbrain - Recommended Content
                  </span>
                </div>
                <div className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="flex gap-4 bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                      <div className="w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-700 dark:to-blue-700 rounded flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                          Recommended Article Headline Goes Here
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Sponsored by Brand</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Integration Info */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3">
            💡 Ready to integrate real ads?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Replace the placeholder divs with actual ad code from your preferred providers. 
            Check the README for detailed integration instructions for each platform.
          </p>
          <Link 
            href="/adsense"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            View Live Google AdSense Example
          </Link>
        </div>
      </div>
    </main>
  );
}
