# Kutch Travel Website 🏜️This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A comprehensive travel guide website for exploring the beautiful region of Kutch, Gujarat, India. Built with Next.js 16, featuring destinations, crafts, hidden gems, and a stunning gallery.## Getting Started



## FeaturesFirst, run the development server:



- 🗺️ **Destinations**: Detailed guides for 15+ tourist destinations in Kutch```bash

- 🎨 **Traditional Crafts**: Explore 8 authentic Kutchi handicraftsnpm run dev

- 💎 **Hidden Gems**: Discover secret spots and off-beat locations# or

- 📸 **Gallery**: Beautiful image galleries with lightbox viewingyarn dev

- 🏨 **Bookings**: Accommodation listings with auto-rotating craft carousel# or

- 📱 **Responsive Design**: Fully optimized for mobile and desktoppnpm dev

- ⚡ **Fast Performance**: Static generation with Next.js App Router# or

- 🎯 **SEO Optimized**: Structured data, sitemaps, and meta tagsbun dev

```

## Tech Stack

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

- **Framework**: Next.js 16.0.1 (App Router)

- **Language**: TypeScriptYou can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

- **Styling**: Tailwind CSS 4

- **Animations**: Framer MotionThis project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

- **Icons**: Lucide React

- **Image Gallery**: Yet Another React Lightbox## Learn More

- **Font**: Space Grotesk, Sora, Poppins

To learn more about Next.js, take a look at the following resources:

## Getting Started

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

### Prerequisites- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.



- Node.js 20.11.0 or higherYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

- npm, yarn, pnpm, or bun

## Deploy on Vercel

### Installation

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

```bash

# Clone the repositoryCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

git clone https://github.com/nrbhai/kutchtravel.git
cd kutchtravel

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Create production build
npm start          # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checking
npm run seo-audit  # Run SEO audit script
```

## Project Structure

```
kutchtravel/
├── app/
│   ├── destinations/     # Destination pages & data
│   ├── crafts/          # Traditional craft pages
│   ├── hidden-gems/     # Hidden gem pages
│   ├── places/          # Special places pages
│   ├── gallery/         # Gallery pages
│   ├── bookings/        # Accommodation bookings
│   ├── components/      # Shared React components
│   └── utils/           # Utility functions
├── public/
│   └── images/          # Static images
├── components/ui/       # UI components
├── scripts/            # Build and utility scripts
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── render.yaml         # Render deployment config
```

## Deployment

### Deploy to Render (Recommended)

This project is configured for easy deployment on Render. See [RENDER_DEPLOYMENT.md](RENDER_DEPLOYMENT.md) for detailed instructions.

Quick steps:
1. Push code to GitHub
2. Connect repository to Render
3. Render will auto-detect `render.yaml` and deploy

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms

The project uses `output: 'standalone'` mode, making it compatible with:
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Google Cloud Run
- Azure Static Web Apps

## Adding New Content

### Add a New Destination

1. Create data file in `app/destinations/data/newplace.ts`
2. Create page in `app/destinations/newplace/page.tsx`
3. Add images to `public/images/newplace/`
4. Update exports in `app/destinations/data/index.ts`

See [.github/copilot-instructions.md](.github/copilot-instructions.md) for detailed onboarding checklist.

## Configuration

### Environment Variables

No environment variables required for basic deployment. Optional:

```bash
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Image Optimization

Images are automatically optimized by Next.js:
- WebP and AVIF formats
- Responsive sizes
- Lazy loading
- Quality optimization

## Performance

- ✅ 57 static pages pre-rendered at build time
- ✅ Optimized images with Next.js Image component
- ✅ Code splitting and lazy loading
- ✅ Compression enabled
- ✅ Security headers configured
- ✅ Cache headers for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ for travelers exploring the beauty of Kutch**
