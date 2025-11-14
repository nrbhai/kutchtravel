# Google Search Console Verification

## Option 1: HTML File Method (Easiest for VPS)

1. Google will give you a file like: `google1234567890abcdef.html`
2. Place it in: `public/google1234567890abcdef.html`
3. Create file with just: `google-site-verification: google1234567890abcdef.html`
4. Verify it's accessible: `https://yourdomain.com/google1234567890abcdef.html`
5. Click "Verify" in Search Console

## Option 2: Meta Tag Method

Add to `app/layout.tsx` in the `<head>`:

```tsx
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

Location: In the `<head>` section around line 140-150

## Option 3: DNS Method (Most Permanent)

Add TXT record to your domain DNS:
- Name: `@` or leave blank
- Type: `TXT`
- Value: `google-site-verification=YOUR_CODE`

---

## After Verification

### Submit Sitemap
1. Go to Search Console → Sitemaps
2. Enter: `sitemap.xml`
3. Click Submit
4. Wait 24-48 hours for indexing to begin

### Request Indexing for Key Pages
1. Go to URL Inspection
2. Enter URL (e.g., `https://yourdomain.com`)
3. Click "Request Indexing"
4. Repeat for important pages:
   - Homepage
   - /destinations
   - /destinations/dhordo-white-rann
   - /destinations/bhuj
   - /guide

---

## Bing Webmaster Tools

1. Go to: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Add site
4. Can import settings from Google Search Console!
5. Submit sitemap: `https://yourdomain.com/sitemap.xml`

---

## IndexNow (Instant Indexing)

Supported by Microsoft & Yandex for faster indexing:

1. Generate API key at: https://www.bing.com/indexnow
2. Save API key file: `public/YOUR_API_KEY.txt`
3. Submit URLs via: https://api.indexnow.org/indexnow

---

## Timeline Expectations

- **Day 1**: Submit site to Search Console
- **Day 2-3**: Google discovers and starts crawling
- **Day 7**: First pages appear in Google index
- **Day 14**: More pages indexed, appears in search
- **Month 1**: Ranking for brand searches
- **Month 2-3**: Ranking for long-tail keywords
- **Month 3-6**: Broader keyword visibility

---

## Quick Check Commands

```bash
# Check if indexed
site:yourdomain.com

# Check specific page
site:yourdomain.com/destinations/bhuj

# Check with keywords
"kutch travel guide" site:yourdomain.com
```
