# Self-Hosted Ads System - Quick Start Guide

## 🚀 What's Been Set Up

Your self-hosted ads platform is now fully functional with:

### Database Setup ✅
- **Prisma ORM** configured with PostgreSQL
- **Ad Model** with fields:
  - id, title, description, imageUrl, targetUrl
  - impressions (tracked automatically)
  - clicks (tracked automatically)
  - isActive (toggle on/off)
  - createdAt, updatedAt

### API Routes ✅
- `POST /api/ads` - Create a new ad
- `GET /api/ads` - Get all active ads (use `?all=true` for all ads)
- `GET /api/ads/[id]` - Get a specific ad
- `PUT /api/ads/[id]` - Update an ad
- `DELETE /api/ads/[id]` - Delete an ad
- `POST /api/ads/[id]/impression` - Track impression
- `POST /api/ads/[id]/click` - Track click

### Pages ✅
- `/admin/ads` - Admin dashboard to create/manage ads
- `/self-hosted-ads` - Demo page showing live ads

### Components ✅
- `SelfHostedAd` - Reusable component to display ads
  - Supports 3 formats: horizontal, vertical, square
  - Automatically tracks impressions and clicks
  - Randomly selects from active ads

## 📖 How to Use

### 1. Create Your First Ad

Visit: `http://localhost:3000/admin/ads`

Fill in the form:
- **Title**: Name of your ad
- **Description**: (Optional) Short description
- **Image URL**: Direct URL to an image
- **Target URL**: Where users go when they click

Example:
```
Title: Amazing Product Launch
Description: Get 50% off our new product!
Image URL: https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a
Target URL: https://example.com/product
```

### 2. Display Ads on Your Pages

Import and use the `SelfHostedAd` component:

```tsx
import SelfHostedAd from '@/components/ads/SelfHostedAd';

export default function MyPage() {
  return (
    <div>
      {/* Horizontal ad (default) */}
      <SelfHostedAd format="horizontal" />
      
      {/* Square ad */}
      <SelfHostedAd format="square" />
      
      {/* Vertical ad */}
      <SelfHostedAd format="vertical" />
    </div>
  );
}
```

### 3. Track Performance

Go to `/admin/ads` to see:
- **Impressions**: How many times the ad was displayed
- **Clicks**: How many times users clicked
- **CTR (Click-Through Rate)**: Clicks / Impressions × 100%

### 4. Manage Ads

From the admin dashboard, you can:
- ✏️ **Edit** - Update ad content, images, or URLs
- ⏸️ **Toggle Active/Inactive** - Temporarily disable ads
- 🗑️ **Delete** - Permanently remove ads

## 🎨 Ad Formats

### Horizontal
Best for header/footer banners
- Image on left, content on right
- 1/3 image, 2/3 content ratio

### Vertical
Best for sidebars
- Stacked layout
- Image on top, content below

### Square
Best for content grids
- Equal aspect ratio
- Balanced layout

## 💡 Tips

1. **Image URLs**: Use high-quality images (min 800x600)
   - Free sources: Unsplash, Pexels, Pixabay
   - Your own images: Upload to cloud storage (AWS S3, Cloudinary)

2. **Target URLs**: Always use full URLs with `https://`

3. **Performance**: The component randomly selects from active ads
   - More variety = better user experience
   - Create 5-10 ads for optimal rotation

4. **Analytics**: Check dashboard daily to:
   - Identify top-performing ads
   - Disable low-performing ads
   - Update content based on CTR

## 🔧 Technical Details

### Database Schema
```prisma
model Ad {
  id          String   @id @default(cuid())
  title       String
  description String?
  imageUrl    String
  targetUrl   String
  impressions Int      @default(0)
  clicks      Int      @default(0)
  isActive    Boolean  @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

### Environment Variables
Make sure `.env` has:
```bash
DATABASE_URL="your-postgresql-connection-string"
```

## 🚀 Next Steps

1. **Create Sample Ads**: Add 3-5 test ads in the admin panel
2. **Test Display**: Visit `/self-hosted-ads` to see them live
3. **Integrate**: Add `SelfHostedAd` components to your pages
4. **Monitor**: Check analytics to optimize performance

## 🆘 Troubleshooting

### "No ads available"
- Check if you've created any ads in `/admin/ads`
- Ensure at least one ad is marked as "Active"

### Images not loading
- Verify image URLs are valid and publicly accessible
- Check browser console for CORS errors
- Use direct image links (not webpage URLs)

### Clicks not tracking
- Check browser console for API errors
- Verify DATABASE_URL is set correctly
- Ensure Prisma client is generated (`npx prisma generate`)

## 📚 API Examples

### Create an ad via API:
```bash
curl -X POST http://localhost:3000/api/ads \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Summer Sale",
    "description": "Up to 70% off!",
    "imageUrl": "https://example.com/image.jpg",
    "targetUrl": "https://example.com/sale"
  }'
```

### Get all ads:
```bash
curl http://localhost:3000/api/ads
```

### Track impression:
```bash
curl -X POST http://localhost:3000/api/ads/[ad-id]/impression
```

---

**Built with**: Next.js 13, Prisma, PostgreSQL, TypeScript, Tailwind CSS

**Ready to monetize!** 💰
