# Kutch Travel - Render Deployment Guide

This guide will help you deploy the Kutch Travel website on Render.

## Prerequisites

- A [Render account](https://render.com) (free tier available)
- Your code pushed to GitHub repository: `nrbhai/kutchtravel`

## Deployment Steps

### Option 1: Using render.yaml (Recommended)

1. **Connect Your Repository to Render**
   - Log in to your Render dashboard
   - Click "New +" → "Blueprint"
   - Connect your GitHub account if not already connected
   - Select the `nrbhai/kutchtravel` repository
   - Render will automatically detect the `render.yaml` file

2. **Deploy**
   - Click "Apply" to deploy with the configuration in `render.yaml`
   - Render will automatically:
     - Install dependencies: `npm install`
     - Build the application: `npm run build`
     - Start the server: `npm start`
   - Wait 5-10 minutes for the initial build

3. **Access Your Site**
   - Once deployed, Render will provide a URL like: `https://kutchtravel.onrender.com`
   - Your site is now live!

### Option 2: Manual Configuration

1. **Create New Web Service**
   - Log in to Render dashboard
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Name**: `kutchtravel`
   - **Region**: Oregon (US West) or closest to you
   - **Branch**: `main`
   - **Root Directory**: Leave empty
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free

3. **Environment Variables**
   - Add these environment variables:
     - `NODE_VERSION` = `20.11.0`
     - `NODE_ENV` = `production`

4. **Deploy**
   - Click "Create Web Service"
   - Wait for the build to complete (5-10 minutes)

## Post-Deployment

### Verify Your Deployment

1. Visit your Render URL
2. Check that:
   - Homepage loads correctly
   - All destinations pages work
   - Images display properly
   - Navigation functions correctly
   - Gallery pages load

### Custom Domain (Optional)

1. Go to your service settings on Render
2. Click "Custom Domains"
3. Add your domain (e.g., `kutchtravel.com`)
4. Follow Render's instructions to update your DNS settings
5. Render provides free SSL certificates automatically

## Important Notes

### Build Configuration

The project is configured with:
- **Output mode**: `standalone` - Optimized for production deployment
- **Node version**: 20.11.0 (LTS)
- **Next.js version**: 16.0.1

### Free Tier Limitations

On Render's free tier:
- Service spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds (cold start)
- 750 hours/month free compute time
- Upgrade to paid plan for always-on service

### Auto-Deploy

The `render.yaml` configuration enables auto-deploy:
- Every push to the `main` branch triggers automatic deployment
- Build takes 5-10 minutes typically
- Render shows build logs in real-time

## Troubleshooting

### Build Fails

1. Check Render build logs for specific errors
2. Verify all dependencies are in `package.json`
3. Ensure Node version matches (20.11.0)

### Images Not Loading

- Images are stored in `/public/images/`
- Verify image paths don't have leading `/public/`
- Use Next.js Image component for optimization

### Site Not Loading

1. Check Render service logs
2. Verify the start command: `npm start`
3. Ensure build completed successfully
4. Check for runtime errors in logs

## Performance Tips

1. **Images**: Already optimized with Next.js Image component
2. **Caching**: Headers configured for optimal caching
3. **Compression**: Enabled in next.config.ts
4. **Static Generation**: Most pages pre-rendered at build time

## Support

For Render-specific issues:
- [Render Documentation](https://render.com/docs)
- [Render Community](https://community.render.com)

For application issues:
- Check GitHub repository: `nrbhai/kutchtravel`
- Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## Project Structure

```
kutchtravel/
├── app/                    # Next.js App Router
│   ├── destinations/       # Destination pages
│   ├── crafts/            # Craft pages
│   ├── places/            # Places pages
│   ├── gallery/           # Gallery pages
│   └── components/        # React components
├── public/                # Static assets
│   └── images/           # Image files
├── next.config.ts        # Next.js configuration
├── package.json          # Dependencies & scripts
└── render.yaml          # Render deployment config
```

## Quick Commands

```bash
# Development
npm run dev

# Production build (local testing)
npm run build
npm start

# Type checking
npm run type-check

# Linting
npm run lint

# SEO audit
npm run seo-audit
```

---

**Your site is now ready for deployment! 🚀**

Push your code to GitHub and follow the deployment steps above.
