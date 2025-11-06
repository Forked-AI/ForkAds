# Google AdSense Setup Guide

Your AdSense script has been integrated! Here's what's been configured:

## ✅ What's Done

1. **AdSense Script Loaded** - Added to `/src/app/layout.tsx`
   - Publisher ID: `ca-pub-2936566029635389`
   - Loads on all pages automatically
   - Uses Next.js Script component for optimization

2. **Configuration Updated** - In `/src/config/adConfig.ts`
   - Enabled: `true`
   - Publisher ID configured

3. **Components Ready** - `/src/components/ads/GoogleAd.tsx`
   - Pre-configured with your publisher ID
   - Ready to use with your ad slot IDs

4. **Example Page Created** - `/src/app/adsense/page.tsx`
   - Live demonstration page
   - Shows different ad formats
   - Includes usage instructions

## 🚀 Quick Start

### Step 1: Visit the Example Page
Navigate to: **http://localhost:3000/adsense**

### Step 2: Create Ad Units in AdSense

1. Go to [Google AdSense](https://www.google.com/adsense/)
2. Click **Ads** → **By ad unit** → **Display ads**
3. Create ad units with names like:
   - "Header Banner" (Leaderboard 728x90)
   - "Sidebar" (Medium Rectangle 300x250)
   - "In-Content" (Responsive)
   - "Footer" (Banner)

4. For each ad unit, copy the **data-ad-slot** ID (looks like: `1234567890`)

### Step 3: Update Your Code

Replace placeholder slot IDs with your real ones:

```tsx
// Example usage
import GoogleAd from '@/components/ads/GoogleAd';

// Replace "1234567890" with your actual slot ID
<GoogleAd slot="1234567890" format="auto" responsive={true} />
```

### Step 4: Update Configuration (Optional)

Edit `/src/config/adConfig.ts`:

```typescript
googleAdsense: {
  enabled: true,
  publisherId: 'ca-pub-2936566029635389', // Already set!
  adSlots: {
    header: 'YOUR-HEADER-SLOT-ID',      // Replace with real IDs
    sidebar: 'YOUR-SIDEBAR-SLOT-ID',
    inContent: 'YOUR-CONTENT-SLOT-ID',
    footer: 'YOUR-FOOTER-SLOT-ID',
  },
},
```

## 📋 Ad Formats Available

### 1. Auto/Responsive Ads
Best for most cases - adapts to container size:
```tsx
<GoogleAd slot="YOUR-SLOT-ID" format="auto" responsive={true} />
```

### 2. Horizontal/Leaderboard
Fixed size banners (728x90):
```tsx
<GoogleAd slot="YOUR-SLOT-ID" format="horizontal" responsive={false} />
```

### 3. Rectangle
Medium rectangle (300x250):
```tsx
<GoogleAd slot="YOUR-SLOT-ID" format="rectangle" responsive={false} />
```

### 4. Vertical
Skyscraper format:
```tsx
<GoogleAd slot="YOUR-SLOT-ID" format="vertical" responsive={false} />
```

## 🎯 Recommended Ad Placements

### Homepage (`/src/app/page.tsx`)
```tsx
import GoogleAd from '@/components/ads/GoogleAd';

// Add at the top of your content
<GoogleAd slot="YOUR-HEADER-SLOT" format="auto" responsive={true} />
```

### Ads Page (`/src/app/ads/page.tsx`)
Replace the placeholder divs with real ads:

```tsx
// Replace this placeholder:
<div className="aspect-video bg-gradient-to-br...">
  <div className="text-center">
    <p>Video Ad Placeholder</p>
  </div>
</div>

// With real ad:
<GoogleAd slot="YOUR-VIDEO-SLOT" format="auto" responsive={true} />
```

### With Lazy Loading (Recommended)
For better performance on below-the-fold ads:

```tsx
import LazyAd from '@/components/ads/LazyAd';
import GoogleAd from '@/components/ads/GoogleAd';

<LazyAd threshold={0.1} rootMargin="200px">
  <GoogleAd slot="YOUR-SLOT-ID" format="auto" responsive={true} />
</LazyAd>
```

## ⏰ Timeline

- **Immediate**: Test ads may appear (blank or generic ads)
- **24-48 hours**: Account approval (for new accounts)
- **After approval**: Real ads from advertisers will display
- **1-2 weeks**: Optimization period for best-performing ads

## 🐛 Troubleshooting

### No Ads Showing?
1. **Account Status**: Check if your AdSense account is approved
2. **Ad Blockers**: Disable ad blockers in your browser
3. **Console Errors**: Open browser DevTools → Console for error messages
4. **Wait Time**: New accounts need 24-48 hours for approval
5. **Content**: Ensure your site has quality content (AdSense requirement)

### Ads Show Blank Space?
- This is normal during testing/setup
- Wait for AdSense approval
- Check that slot IDs are correct

### "AdSense head tag is not present" Error?
- Already fixed! The script is in your layout.tsx
- Clear your browser cache and reload

## 📊 Next Steps

1. ✅ Create ad units in AdSense dashboard
2. ✅ Copy slot IDs 
3. ✅ Replace placeholder IDs in your code
4. ✅ Test on localhost
5. ✅ Deploy to production
6. ✅ Submit site for AdSense review (if new account)
7. ✅ Wait for approval
8. ✅ Monitor earnings in AdSense dashboard

## 💰 Revenue Expectations

- **CPM Range**: $1-$5 on average (varies by niche and geography)
- **Payment**: Once you reach $100 threshold
- **Optimization**: Takes 1-2 weeks for AdSense to learn your audience

## 🔗 Useful Links

- [AdSense Dashboard](https://www.google.com/adsense/)
- [AdSense Policies](https://support.google.com/adsense/answer/48182)
- [Ad Sizes Guide](https://support.google.com/adsense/answer/6002621)
- [Optimization Tips](https://support.google.com/adsense/answer/17957)

## 📝 Files Modified

- ✅ `/src/app/layout.tsx` - Added AdSense script
- ✅ `/src/config/adConfig.ts` - Added your publisher ID
- ✅ `/src/components/ads/GoogleAd.tsx` - Pre-configured component
- ✅ `/src/app/adsense/page.tsx` - Created example page

---

**Your AdSense is ready to go! Just add your slot IDs and you're all set! 🚀**
