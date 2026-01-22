# 📝 Content Customization Guide

This guide helps you customize the website content for MultiFire System.

## 🔢 Update Phone Numbers

Replace these placeholder numbers with real contact information:

**Files to update:**
1. [src/components/Header.jsx](src/components/Header.jsx#L95)
2. [src/components/Hero.jsx](src/components/Hero.jsx#L110)
3. [src/components/Contact.jsx](src/components/Contact.jsx#L239)
4. [src/components/Footer.jsx](src/components/Footer.jsx#L95)
5. [src/components/EmergencyBanner.jsx](src/components/EmergencyBanner.jsx#L54)

**Current placeholders:**
- Business: `+91 99999 99999`
- Emergency: `+91 88888 88888`

## 📧 Update Email Addresses

**Files to update:**
1. [src/components/Contact.jsx](src/components/Contact.jsx#L245-L255)
2. [src/components/Footer.jsx](src/components/Footer.jsx#L103)

**Current:**
- info@multifiresystem.com
- contact@multifiresystem.com

## 📍 Add Business Address

**File:** `src/components/Contact.jsx`  
**Line:** ~230

Update the address section with your actual business address in Delhi NCR.

## 🖼️ Replace Images

The website currently uses free stock images from Unsplash. Replace them with actual project photos:

**Portfolio Section** (`src/components/Portfolio.jsx`):
- Lines 13, 19, 25, 31, 37, 43 - Project images

Recommended image specs:
- Format: JPG or WebP
- Size: 1200x800px
- Quality: 80-90%
- Optimized for web

## 👤 Update Founder Information

**File:** `src/components/About.jsx`  
**Lines:** 115-150

Currently shows a placeholder icon. Add:
- Professional photo of Anmol Kumar Sharma
- Updated bio
- Specific qualifications
- Years of experience

## 📊 Update Statistics

**File:** `src/components/About.jsx`  
**Lines:** 26-29

Current stats:
- 500+ Projects
- 24/7 Support
- 100% Compliance
- 10+ Years

Update with actual numbers.

## 📜 Certifications

**File:** `src/components/Certifications.jsx`

Add actual certification details:
- NICET Level (currently shows Level II)
- State license numbers
- Insurance policy numbers
- Manufacturer certification dates

## 💼 Testimonials

**File:** `src/components/Testimonials.jsx`  
**Lines:** 8-67

Replace sample testimonials with real client feedback:
- Actual client names (with permission)
- Real company names
- Genuine feedback
- Actual dates
- Real locations in Delhi NCR

## 🏢 Project Portfolio

**File:** `src/components/Portfolio.jsx`  
**Lines:** 10-102

Update case studies with actual projects:
- Real client names (anonymize if needed)
- Actual locations
- Specific systems installed
- True challenges and solutions
- Real results

## 🎨 Color Customization

**File:** `tailwind.config.js`

Current color scheme:
```javascript
primary: '#DC2626'  // Fire safety red
accent: '#EA580C'   // Orange
navy: '#1E293B'     // Professional dark blue
```

To change:
1. Update color values in tailwind.config.js
2. Save the file
3. Colors will update automatically

## 📱 Social Media Links

**File:** `src/components/Footer.jsx`  
**Lines:** 130-160

Update these placeholder links:
- Facebook
- LinkedIn
- Instagram
- Twitter/X

## 🌐 SEO Meta Tags

**File:** `index.html`  
**Lines:** 6-10

Update:
- Page title
- Meta description
- Keywords
- OG tags for social sharing

## 📞 Contact Form Setup

### Option 1: EmailJS (Recommended for quick setup)

1. Sign up at https://www.emailjs.com/
2. Create email service
3. Create email template
4. Get credentials:
   - Service ID
   - Template ID
   - Public Key

5. Update `src/components/Contact.jsx`:
```javascript
// Add at top of file
import emailjs from 'emailjs-com';

// Update onSubmit function
const onSubmit = async (data) => {
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        service_type: data.serviceType,
        property_type: data.propertyType,
        message: data.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setIsSubmitted(true);
    reset();
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Failed to send message. Please try again.');
  }
  
  setIsSubmitting(false);
};
```

### Option 2: Backend API

Create your own backend endpoint and update the `onSubmit` function to POST to your API.

## 🚀 Google Analytics

**File:** `index.html`

Add before closing `</head>`:
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

Replace `G-XXXXXXXXXX` with your actual GA4 tracking ID.

## 📍 Google Maps Integration

**File:** `src/components/Contact.jsx`  
**Line:** ~285

Replace placeholder map with actual Google Maps embed:

1. Go to Google Maps
2. Search for your business address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder div

## 🔍 Business Schema Markup

Add to `index.html` in `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MultiFire System",
  "image": "URL_TO_LOGO",
  "description": "Professional fire safety and alarm systems in Delhi NCR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "telephone": "+91-XXXXX-XXXXX",
  "priceRange": "₹₹",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
  "founder": {
    "@type": "Person",
    "name": "Anmol Kumar Sharma"
  }
}
</script>
```

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Update all phone numbers
- [ ] Update all email addresses
- [ ] Add business address
- [ ] Replace placeholder images
- [ ] Update testimonials with real reviews
- [ ] Update project portfolio
- [ ] Configure contact form
- [ ] Add Google Analytics
- [ ] Add Google Maps
- [ ] Update social media links
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all links
- [ ] Optimize images
- [ ] Add favicon
- [ ] Set up SSL certificate
- [ ] Test page load speed

## 🎯 Priority Updates

**Highest Priority:**
1. Phone numbers (appears on every page)
2. Contact form email setup
3. Real testimonials
4. Business address

**Medium Priority:**
5. Project portfolio images
6. About section details
7. Certifications specifics
8. Social media links

**Lower Priority:**
9. Color customization
10. Advanced SEO
11. Analytics setup

---

**Need help with customization?** All files are well-commented and follow standard React practices. Each component is self-contained and easy to modify.
