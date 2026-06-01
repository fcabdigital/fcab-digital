# FCAB Digital Website

A modern, minimal, and bold Next.js website for FCAB Digital with interactive elements, hover effects, and animated charts.

## Features

- **Minimal & Bold Design**: Clean, modern interface with orange and green accent colors
- **Interactive Charts**: Animated trajectory charts showing business growth metrics
- **Hover Effects**: Smooth, engaging hover animations throughout
- **Contact Forms**: Email-based contact form with validation
- **Responsive Design**: Fully mobile-friendly across all devices
- **Google Analytics**: Built-in GA tracking (GTM-M4RV5FQ)
- **SEO Optimized**: Meta tags, structured data, and proper URL structure
- **Fast Performance**: Static generation with Next.js for lightning-fast load times

## Project Structure

```
fcab-digital/
├── app/
│   ├── layout.tsx           # Root layout with GA
│   ├── globals.css          # Global styles & animations
│   ├── page.tsx             # Homepage
│   ├── contact-us/          # Contact page
│   ├── api/contact/         # Email API endpoint
│   ├── seo/                 # Service pages
│   ├── google-ads/
│   ├── web-design/
│   ├── customer-relationship-management/
│   ├── privacy-policy/
│   ├── thank-you/
│   └── [...slug]/           # Dynamic routes for locations
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer
│   ├── ContactForm.tsx      # Contact form
│   ├── TrajectoryChart.tsx  # Animated chart
│   └── PageTemplate.tsx     # Reusable page layout
├── lib/
│   └── pages.ts             # Page data utilities
├── public/
│   └── images/              # Downloaded assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Local Development

1. **Clone/setup the project:**
   ```bash
   cd fcab-digital
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Visit `http://localhost:3000`
   - Edit pages and see changes instantly

### Environment Setup

Create a `.env.local` file for email configuration (optional for local testing):

```env
# For production: Configure one of these email services
SENDGRID_API_KEY=your_key_here
# OR
RESEND_API_KEY=your_key_here
```

## Email Configuration

The contact form is currently set up for local development. For production, you'll need to configure an email service:

### Option 1: Resend (Recommended for Vercel)
```bash
npm install resend
```

Update `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send(emailData);
```

### Option 2: SendGrid
```bash
npm install @sendgrid/mail
```

### Option 3: Nodemailer (Self-hosted SMTP)
```bash
npm install nodemailer
```

## Building for Production

```bash
npm run build
npm start
```

This creates an optimized production build that can be deployed anywhere.

## Deploying to Vercel

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Set environment variables (email API keys if needed)
6. Click Deploy

### 3. Configure Custom Domain
1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (fcabdigital.com)
3. Update your domain DNS to point to Vercel:
   - Add CNAME: `cname.vercel.com`
   - Or use nameservers provided by Vercel

### 4. Enable Google Analytics
- Your GA code is already in the layout (`GTM-M4RV5FQ`)
- Analytics will start tracking automatically once deployed

## Customization

### Colors
Edit `tailwind.config.js` to customize the orange/green color scheme:
- Primary (Orange): `#f97316`
- Accent (Green): `#22c55e`

### Fonts
Default uses system fonts. To add custom fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

### Pages
- Service pages: Create new files in `app/service-name/page.tsx`
- Location pages: Add to the `locationContent` object in `app/[...slug]/page.tsx`

## Performance Optimization

- **Image Optimization**: Images referenced from WordPress CDN
- **Static Generation**: Location pages pre-built at build time
- **CSS-in-JS**: Tailwind provides minimal CSS bundle
- **Code Splitting**: Next.js automatically splits code per route

## Analytics & Monitoring

1. **Google Analytics**: Real-time tracking via GTM-M4RV5FQ
2. **Form Submissions**: Logged in Vercel logs (visible in dashboard)
3. **Performance**: Monitor via Vercel Analytics

## Troubleshooting

### Build Errors
```bash
npm run build -- --no-lint  # Skip linting
```

### Port Already in Use
```bash
npm run dev -- --port 3001
```

### Clear Cache
```bash
rm -rf .next node_modules
npm install
npm run dev
```

## Production Checklist

- [ ] Email service configured (SendGrid, Resend, or Nodemailer)
- [ ] Environment variables set in Vercel
- [ ] Google Analytics tracking verified
- [ ] Form submissions tested
- [ ] Mobile responsive verified
- [ ] All links tested
- [ ] SEO meta tags updated
- [ ] Custom domain configured

## Support

For issues or questions:
- Email: hello@fcabdigital.com
- Phone: 02034 889 116

## License

All rights reserved. FCAB Digital.
