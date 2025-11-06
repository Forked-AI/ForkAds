Ad Components

This directory contains reusable ad components for different ad providers.

## Usage

Import and use these components in your pages:

```tsx
import GoogleAd from '@/components/ads/GoogleAd';
import VideoAd from '@/components/ads/VideoAd';

<GoogleAd slot="1234567890" format="auto" />
<VideoAd adTagUrl="YOUR_AD_TAG_URL" />
```

## Components

- `GoogleAd.tsx` - Google AdSense display ads
- `VideoAd.tsx` - Video ads (YouTube IMA SDK compatible)
- `NativeAd.tsx` - Native ad placeholders
- `LazyAd.tsx` - Wrapper for lazy loading ads
