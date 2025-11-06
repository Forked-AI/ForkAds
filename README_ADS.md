# Ad Integration Guide

This document provides detailed information about integrating various ad providers into your Fork.AI Ads page.

## 🎯 Recommended Ad Providers

### 1. **Google AdSense** (Best for beginners)
- **Best for:** Display ads, video ads, auto ads
- **Monetization:** CPC (Cost Per Click) and CPM (Cost Per Mille)
- **Requirements:** Website approval, quality content
- **Integration:**
  ```jsx
  // Add to your page
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
       crossOrigin="anonymous"></script>
  
  // In your component
  <ins className="adsbygoogle"
       style={{ display: 'block' }}
       data-ad-client="ca-pub-XXXXXXXXXX"
       data-ad-slot="XXXXXXXXXX"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  ```
- **Pros:** Easy setup, reliable payments, huge advertiser base
- **Cons:** Requires approval, can be slow to get approved

### 2. **Media.net** (Yahoo! Bing Network)
- **Best for:** Contextual ads, display ads
- **Monetization:** CPC
- **Requirements:** Quality content, primarily US/UK/CA traffic
- **Integration:**
  ```jsx
  <script type="text/javascript">
    window._mNHandle = window._mNHandle || {};
    window._mNHandle.queue = window._mNHandle.queue || [];
    medianet_width = "728";
    medianet_height = "90";
    medianet_crid = "XXXXXXXXXX";
    medianet_versionId = "XXXXXXXXXX";
  </script>
  <script src="https://contextual.media.net/dmedianet.js?cid=XXXXXXXXXX" async="async"></script>
  ```
- **Pros:** Good alternative to AdSense, competitive rates
- **Cons:** Geo-restricted, approval required

### 3. **Amazon Native Shopping Ads**
- **Best for:** E-commerce content, product recommendations
- **Monetization:** CPC and commission on sales
- **Requirements:** Amazon Associates account
- **Integration:**
  ```jsx
  <script type="text/javascript">
    amzn_assoc_ad_type = "banner";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
    amzn_assoc_placement = "assoc_banner_placement_default";
    amzn_assoc_banner_type = "category";
    amzn_assoc_p = "48";
    amzn_assoc_tracking_id = "XXXXXXXXXX";
    amzn_assoc_banner_id = "XXXXXXXXXX";
  </script>
  <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script>
  ```
- **Pros:** High conversion for product-related content
- **Cons:** Best for e-commerce niches

### 4. **PropellerAds**
- **Best for:** High traffic sites, pop-unders, push notifications
- **Monetization:** CPM, CPA
- **Requirements:** No minimum traffic
- **Integration:**
  ```jsx
  <script type="text/javascript">
    var ad_idzone = "XXXXXXXX",
    ad_width = "728",
    ad_height = "90";
  </script>
  <script type="text/javascript" src="https://a.realsrv.com/ad-provider.js"></script>
  ```
- **Pros:** No approval needed, instant activation
- **Cons:** Can be intrusive, lower quality ads

### 5. **Taboola** (Native Ads)
- **Best for:** Content recommendation, native advertising
- **Monetization:** CPC
- **Requirements:** 500k monthly page views (minimum)
- **Integration:**
  ```jsx
  <div id="taboola-below-article-thumbnails"></div>
  <script type="text/javascript">
    window._taboola = window._taboola || [];
    _taboola.push({
      mode: 'thumbnails-a',
      container: 'taboola-below-article-thumbnails',
      placement: 'Below Article Thumbnails',
      target_type: 'mix'
    });
  </script>
  <script type="text/javascript" src="//cdn.taboola.com/libtrc/XXXXXXXXXX/loader.js" async></script>
  ```
- **Pros:** High-quality native ads, good revenue
- **Cons:** High traffic requirement

### 6. **Outbrain** (Native Ads)
- **Best for:** Content discovery, native ads
- **Monetization:** CPC
- **Requirements:** Quality content, decent traffic
- **Integration:**
  ```jsx
  <div className="OUTBRAIN" data-src="PAGE_URL" data-widget-id="XXXXXXXXXX"></div>
  <script type="text/javascript" async="async" src="https://widgets.outbrain.com/outbrain.js"></script>
  ```
- **Pros:** Premium advertisers, good match for content sites
- **Cons:** Requires approval

### 7. **Ezoic** (AI-Powered)
- **Best for:** Automated ad optimization, testing
- **Monetization:** Revenue share (90/10 split)
- **Requirements:** 10k monthly sessions
- **Integration:** DNS or WordPress plugin
- **Pros:** AI optimization, automatic testing, high revenue
- **Cons:** Requires traffic threshold, DNS integration

### 8. **AdThrive** (Premium)
- **Best for:** High-traffic sites (100k+ monthly page views)
- **Monetization:** Revenue share
- **Requirements:** 100k monthly page views minimum
- **Pros:** Highest revenue potential, premium advertisers
- **Cons:** High traffic requirement, competitive application

### 9. **Mediavine** (Premium)
- **Best for:** Lifestyle, food, parenting, travel blogs
- **Monetization:** Revenue share
- **Requirements:** 50k monthly sessions
- **Pros:** Excellent support, high CPMs, quality advertisers
- **Cons:** Traffic requirement, specific niches

