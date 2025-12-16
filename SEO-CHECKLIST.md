# SEO Checklist for De Angelika Beauty Lounge - 2025 Best Practices

## 🎯 Google Search Console Setup

### Initial Setup
- [ ] **Create Google Search Console account** at [search.google.com/search-console](https://search.google.com/search-console)
- [ ] **Verify website ownership** using one of these methods:
  - [ ] HTML file upload (upload verification file to `/public`)
  - [ ] HTML meta tag (add to `app/layout.tsx` head)
  - [ ] Google Analytics (if already installed)
  - [ ] Google Tag Manager (if already installed)
  - [ ] DNS TXT record (recommended for production)

### Submit Sitemap
- [ ] **Generate sitemap** - Already have `app/sitemap.ts`, ensure it generates all pages
- [ ] **Verify sitemap accessibility** at `https://deangelika.com.ng/sitemap.xml`
- [ ] **Submit sitemap in GSC** → Sitemaps → Add new sitemap → Enter `sitemap.xml`
- [ ] **Monitor sitemap status** for errors or warnings

### Configure GSC Settings
- [ ] **Set preferred domain** (www vs non-www)
- [ ] **Set target country** → Nigeria
- [ ] **Review coverage reports** weekly for indexing issues
- [ ] **Monitor Core Web Vitals** report for performance issues
- [ ] **Check Mobile Usability** report
- [ ] **Review Enhancement reports** (Breadcrumbs, FAQs, etc.)

---

## 📊 Google Tag Manager (GTM) Implementation

### GTM Setup
- [ ] **Create GTM account** at [tagmanager.google.com](https://tagmanager.google.com)
- [ ] **Install GTM container code** in `app/layout.tsx`:
  ```tsx
  // Add to <head>
  <script dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');`
  }} />
  
  // Add after opening <body>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  ```

### GA4 via GTM
- [ ] **Create Google Analytics 4 property**
- [ ] **Add GA4 tag in GTM** → New Tag → Google Analytics: GA4 Configuration
- [ ] **Set Measurement ID** from GA4 property
- [ ] **Configure trigger** → All Pages
- [ ] **Test in GTM Preview mode**
- [ ] **Publish container**

### Event Tracking Setup
- [ ] **Track WhatsApp clicks** (booking buttons)
  - Event: `whatsapp_booking_click`
  - Parameters: `button_location`, `service_name`
- [ ] **Track section navigation** (scroll-to anchors)
  - Event: `section_navigation`
  - Parameters: `section_name`
- [ ] **Track form submissions** (if any contact forms)
  - Event: `form_submit`
  - Parameters: `form_type`

---

## ⚡ Core Web Vitals Optimization (2025 Critical)

### Largest Contentful Paint (LCP) - Target: < 2.5s
- [ ] **Optimize hero images**:
  - [ ] Convert to WebP/AVIF format
  - [ ] Implement `priority` loading for hero image
  - [ ] Use Next.js `<Image>` component in `HeroSlider.tsx`
  - [ ] Add proper `width`/`height` attributes
  - [ ] Consider using blur placeholder
  ```tsx
  import Image from 'next/image';
  
  <Image
    src="/assets/hero-haircut.jpg"
    alt="Professional barber service"
    width={1920}
    height={1080}
    priority
    placeholder="blur"
    blurDataURL="data:image/..."
  />
  ```
- [ ] **Optimize font loading**:
  - [ ] Currently uses `display: swap` ✓ (good)
  - [ ] Consider preloading critical font weights
  - [ ] Subset fonts if possible (Latin only)

### Interaction to Next Paint (INP) - Target: < 200ms
- [ ] **Optimize JavaScript execution**:
  - [ ] Defer non-critical scripts
  - [ ] Split large components with dynamic imports
  - [ ] Use React `lazy()` for heavy components
  ```tsx
  const Gallery = lazy(() => import('@/components/Gallery'));
  ```
- [ ] **Debounce scroll handlers** (if any)
- [ ] **Optimize smooth scroll behavior** in `Navbar.tsx`

### Cumulative Layout Shift (CLS) - Target: < 0.1
- [ ] **Fix layout shifts**:
  - [ ] Add explicit dimensions to all images ✓ (already using `img` tags)
  - [ ] Reserve space for dynamic content
  - [ ] Avoid inserting content above existing content
  - [ ] Use `transform` animations instead of `top`/`left`

