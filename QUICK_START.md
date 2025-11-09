# 🚀 Self-Hosted Ads - Quick Reference

## 📍 Important URLs

```
🏠 Home Page:          http://localhost:3000
🎨 Admin Dashboard:    http://localhost:3000/admin/ads
🎯 Demo Page:          http://localhost:3000/self-hosted-ads
```

## 🔧 Commands

```bash
# Start dev server
pnpm run dev

# Build for production
pnpm run build

# Generate Prisma Client (after schema changes)
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio (visual database browser)
npx prisma studio
```

## 📝 Create an Ad (Admin Dashboard)

1. Go to: `http://localhost:3000/admin/ads`
2. Fill in:
   - **Title**: Ad name
   - **Description**: Short description (optional)
   - **Image URL**: `https://...` (try Unsplash)
   - **Target URL**: `https://...` where users will go
3. Click "Create Ad"

## 🎨 Use the Component

```tsx
import SelfHostedAd from '@/components/ads/SelfHostedAd';

// In your page/component:
<SelfHostedAd format="horizontal" />  // Header/footer
<SelfHostedAd format="vertical" />    // Sidebar
<SelfHostedAd format="square" />      // Grid/cards
```

## 📡 API Endpoints

```bash
# Get all active ads
GET /api/ads

# Get all ads (including inactive)
GET /api/ads?all=true

# Create ad
POST /api/ads
Body: { title, description, imageUrl, targetUrl }

# Update ad
PUT /api/ads/[id]
Body: { title?, description?, imageUrl?, targetUrl?, isActive? }

# Delete ad
DELETE /api/ads/[id]

# Track impression
POST /api/ads/[id]/impression

# Track click
POST /api/ads/[id]/click
```

## 🖼️ Free Image Sources

```
https://unsplash.com/       - High-quality photos
https://pexels.com/         - Free stock photos
https://pixabay.com/        - Free images & videos
```

Example URL:
```
https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=800
```

## 📊 View Analytics

Go to admin dashboard to see:
- 👁️ Impressions (views)
- 🖱️ Clicks
- 📈 CTR (Click-Through Rate)

## 🎯 Ad Status

- **Active** (Green) = Shows to users
- **Inactive** (Gray) = Hidden from users

Click the status badge to toggle.

## 🗑️ Manage Ads

From admin dashboard:
- **Edit** = Update content
- **Toggle Status** = Show/hide
- **Delete** = Permanently remove

## 💡 Pro Tips

1. **Create 5-10 ads** for variety
2. **Use high-quality images** (min 800x600)
3. **Check CTR daily** to optimize
4. **Disable low-performing ads**
5. **Update content weekly** for freshness

## 🔍 Troubleshooting

**"No ads available"**
→ Create ads in `/admin/ads` and ensure they're Active

**Image not loading**
→ Check if URL is valid and publicly accessible

**Can't access admin**
→ Make sure server is running (`pnpm run dev`)

**Database error**
→ Check `.env` has correct `DATABASE_URL`

## 📚 Documentation Files

- `SELF_HOSTED_ADS_GUIDE.md` - Full usage guide
- `IMPLEMENTATION_SUMMARY.md` - Technical details
- `README.md` - Project overview

## 🎨 Component Props

```tsx
interface SelfHostedAdProps {
  format?: 'horizontal' | 'vertical' | 'square';
  className?: string;  // Additional Tailwind classes
}
```

## 🌐 Production Checklist

Before deploying:
- [ ] Add authentication to `/admin/ads`
- [ ] Set up environment variables on hosting
- [ ] Configure CORS if needed
- [ ] Add rate limiting to API
- [ ] Optimize images (use CDN)
- [ ] Enable database connection pooling
- [ ] Set up monitoring/logging

## 🎉 You're Ready!

Start creating ads and start monetizing! 💰

**Next Step:** Visit http://localhost:3000/admin/ads
