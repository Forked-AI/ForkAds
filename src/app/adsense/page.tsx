'use client';

import GoogleAd from '@/components/ads/GoogleAd';
import LazyAd from '@/components/ads/LazyAd';
import Link from 'next/link';

export default function GoogleAdsExample() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/ads" 
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-2 mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Ads Showcase
          </Link>
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
            Google AdSense Live Ads
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Your AdSense account: <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">ca-pub-2936566029635389</code>
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-1">✅ AdSense Configured!</h3>
              <p className="text-sm text-green-700 dark:text-green-400">
                Your ad unit &quot;Fork AI&quot; (Slot: <code className="bg-green-100 dark:bg-green-800 px-1 rounded">9762507232</code>) is ready. 
                Real ads will appear once your account is approved by Google.
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">📋 What&apos;s Happening Now</h2>
          <ol className="space-y-3 text-gray-600 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong>AdSense Script Loaded:</strong> Your publisher ID is active on all pages</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong>Ad Unit Created:</strong> &quot;Fork AI&quot; (ID: 9762507232) is configured</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</span>
              <span><strong>Ads Displaying Below:</strong> You can see 3 ad placements on this page</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⏳</span>
              <span><strong>Waiting for Approval:</strong> Real ads will appear once Google approves your account (24-48 hours)</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">💡</span>
              <span><strong>Create More Ad Units:</strong> Visit your <a href="https://www.google.com/adsense/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AdSense dashboard</a> to create different ad sizes and placements</span>
            </li>
          </ol>
        </div>

        {/* Sample Content with Ads */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Sample Content Article</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This is a sample content page showing how ads integrate with your content. The ads are placed strategically 
            throughout the page for optimal visibility and user experience.
          </p>

          {/* Top Banner Ad - Leaderboard 728x90 */}
          <div className="my-8">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">Advertisement</div>
            <div className="flex justify-center">
              <GoogleAd 
                slot="9762507232" 
                format="auto"
                responsive={true}
                className="max-w-full"
              />
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat.
          </p>

          {/* In-Content Ad - Rectangle 300x250 */}
          <div className="my-8 float-right ml-4 mb-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">Advertisement</div>
            <GoogleAd 
              slot="9762507232" 
              format="auto"
              responsive={true}
              className="w-80"
            />
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem 
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4 clear-both">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni 
            dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </article>

        {/* Lazy Loaded Bottom Ad */}
        <div className="my-8">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">Advertisement (Lazy Loaded)</div>
          <LazyAd threshold={0.1} rootMargin="200px">
            <div className="flex justify-center">
              <GoogleAd 
                slot="9762507232" 
                format="auto"
                responsive={true}
                className="max-w-full"
              />
            </div>
          </LazyAd>
        </div>

        {/* Code Example */}
        <div className="bg-gray-900 rounded-xl p-6 mb-8 overflow-x-auto">
          <div className="text-sm text-gray-300 mb-2 font-semibold">✅ Your Ad Unit is Configured:</div>
          <pre className="text-sm text-green-400">
{`import GoogleAd from '@/components/ads/GoogleAd';

<GoogleAd 
  slot="9762507232"  // Your "Fork AI" ad unit
  format="auto" 
  responsive={true} 
/>`}
          </pre>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-3">💡 Pro Tips</h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-400">
            <li className="flex gap-2">
              <span>✅</span>
              <span>Your ad slot ID <code>9762507232</code> is already configured and ready to use!</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Use <code>format=&quot;auto&quot;</code> for responsive ads that adapt to screen size</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Use <code>format=&quot;rectangle&quot;</code> for fixed 300x250 medium rectangle ads</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Use <code>format=&quot;horizontal&quot;</code> for leaderboard/banner ads</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Wrap ads in <code>&lt;LazyAd&gt;</code> component for better performance</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Test ads may show initially, real ads appear after approval</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