### Measure & Monitor
- [ ] **Test with PageSpeed Insights**: [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] **Test with Lighthouse** in Chrome DevTools
- [ ] **Monitor real user data** in GSC Core Web Vitals report
- [ ] **Set up web-vitals tracking**:
  ```tsx
  // app/layout.tsx
  import { onCLS, onINP, onLCP } from 'web-vitals';
  
  function sendToAnalytics(metric) {
    gtag('event', metric.name, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_delta: metric.delta,
    });
  }
  
  onCLS(sendToAnalytics);
  onINP(sendToAnalytics);
  onLCP(sendToAnalytics);
  ```

---

## 🏗️ Technical SEO

### Metadata & Schema (Partially Complete)
- [ ] **Verify all pages have unique titles** ✓ (single page, but check)
- [ ] **Verify meta descriptions** ✓ (exists in layout)
- [ ] **Add missing alt text** to all images (check Gallery component)
- [ ] **Enhance structured data**:
  - [x] Organization schema ✓
  - [x] Website schema ✓
  - [ ] **Add LocalBusiness schema** (CRITICAL for local SEO):
  ```tsx
  // src/components/LocalBusinessSchema.tsx
  {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "De Angelika Beauty Lounge",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "YOUR_ADDRESS",
      "addressLocality": "Lagos", // or your city
      "addressRegion": "Lagos State",
      "postalCode": "YOUR_POSTCODE",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LAT",
      "longitude": "YOUR_LONG"
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "telephone": "+2348000000000",
    "priceRange": "₦₦",
    "image": "https://deangelika.com.ng/preview.jpg"
  }
  ```
  - [ ] **Add Service schema** for each service
  - [ ] **Add Review/Rating schema** (aggregate if you have reviews)
  - [ ] **Add FAQ schema** (if you add FAQ section)
  - [ ] **Add Breadcrumb schema** (helpful for navigation)