### 10. **YouTube IMA SDK** (Video Ads)
- **Best for:** Video content, in-stream video ads
- **Monetization:** CPM
- **Requirements:** YouTube/Google Ads account
- **Integration:**
  ```jsx
  <script type="text/javascript" src="//imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
  <script>
    const adDisplayContainer = new google.ima.AdDisplayContainer(
      adContainerElement,
      videoElement
    );
    const adsLoader = new google.ima.AdsLoader(adDisplayContainer);
    const adsRequest = new google.ima.AdsRequest();
    adsRequest.adTagUrl = 'YOUR_AD_TAG_URL';
    adsLoader.requestAds(adsRequest);
  </script>
  ```
- **Pros:** High-quality video ads, VAST/VPAID compatible
- **Cons:** Requires video player implementation

## 📊 Quick Comparison

| Provider | Traffic Required | Approval | Best For | Avg. CPM |
|----------|-----------------|----------|----------|----------|
| Google AdSense | None | Yes | General | $1-$5 |
| Media.net | None | Yes | US/UK Traffic | $1-$4 |
| Amazon Associates | None | Yes | E-commerce | Varies |
| PropellerAds | None | No | High traffic | $0.50-$2 |
| Taboola | 500k/month | Yes | Native ads | $3-$10 |
| Outbrain | 10k/month | Yes | Native ads | $2-$8 |
| Ezoic | 10k sessions | Yes | Optimization | $5-$15 |
| AdThrive | 100k views | Yes | Premium | $10-$25 |
| Mediavine | 50k sessions | Yes | Lifestyle | $10-$30 |
| YouTube IMA | None | Yes | Video | $5-$15 |

## 🚀 Implementation Steps

### Step 1: Choose Your Providers
Select 2-3 providers based on your traffic, niche, and requirements.

### Step 2: Create Accounts
Sign up for accounts with your chosen providers and get approved.

### Step 3: Get Ad Codes
Once approved, generate ad units and copy the ad codes.

### Step 4: Update Components
Replace placeholder divs in `/src/app/ads/page.tsx` with actual ad codes.

### Step 5: Add Scripts to Layout
Add provider scripts to `/src/app/layout.tsx`:

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add your ad provider scripts here */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
             crossOrigin="anonymous"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### Step 6: Create Ad Components
For better organization, create reusable ad components:

```tsx
// src/components/GoogleAd.tsx
'use client';

import { useEffect } from 'react';

interface GoogleAdProps {
  slot: string;
  format?: string;
  responsive?: boolean;
}

export default function GoogleAd({ slot, format = 'auto', responsive = true }: GoogleAdProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block' }}
         data-ad-client="ca-pub-XXXXXXXXXX"
         data-ad-slot={slot}
         data-ad-format={format}
         data-full-width-responsive={responsive.toString()}></ins>
  );
}
```

## ⚠️ Best Practices

1. **Don't overload with ads** - Balance user experience and monetization
2. **Test ad placements** - Monitor performance and adjust
3. **Follow policies** - Each provider has strict content policies
4. **Optimize for mobile** - Most traffic is mobile
5. **Monitor performance** - Track CTR, CPM, and revenue
6. **A/B test** - Try different ad sizes and positions
7. **Consider lazy loading** - Improve page speed
8. **Respect user privacy** - Implement proper consent mechanisms (GDPR, CCPA)

## 🔒 Privacy & Compliance

### GDPR Compliance
Install a consent management platform (CMP):
- **Cookiebot**
- **OneTrust**
- **Usercentrics**

### Implementation Example
```jsx
// src/components/CookieConsent.tsx
'use client';

import { useEffect } from 'react';

export default function CookieConsent() {
  useEffect(() => {
    // Load your CMP script
    const script = document.createElement('script');
    script.src = 'YOUR_CMP_SCRIPT_URL';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
```

## 📈 Performance Tips

1. **Use lazy loading:**
```jsx
'use client';

import { useEffect, useRef } from 'react';

export default function LazyAd({ children }: { children: React.ReactNode }) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Load ad when visible
      }
    });

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={adRef}>{children}</div>;
}
```

2. **Defer non-critical scripts**
3. **Use next/script for optimization:**

```tsx
import Script from 'next/script';

export default function Layout({ children }) {
  return (
    <>
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        crossOrigin="anonymous"
      />
      {children}
    </>
  );
}
```

## 🎓 Additional Resources

- [Google AdSense Help](https://support.google.com/adsense)
- [Media.net Knowledge Base](https://www.media.net/knowledgebase)
- [Amazon Associates Help](https://affiliate-program.amazon.com/help)
- [Ezoic University](https://www.ezoic.com/ezoic-university/)
- [IAB Ad Standards](https://www.iab.com/guidelines/)

## 📝 Notes

- Always test ads in production environment
- Some providers require domain verification
- Revenue varies greatly by niche, traffic quality, and geography
- Consider using an ad management plugin or service for multiple providers
- Keep track of your payment thresholds and tax information

---

**Need help?** Check each provider's documentation or reach out to their support teams.
