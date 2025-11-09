# Fork.AI Ads Platform

A comprehensive Next.js-based ad management platform featuring:
- 🤖 **Google AdSense Integration** (Auto Ads + Manual Placement)
- 🚀 **Self-Hosted Ad System** with database-backed ad management
- 📊 **Real-time Analytics** (Impressions, Clicks, CTR)
- 🎨 **Multiple Ad Formats** (Video, Banner, Native)
- 💰 **Zero Fees** - Full control over your advertising

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ✨ Features

### 1. Self-Hosted Ads System
- Create and manage your own ads through an admin dashboard
- Track impressions and clicks automatically
- Calculate CTR (Click-Through Rate) in real-time
- Toggle ads on/off without deleting
- 3 ad formats: Horizontal, Vertical, Square
- PostgreSQL database with Prisma ORM

### 2. Google AdSense Integration
- Auto Ads - Google automatically places ads
- Manual placement with custom ad units
- Live integration with publisher ID: `ca-pub-2936566029635389`

### 3. Additional Ad Providers (Documentation)
- Amazon Associates
- Media.net
- PropellerAds
- Taboola
- Outbrain
- AdThrive
- Ezoic
- Monumetric
- Mediavine
- Carbon Ads

## 🚀 Quick Start

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the home page.
Navigate to [http://localhost:3000/ads](http://localhost:3000/ads) to see the ad showcase.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
fork-ads/
├── src/
│   ├── app/
│   │   ├── ads/                   # Ad showcase
│   │   ├── adsense/               # Manual AdSense placement
│   │   ├── auto-ads/              # Auto Ads demo
│   │   ├── self-hosted-ads/       # Self-hosted ad demo
│   │   ├── admin/
│   │   │   └── ads/               # Ad management dashboard
│   │   ├── api/
│   │   │   └── ads/               # REST API for ad CRUD
│   │   ├── layout.tsx             # Root layout with AdSense
│   │   ├── page.tsx               # Home page
│   │   └── globals.css
│   ├── components/
│   │   └── ads/
│   │       ├── GoogleAd.tsx       # Google AdSense component
│   │       ├── SelfHostedAd.tsx   # Self-hosted ad component
│   │       ├── VideoAd.tsx        # Video ad component (IMA SDK)
│   │       ├── NativeAd.tsx       # Native ad component
│   │       └── LazyAd.tsx         # Lazy loading wrapper
│   ├── config/
│   │   └── adConfig.ts            # Ad provider configuration
│   └── lib/
│       └── prisma.ts              # Prisma client instance
├── prisma/
│   └── schema.prisma              # Database schema
├── public/
├── README.md
├── README_ADS.md                  # AdSense integration guide
├── SELF_HOSTED_ADS_GUIDE.md       # Self-hosted ads guide
└── package.json
```

## 🎯 Key Pages

- **`/`** - Home page with links to all features
- **`/self-hosted-ads`** - Self-hosted ads demo and documentation
- **`/admin/ads`** - Admin dashboard to create/manage ads
- **`/ads`** - Ad showcase (Video, Banner, Native)
- **`/adsense`** - Manual AdSense placement examples
- **`/auto-ads`** - Auto Ads explanation and demo

## 🎯 Features

- **Multiple Ad Formats**: Support for video, banner, and native ads
- **Multiple Providers**: Ready for integration with 10+ ad networks
- **Lazy Loading**: Optimized ad loading for better performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Built with TypeScript
- **Reusable Components**: Modular ad components for easy integration

## 📊 Supported Ad Providers

1. **Google AdSense** - Display and video ads
2. **Media.net** - Contextual ads (Yahoo! Bing Network)
3. **Amazon Associates** - Product and shopping ads
4. **PropellerAds** - Various ad formats
5. **Taboola** - Native content recommendation
6. **Outbrain** - Native content discovery
7. **Ezoic** - AI-powered ad optimization
8. **AdThrive** - Premium ad network (100k+ monthly views)
9. **Mediavine** - Premium lifestyle content ads (50k+ sessions)
10. **YouTube IMA SDK** - Video advertising

## 📖 Documentation

- **[README_ADS.md](./README_ADS.md)** - Comprehensive guide for integrating ad providers
- **[Component Documentation](./src/components/ads/README.md)** - Guide for using ad components

## 🔧 Configuration

Edit `src/config/adConfig.ts` to add your ad provider credentials:

```typescript
export const adConfig = {
  googleAdsense: {
    enabled: true,
    publisherId: 'ca-pub-YOUR-ID',
    adSlots: {
      header: 'YOUR-SLOT-ID',
      // ... more slots
    },
  },
  // ... other providers
};
```

## 🎨 Usage Examples

### Google AdSense

```tsx
import GoogleAd from '@/components/ads/GoogleAd';

<GoogleAd slot="1234567890" format="auto" responsive={true} />
```

### Video Ads

```tsx
import VideoAd from '@/components/ads/VideoAd';

<VideoAd adTagUrl="https://pubads.g.doubleclick.net/..." />
```

### Native Ads

```tsx
import NativeAd from '@/components/ads/NativeAd';

<NativeAd 
  title="Product Title"
  description="Product description"
  imageUrl="/image.jpg"
  sponsoredBy="Brand Name"
  clickUrl="https://example.com"
/>
```

### Lazy Loading Ads

```tsx
import LazyAd from '@/components/ads/LazyAd';
import GoogleAd from '@/components/ads/GoogleAd';

<LazyAd threshold={0.1} rootMargin="100px">
  <GoogleAd slot="1234567890" />
</LazyAd>
```

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 🔐 Privacy & Compliance

- Implement GDPR/CCPA compliant consent management
- Respect Do Not Track settings
- Follow each ad provider's policies
- See [README_ADS.md](./README_ADS.md) for detailed compliance information

## 📈 Performance Tips

1. Use lazy loading for below-the-fold ads
2. Defer non-critical ad scripts
3. Use Next.js `<Script>` component with `strategy="afterInteractive"`
4. Monitor Core Web Vitals
5. Test ad placements regularly

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

**Built with Next.js 13, React 18, TypeScript, and Tailwind CSS**