### robots.txt & Sitemap
- [x] `robots.txt` exists ✓
- [ ] **Verify robots.txt allows crawling**:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://deangelika.com.ng/sitemap.xml
  ```
- [ ] **Dynamic sitemap includes all sections** with correct priority:
  ```ts
  // app/sitemap.ts
  priority: 1.0, // home
  changeFrequency: 'weekly'
  ```

### Mobile Optimization (Critical in 2025)
- [ ] **Responsive design** ✓ (already using Tailwind responsive classes)
- [ ] **Test on real devices** (iPhone, Samsung)
- [ ] **Check viewport meta tag** in `layout.tsx`
- [ ] **Ensure tap targets** are at least 48x48px
- [ ] **Avoid horizontal scrolling**
- [ ] **Test mobile speed** separately in PageSpeed Insights

### HTTPS & Security
- [ ] **Enforce HTTPS** (configure in hosting/Vercel)
- [ ] **Set up HSTS header**
- [ ] **Check SSL certificate** validity
- [ ] **Implement CSP headers** (Content Security Policy)

### URL Structure
- [ ] **Clean URLs** ✓ (Next.js handles this)
- [ ] **Canonical URL** ✓ (set in metadata)
- [ ] **Set up 301 redirects** for old URLs (if migrating)

---

## 📝 On-Page SEO

### Content Optimization
- [ ] **Keyword research** for Nigerian beauty services:
  - Beauty salon near me
  - Hair salon Lagos/Nigeria
  - Professional braiding near me
  - Nail salon Lagos
  - Makeup artist Nigeria
  - Beard grooming Lagos
- [ ] **Update page content** with target keywords naturally
- [ ] **Add location-specific keywords** (your city/neighborhood)
- [ ] **Create blog section** (optional but powerful):
  - "Best hairstyles for Nigerian weddings"
  - "How to maintain braids in humid weather"
  - "Nail care tips for Lagos professionals"
  - etc.

### Header Tags (H1-H6)
- [ ] **Single H1 per page** (check HeroSlider title)
- [ ] **Use H2 for main sections** (Services, About, etc.)
- [ ] **Use H3 for subsections** (individual services)
- [ ] **Maintain heading hierarchy**

### Internal Linking
- [ ] **Link between sections** using anchor navigation ✓
- [ ] **Add contextual links** if blog is created
- [ ] **Create clear navigation structure** ✓

### Image Optimization
- [ ] **Compress all images** (use tinypng.com or similar)
- [ ] **Use modern formats** (WebP with fallback)
- [ ] **Add descriptive filenames** (`beauty-salon-lagos.jpg` not `IMG_1234.jpg`)
- [ ] **Add descriptive alt text** to ALL images
- [ ] **Implement lazy loading** for below-fold images ✓ (Next.js does this)

---

## 🌍 Local SEO (CRITICAL for Beauty Salon)

### Google Business Profile (Formerly Google My Business)
- [ ] **Create/Claim Google Business Profile** (HIGHEST PRIORITY)
  - Go to [business.google.com](https://business.google.com)
  - Search for your business
  - Claim or create listing
- [ ] **Complete ALL profile sections**:
  - [ ] Business name (exact match to website)
  - [ ] Category: Beauty Salon / Hair Salon
  - [ ] Address (physical location)
  - [ ] Phone number (same as website)
  - [ ] Website URL
  - [ ] Hours of operation
  - [ ] Services offered (list all)
  - [ ] Attributes (women-led, wheelchair accessible, etc.)
- [ ] **Upload high-quality photos** (minimum 10):
  - [ ] Logo
  - [ ] Cover photo
  - [ ] Interior shots
  - [ ] Service photos (haircuts, nails, etc.)
  - [ ] Staff photos
  - [ ] Before/after shots
- [ ] **Add posts regularly** (weekly promotions, updates)
- [ ] **Respond to all reviews** within 24-48 hours
- [ ] **Enable messaging** for customer inquiries
- [ ] **Add products** (if you sell retail items)

### Local Citations & Directories
- [ ] **List on Nigerian directories**:
  - [ ] Jiji.ng
  - [ ] Jumia Services
  - [ ] Connect Nigeria
  - [ ] Nigerian Business Directory
  - [ ] Nairaland Business Directory
- [ ] **International directories**:
  - [ ] Bing Places
  - [ ] Apple Maps Connect
  - [ ] Yelp (if applicable)
  - [ ] Facebook Business Page
- [ ] **Ensure NAP consistency** (Name, Address, Phone) everywhere

### Local Schema Markup
- [ ] **Implement LocalBusiness schema** (see Technical SEO section above)
- [ ] **Add service area** if you offer mobile services

---

## 🔗 Link Building & Off-Page SEO

### Backlink Strategy
- [ ] **Partner with local businesses** (cross-promotion)
- [ ] **Get listed on wedding directories** (Nigerian wedding websites)
- [ ] **Collaborate with influencers** (local beauty bloggers)
- [ ] **Create shareable content** (before/after galleries)
- [ ] **Press releases** for events or milestones
- [ ] **Sponsor local events** for backlinks

### Social Media Signals
- [ ] **Maintain active social profiles** (Instagram, TikTok, Facebook)
- [ ] **Link social profiles on website** ✓ (in OrganizationSchema)
- [ ] **Add social sharing buttons** (optional)
- [ ] **Use consistent branding** across all platforms

---

## 📈 Analytics & Conversion Tracking

### Google Analytics 4 Setup
- [ ] **Install GA4** (via GTM recommended)
- [ ] **Set up custom events**:
  - [ ] WhatsApp button clicks
  - [ ] Phone calls (if applicable)
  - [ ] Section scrolls
  - [ ] Video plays (if added)
- [ ] **Configure conversions**:
  - [ ] Define "booking intent" (WhatsApp click)
  - [ ] Set conversion values
- [ ] **Set up audiences** for remarketing
- [ ] **Enable Demographics** and Interests reports
- [ ] **Link to Google Ads** (if running ads)

### Conversion Optimization
- [ ] **Add clear CTAs** ✓ (WhatsApp buttons)
- [ ] **Implement click tracking** on all booking buttons
- [ ] **Test different CTA copy** (A/B testing)
- [ ] **Add social proof** (testimonials, review badges)
- [ ] **Show pricing** (if comfortable, increases conversions)

---

## 🎨 User Experience (Impacts SEO Rankings)

### Page Speed
- [ ] **Achieve green scores** in PageSpeed Insights (90+)
- [ ] **Minimize JavaScript bundles**
- [ ] **Use CDN** for static assets (Vercel handles this)
- [ ] **Enable compression** (gzip/brotli)
- [ ] **Leverage browser caching**

### Navigation & Usability
- [ ] **Clear navigation menu** ✓
- [ ] **Mobile-friendly navigation** ✓
- [ ] **Sticky header** ✓ (fixed nav)
- [ ] **Breadcrumbs** (not applicable for single page)
- [ ] **Search functionality** (optional for single page)

### Accessibility (A11y)
- [ ] **Add ARIA labels** to interactive elements ✓ (check HeroSlider)
- [ ] **Ensure keyboard navigation** works
- [ ] **Check color contrast** (use WAVE tool)
- [ ] **Add skip links** for screen readers
- [ ] **Test with screen reader** (NVDA/VoiceOver)

---

## 🛠️ Implementation Priority

### Phase 1: Critical (Do First - Week 1)
1. **Google Search Console** setup + sitemap submission
2. **Google Business Profile** creation + optimization
3. **LocalBusiness schema** implementation
4. **Core Web Vitals** fixes (image optimization)
5. **Alt text** for all images

### Phase 2: High Priority (Week 2-3)
1. **Google Tag Manager** + GA4 setup
2. **Event tracking** for conversions
3. **Local citations** (top 5 directories)
4. **Image optimization** (WebP conversion)
5. **Mobile testing** + fixes

### Phase 3: Medium Priority (Week 3-4)
1. **Content expansion** (add more keyword-rich content)
2. **Service schema** for each service
3. **Review/rating schema** (if you have reviews)
4. **Social media profile** completion
5. **Backlink outreach** (local partnerships)

### Phase 4: Ongoing
1. **Monitor GSC** weekly for issues
2. **Post to Google Business Profile** weekly
3. **Respond to reviews** within 24 hours
4. **Create blog content** monthly (optional)
5. **Track rankings** for target keywords
6. **Analyze GA4 data** for optimization

---

## 📱 2025 SEO Trends to Consider

### AI & Search Generative Experience (SGE)
- [ ] **Optimize for featured snippets** (FAQ format)
- [ ] **Use natural, conversational language**
- [ ] **Answer common questions** directly on page
- [ ] **Structure content** for AI understanding

### Video SEO
- [ ] **Add video content** (service demonstrations)
- [ ] **Upload to YouTube** + embed on site
- [ ] **Add video schema** markup
- [ ] **Optimize video titles/descriptions**

### Voice Search
- [ ] **Target long-tail keywords** ("best beauty salon near me in Lagos")
- [ ] **Use question formats** (Who, What, Where, When, Why, How)
- [ ] **Optimize for local searches** ("salon open now")

### E-E-A-T (Experience, Expertise, Authoritativeness, Trust)
- [ ] **Add "About Us" section** with credentials
- [ ] **Show certifications/awards**
- [ ] **Display client testimonials**
- [ ] **Show before/after results**
- [ ] **Add staff bios** with experience

---

## 🔍 Recommended SEO Tools

### Free Tools
- **Google Search Console** - indexing & performance
- **Google Analytics 4** - traffic & behavior
- **Google Business Profile** - local SEO
- **PageSpeed Insights** - performance
- **Lighthouse** (Chrome DevTools) - auditing
- **Mobile-Friendly Test** - mobile optimization
- **Rich Results Test** - schema validation
- **Bing Webmaster Tools** - Bing indexing

### Paid Tools (Optional)
- **Semrush** / **Ahrefs** - keyword research, backlinks
- **Screaming Frog** - technical auditing
- **Hotjar** - user behavior tracking
- **GTmetrix** - performance monitoring

---

## ✅ Monthly Maintenance Checklist

- [ ] Review GSC performance report
- [ ] Check Core Web Vitals scores
- [ ] Monitor rankings for target keywords
- [ ] Analyze GA4 conversion data
- [ ] Update Google Business Profile (posts, photos)
- [ ] Respond to new reviews
- [ ] Check for broken links
- [ ] Review backlink profile
- [ ] Update content as needed
- [ ] Check competitors' strategies

---

## 📞 Next Steps

1. **Start with Google Search Console** - verify and submit sitemap TODAY
2. **Create Google Business Profile** - this is your #1 priority for local SEO
3. **Implement LocalBusiness schema** - helps Google understand your business
4. **Fix Core Web Vitals** - optimize images and performance
5. **Set up tracking** - GTM + GA4 for measuring success

**Remember:** SEO is a marathon, not a sprint. Focus on providing value to users, and rankings will follow. Consistency is key!
