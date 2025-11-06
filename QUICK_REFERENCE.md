# 🎯 Quick Reference - Google AdSense Integration

## Your Ad Details
```
Publisher ID: ca-pub-2936566029635389
Ad Unit: Fork AI
Slot ID: 9762507232
Status: ✅ LIVE & CONFIGURED
```

## View Your Ads
- **Live Examples:** http://localhost:3000/adsense
- **Showcase Page:** http://localhost:3000/ads (Banner tab)
- **Home Page:** http://localhost:3000

## Copy & Paste Code

### Basic Ad
```tsx
import GoogleAd from '@/components/ads/GoogleAd';

<GoogleAd slot="9762507232" format="auto" responsive={true} />
```

### Lazy Loaded Ad
```tsx
import LazyAd from '@/components/ads/LazyAd';
import GoogleAd from '@/components/ads/GoogleAd';

<LazyAd>
  <GoogleAd slot="9762507232" format="auto" responsive={true} />
</LazyAd>
```

### Full Page Example
```tsx
'use client';
import GoogleAd from '@/components/ads/GoogleAd';

export default function MyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>My Content</h1>
      
      {/* Ad goes here */}
      <div className="my-8">
        <div className="text-xs text-gray-500 mb-2 text-center">
          Advertisement
        </div>
        <GoogleAd slot="9762507232" format="auto" responsive={true} />
      </div>
      
      <p>More content...</p>
    </div>
  );
}
```

## Files Modified
- ✅ `/src/app/layout.tsx` - AdSense script loaded
- ✅ `/src/config/adConfig.ts` - Your IDs configured
- ✅ `/src/components/ads/GoogleAd.tsx` - Ready to use
- ✅ `/src/app/adsense/page.tsx` - Live examples
- ✅ `/src/app/ads/page.tsx` - Showcase with live ad

## What Happens Next?
1. **Now:** Ads request Google for content
2. **0-48 hours:** Account review by Google
3. **After approval:** Real ads appear
4. **1-2 weeks:** AI optimization kicks in
5. **Ongoing:** Earn revenue!

## Commands
```bash
# Development
npm run dev          # Start at localhost:3000

# Production
npm run build        # Build for production
npm start            # Run production server
```

## Quick Links
- [AdSense Dashboard](https://www.google.com/adsense/)
- [Create More Ad Units](https://www.google.com/adsense/new/u/0/pub-2936566029635389/main/myads/ad-units)
- [View Reports](https://www.google.com/adsense/new/u/0/pub-2936566029635389/reports)

## Need Help?
- `ADSENSE_LIVE.md` - Complete usage guide
- `ADSENSE_SETUP.md` - Initial setup instructions
- `README_ADS.md` - Multi-provider guide

---
**Last Updated:** November 6, 2025
**Status:** 🟢 Fully Operational
