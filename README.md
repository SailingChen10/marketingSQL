# MarketingSQL Pro - Deployment Guide

## 📦 Files in this folder:

```
marketingsql-deploy/
├── index.html          # Main HTML file
├── app.js              # React application (Free Trial version)
└── README.md           # This file
```

---

## 🚀 Deploy to Cloudflare Pages (via GitHub)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `marketingsql-app`
3. Public ✅ (make it public)
4. Create repository

### Step 2: Upload Files to GitHub

1. Click "uploading an existing file"
2. Drag and drop:
   - `index.html`
   - `app.js`
   - `README.md` (optional)
3. Commit changes

### Step 3: Connect to Cloudflare Pages

1. Go to Cloudflare Dashboard
2. Navigate to **Workers & Pages** (or search for "Pages" in Quick search)
3. Click **"Create application"** → **"Pages"**
4. Click **"Connect to Git"**
5. Select your GitHub account
6. Authorize Cloudflare
7. Select repository: `marketingsql-app`

### Step 4: Configure Build Settings

```
Framework preset: None
Build command: (leave empty)
Build output directory: /
Root directory: /
```

Click **"Save and Deploy"**

### Step 5: Add Custom Domain

1. After deployment, go to **"Custom domains"**
2. Click **"Set up a custom domain"**
3. Enter: `marketingsql.com`
4. Cloudflare will auto-configure DNS ✅
5. Wait 5-10 minutes for SSL certificate

Done! Your site is live at `marketingsql.com` 🎉

---

### Method 2: Direct Upload (Simpler, but no auto-deploy)

**Step 1: Cloudflare Pages**

1. Go to https://dash.cloudflare.com
2. Click **"Pages"**
3. Click **"Create a project"**
4. Click **"Direct Upload"**

**Step 2: Upload Files**

1. Drag and drop both files:
   - `index.html`
   - `app.js`
2. Project name: `marketingsql`
3. Click **"Deploy site"**

**Step 3: Custom Domain**

1. After deployment → **"Custom domains"**
2. Add: `marketingsql.com`
3. Done!

---

## 🧪 Testing Locally

You can't just open `index.html` in a browser (CORS issues with CDN).

**Option 1: Use Python**
```bash
cd marketingsql-deploy
python3 -m http.server 8000
```
Then visit: http://localhost:8000

**Option 2: Use Node.js**
```bash
npx serve .
```

---

## ✅ What's Included

**Features:**
- ✅ Questions 1-2: Free and unlocked
- ✅ Questions 3-18: Locked with upgrade prompt
- ✅ Gumroad integration ($49 purchase)
- ✅ License key validation
- ✅ Premium status persistence (localStorage)
- ✅ Feedback button (empty href - update later)
- ✅ Responsive design
- ✅ SEO meta tags

**Gumroad Settings:**
- Product ID: `marketingSQLPro`
- Your Gumroad URL: https://sailincheng.gumroad.com/l/marketingSQLPro

---

## 🔧 Customization

### Update Feedback Email

Once you have your email, edit `app.js`:

Find line ~1680:
```javascript
<a 
  href=""  // Change this
  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
  onClick={(e) => e.preventDefault()}
>
  💬 Feedback
</a>
```

Change to:
```javascript
<a 
  href="mailto:support@marketingsql.com"  // Your email
  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1.5"
>
  💬 Feedback
</a>
```

Then re-upload `app.js` to Cloudflare.

---

## 📱 Testing Checklist

After deployment, test:

- [ ] Visit marketingsql.com
- [ ] Question 1 fully accessible
- [ ] Question 2 fully accessible  
- [ ] Question 3 shows locked overlay
- [ ] Click "Upgrade $49" → Goes to Gumroad
- [ ] Click "Already purchased?" → License modal opens
- [ ] Enter test key → All questions unlock
- [ ] Refresh page → Premium status persists
- [ ] Mobile responsive

---

## 🐛 Troubleshooting

**Problem: Blank page**
- Check browser console for errors
- Make sure both files uploaded correctly

**Problem: "Upgrade" button doesn't work**
- Check Gumroad product URL is correct
- Verify product is published on Gumroad

**Problem: License key doesn't work**
- Any key 10+ characters will work (frontend validation only)
- For production: integrate with Gumroad API

**Problem: Page not found at marketingsql.com**
- DNS propagation can take 5-60 minutes
- Try visiting the .pages.dev URL first

---

## 📊 Analytics (Optional)

Add Google Analytics to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🚀 You're Ready!

1. Deploy to Cloudflare Pages
2. Connect marketingsql.com domain
3. Test the purchase flow
4. Start promoting!

Questions? Issues? Check the browser console for error messages.

Good luck! 🎉
