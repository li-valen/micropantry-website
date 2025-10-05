# MicroPantry Website

A modern, responsive website for MicroPantry - the AI-powered nutrition tracking and pantry management application.

## 🚀 Features

### Core Functionality
- **AI-Powered Nutrition Tracking**: Personalized meal recommendations and ingredient insights
- **Smart Pantry Management**: Digital pantry with automatic inventory updates
- **Receipt Scanning**: Automatic ingredient removal through receipt scanning and barcode recognition
- **AI Chef Assistant**: Creates tailored meal plans based on individual preferences

### Website Features
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Animated download counter (auto-updates based on growth)
  - Release announcement banner
  - Smooth scrolling and transitions
- **Team Section**: Showcases the MicroPantry team with roles and photos
- **Roadmap Display**: Visual representation of product development phases

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Advanced styling with animations and responsive design
- **JavaScript**: Interactive functionality and dynamic content
- **Bootstrap**: Responsive grid system and components
- **GSAP**: High-performance animations and scroll effects
- **Lenis**: Smooth scrolling library

## 📁 Project Structure

```
micropantry-website/
├── index.html              # Main website file
├── assets/
│   ├── css/               # Stylesheets
│   │   ├── bootstrap.min.css
│   │   ├── main.css
│   │   └── glow.css
│   ├── js/                # JavaScript files
│   │   ├── bootstrap.min.js
│   │   ├── main.js
│   │   ├── count-up.min.js
│   │   └── lenis.js
│   └── images/            # Team photos and assets
│       ├── luke.jpeg
│       ├── pranav.png
│       ├── garret.jpeg
│       └── [other images]
└── README.md              # This file
```

## 👥 Team

- **Valen Li** - CTO and Co-Founder
- **Vedant Srinivasan** - CEO and Co-founder
- **Ned** - VP of Technology
- **Pranav** - Creative Director
- **Liem** - CIO
- **Luke** - Marketing Director
- **Garret** - VP of Marketing

## 🎯 Key Sections

1. **Hero Section**: Main landing area with app introduction
2. **Features**: Core functionality highlights
3. **Why Us**: Unique value proposition
4. **Team**: Meet the MicroPantry team
5. **Roadmap**: Product development timeline
6. **Download**: App store links with live download counter

## 📊 Download Counter

The website features a dynamic download counter that:
- Starts at 1.7k downloads
- Increases by 400 downloads per day
- Automatically calculates current totals
- Updates in real-time with smooth animations

## 🎨 Design Features

- **Typography**: Custom font stack using Outfit and Plus Jakarta Sans
- **Color Scheme**: Professional gradient backgrounds
- **Animations**: Smooth transitions and hover effects
- **Responsive**: Mobile-first design approach
- **Accessibility**: ARIA labels and semantic HTML

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd micropantry-website
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **For development**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🔧 Customization

### Updating Team Members
Edit the team section in `index.html` around line 1400:
```html
<div class="single-team">
    <div class="founder-image">
        <img loading="lazy" src="assets/images/[photo].jpg" alt="[Name]">
    </div>
    <div class="content">
        <h4>[Name]
            <span>[Title]</span>
        </h4>
    </div>
</div>
```

### Modifying Download Counter
Update the counter settings in the JavaScript section:
```javascript
const startDownloads = 1700;  // Starting number
const dailyIncrease = 400;    // Daily growth rate
```

### Changing Release Banner
Modify the banner content around line 1208:
```html
<div class="release-banner" id="releaseBanner">
    <h4>🎉 [Your Message]</h4>
    <p>[Release details]</p>
</div>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance

- **Optimized Images**: Lazy loading for better performance
- **Minified Assets**: Compressed CSS and JavaScript
- **CDN Resources**: External libraries loaded from CDN
- **Smooth Animations**: Hardware-accelerated CSS animations

## 📄 License

This project is proprietary to MicroPantry. All rights reserved.

## 🤝 Contributing

For internal team members:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For technical issues or questions, contact the development team.

---

**MicroPantry** - Plan Smart, Waste Less, Eat Best! 🥗
