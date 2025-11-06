'use client';

import Link from 'next/link';

export default function AutoAdsDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-2 mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Về Trang Chủ
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🤖 Google AdSense Auto Ads
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Quảng cáo tự động xuất hiện - Không cần code thêm!
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <h3 className="font-bold text-green-800 dark:text-green-300 text-xl mb-2">
                ✅ Auto Ads Đã Được Kích Hoạt!
              </h3>
              <p className="text-green-700 dark:text-green-400 mb-3">
                Script AdSense đang chạy trên trang này. Google sẽ tự động đặt quảng cáo ở các vị trí tối ưu nhất.
              </p>
              <div className="bg-green-100 dark:bg-green-800 rounded-lg p-3 text-sm">
                <p className="font-semibold text-green-900 dark:text-green-200 mb-1">
                  Publisher ID: <code className="bg-white dark:bg-green-900 px-2 py-0.5 rounded">ca-pub-2936566029635389</code>
                </p>
                <p className="text-green-700 dark:text-green-300">
                  Status: 🟢 Đang hoạt động trên tất cả các trang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <span>🎯</span>
            Cách Hoạt Động
          </h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="font-bold text-blue-600 dark:text-blue-300">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Script Tự Động Tải</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AdSense script được tải khi trang mở, chạy trên mọi trang của website
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="font-bold text-blue-600 dark:text-blue-300">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">AI Phân Tích Layout</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Google AI quét trang web, phân tích layout và tìm vị trí tốt nhất
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="font-bold text-blue-600 dark:text-blue-300">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Quảng Cáo Xuất Hiện</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Quảng cáo được chèn tự động vào các vị trí tối ưu (10-60 phút sau khi bật)
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="font-bold text-blue-600 dark:text-blue-300">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-1">Tối Ưu Liên Tục</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  AI học hỏi và điều chỉnh vị trí quảng cáo để tối đa hóa doanh thu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Content */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Bài Viết Mẫu
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Đây là một bài viết mẫu để demo Auto Ads. Google sẽ tự động phân tích nội dung 
            này và chèn quảng cáo vào các vị trí phù hợp nhất dựa trên thuật toán AI của họ.
          </p>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            <strong>Lưu ý quan trọng:</strong> Quảng cáo có thể xuất hiện ở nhiều vị trí khác nhau:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
            <li>Phía trên nội dung (Above the fold)</li>
            <li>Giữa các đoạn văn (In-content)</li>
            <li>Sidebar (nếu layout có)</li>
            <li>Cuối bài viết (Below content)</li>
            <li>Anchor ads (dính ở đầu/cuối màn hình khi scroll)</li>
            <li>Vignette ads (toàn màn hình khi chuyển trang)</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              ⚠️ <strong>Quan trọng:</strong> Quảng cáo tự động chỉ xuất hiện sau khi:
            </p>
            <ul className="list-disc list-inside mt-2 text-yellow-700 dark:text-yellow-400 text-sm space-y-1">
              <li>Tài khoản AdSense đã được duyệt</li>
              <li>Bật Auto Ads trong AdSense dashboard</li>
              <li>Đợi 10-60 phút để hệ thống xử lý</li>
              <li>Website đã được deploy lên production (có domain thật)</li>
            </ul>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 mt-8">
            Ưu Điểm Của Auto Ads
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⚡</span>
                <h4 className="font-bold text-blue-900 dark:text-blue-300">Nhanh Chóng</h4>
              </div>
              <p className="text-blue-800 dark:text-blue-400 text-sm">
                Không cần code thủ công cho từng vị trí. Chỉ cần 1 script cho toàn bộ site.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎯</span>
                <h4 className="font-bold text-green-900 dark:text-green-300">Tối Ưu Tự Động</h4>
              </div>
              <p className="text-green-800 dark:text-green-400 text-sm">
                AI của Google tự động tìm vị trí tốt nhất và điều chỉnh theo thời gian thực.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📱</span>
                <h4 className="font-bold text-purple-900 dark:text-purple-300">Responsive</h4>
              </div>
              <p className="text-purple-800 dark:text-purple-400 text-sm">
                Tự động điều chỉnh cho mobile, tablet, desktop. Không lo layout vỡ.
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💰</span>
                <h4 className="font-bold text-orange-900 dark:text-orange-300">Doanh Thu Cao</h4>
              </div>
              <p className="text-orange-800 dark:text-orange-400 text-sm">
                Google tối ưu để tăng doanh thu mà vẫn giữ trải nghiệm người dùng tốt.
              </p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo.
          </p>
        </article>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
            <span>📋</span>
            Các Bước Tiếp Theo
          </h3>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Bật Auto Ads trong AdSense</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Vào <a href="https://www.google.com/adsense/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AdSense Dashboard</a> → Ads → Auto ads → Bật cho site của bạn
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Chọn định dạng quảng cáo</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Chọn các loại quảng cáo bạn muốn: In-page, Anchor, Vignette, v.v.
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Deploy lên production</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Website cần có domain thật để Auto Ads hoạt động đúng cách
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <p className="text-gray-800 dark:text-gray-200 font-medium">Đợi và kiếm tiền!</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Quảng cáo sẽ xuất hiện trong 10-60 phút và bạn bắt đầu kiếm tiền! 💰
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* Related Pages */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            🔗 Trang Liên Quan
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/ads"
              className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <span className="text-2xl">🎨</span>
              <div>
                <p className="font-semibold text-blue-900 dark:text-blue-300">Ads Showcase</p>
                <p className="text-sm text-blue-700 dark:text-blue-400">Xem tất cả loại quảng cáo</p>
              </div>
            </Link>

            <Link 
              href="/adsense"
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <span className="text-2xl">📝</span>
              <div>
                <p className="font-semibold text-green-900 dark:text-green-300">Manual Ads</p>
                <p className="text-sm text-green-700 dark:text-green-400">Đặt quảng cáo thủ công</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
