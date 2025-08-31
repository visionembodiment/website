# Vision Embodiment Website

Professional coaching and spiritual services website for Vision Embodiment by Alina Rain. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed on your computer
- npm (comes with Node.js)

### How to Run the Website

1. **Install dependencies** (first time only):
```bash
npm install
```

2. **Start the development server**:
```bash
npm run dev
```

3. **Open your browser** and go to:
```
http://localhost:3000
```

That's it! The website is now running on your computer.

## 📄 Available Pages

Once the server is running, you can visit these pages:

- **Homepage**: http://localhost:3000
- **About**: http://localhost:3000/about
- **Services**: http://localhost:3000/services
  - Mind Games Reading: http://localhost:3000/services/mind-games-reading
  - One-to-One Coaching: http://localhost:3000/services/one-to-one
  - Archetypal Tarot: http://localhost:3000/services/archetypal-tarot
- **Testimonials**: http://localhost:3000/testimonials
- **Community**: http://localhost:3000/community
- **Contact**: http://localhost:3000/contact
- **Booking**: http://localhost:3000/booking
- **Terms of Service**: http://localhost:3000/terms
- **Privacy Policy**: http://localhost:3000/privacy

## 🛠️ Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Check for code issues
npm run lint
```

## 📁 Project Structure

```
vision-embodiment-website/
├── app/                    # All pages and layouts
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── contact/           # Contact page
│   └── ...                # Other pages
├── components/            # Reusable components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Site footer
│   ├── ServiceCard.tsx   # Service display card
│   └── TestimonialCard.tsx # Testimonial display
├── public/               # Static files (images, etc.)
└── docs/                # Documentation
    └── WEBSITE_PLAN.md  # Full development plan
```

## 🎨 Features

- ✅ 15 fully functional pages
- ✅ Mobile responsive design
- ✅ $15 Mind Games Reading promotion
- ✅ Contact forms
- ✅ Newsletter signup
- ✅ GDPR compliant (Terms & Privacy)
- ✅ SEO optimized
- ✅ Fast loading with SSR

## 🚧 Pending Integrations

The following features need to be connected to external services:

- [ ] **Payment Processing**: Stripe integration needed
- [ ] **Calendar Booking**: Calendly embed needed
- [ ] **Newsletter**: ConvertKit or EmailOctopus backend
- [ ] **Analytics**: Google Analytics 4 setup
- [ ] **Domain**: Custom domain configuration

## 💻 Deployment

### Deploy to Netlify (Recommended)

1. Push code to GitHub
2. Connect GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### Environment Variables Needed

Create a `.env.local` file for these (when you add integrations):

```
STRIPE_SECRET_KEY=your_stripe_key
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEWSLETTER_API_KEY=your_newsletter_key
```

## 📝 Making Changes

- **Edit content**: Modify the text directly in the page files in `app/` folder
- **Change colors**: Edit Tailwind classes (purple-900, yellow-600, etc.)
- **Update prices**: Search for dollar amounts in service pages
- **Add testimonials**: Edit `app/testimonials/page.tsx`

## 🆘 Troubleshooting

**Port already in use?**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then run again
npm run dev
```

**Dependencies issues?**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Page not updating?**
- Save the file
- Check the terminal for errors
- Refresh browser with Ctrl+F5 (hard refresh)

## 📞 Support

For questions about the website code, check the `/docs/WEBSITE_PLAN.md` file for detailed specifications.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS