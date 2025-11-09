'use client';

import SelfHostedAd from '@/components/ads/SelfHostedAd';
import Link from 'next/link';

export default function SelfHostedAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Self-Hosted Ads Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Create, manage, and display your own ads with full control
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/admin/ads"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
            >
              🎨 Go to Admin Dashboard
            </Link>
            <Link
              href="/"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 rounded-lg font-medium shadow-lg transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-xl font-bold mb-2">Full Control</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create and manage your own ads without relying on third-party networks
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Track impressions, clicks, and CTR for all your ads in real-time
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2">Zero Fees</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No revenue sharing - keep 100% of your advertising income
            </p>
          </div>
        </div>

        {/* Live Ad Examples */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6">Live Ad Examples</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            These are real ads loaded from the database. Each view counts as an impression!
          </p>

          <div className="space-y-6">
            {/* Horizontal Ad */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                Horizontal Format
              </h3>
              <SelfHostedAd format="horizontal" />
            </div>

            {/* Grid with Square and Vertical */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Square Format
                </h3>
                <SelfHostedAd format="square" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-300">
                  Vertical Format
                </h3>
                <SelfHostedAd format="vertical" />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-600 dark:text-purple-200 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold mb-1">Create Your Ads</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Go to the admin dashboard and create ads with images, titles, descriptions, and target URLs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-600 dark:text-purple-200 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold mb-1">Embed Anywhere</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Use the <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">SelfHostedAd</code> component 
                  on any page to display your ads
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-600 dark:text-purple-200 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold mb-1">Track Performance</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Monitor impressions, clicks, and CTR for each ad in real-time from the dashboard
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold text-purple-600 dark:text-purple-200 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold mb-1">Optimize & Scale</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Enable/disable ads, update content, and scale your advertising based on performance data
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2 text-lg">Backend</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✅ Next.js 13 App Router</li>
                <li>✅ Prisma ORM</li>
                <li>✅ PostgreSQL Database</li>
                <li>✅ RESTful API Routes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-lg">Frontend</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>✅ React 18 with TypeScript</li>
                <li>✅ Tailwind CSS</li>
                <li>✅ Next.js Image Optimization</li>
                <li>✅ Real-time Analytics Tracking</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Create your first ad and start monetizing your platform today!
            </p>
            <Link
              href="/admin/ads"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
            >
              Create Your First Ad →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
