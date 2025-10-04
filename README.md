# ⚽ FC Elite - Football Club Website

A modern, dark-themed football club website built with Angular 20 and Tailwind CSS. This project showcases a complete football club presence with multiple sections including team players, academy programs, and contact information.

## 🌟 Features

### 🏠 **Home Page**
- **Hero Section**: Eye-catching hero with club branding and Cristiano Ronaldo quote
- **Responsive Navigation**: Fixed header with mobile-friendly menu
- **Call-to-Action**: Direct links to academy enrollment

### 👥 **About Us**
- **Club History**: Rich content about the club's founding and legacy
- **Mission Statement**: Clear presentation of club values
- **Statistics**: Achievement counters (200+ players, 15 titles, etc.)
- **Visual Elements**: Image placeholders for club photos

### 🃏 **Teams & Players** (Creative Card Slider)
- **Playing Card Design**: Unique card-style player presentations
- **Interactive Slider**: Navigate through team members with arrows and dots
- **Player Stats**: Goals, assists, saves, and clean sheets
- **Personal Quotes**: Inspirational quotes from each player
- **Responsive Design**: Optimized for all device sizes

### 🏫 **Academy Programs**
- **Three-Tier System**: Youth (6-12), Teen Elite (13-17), Professional Pathway (18+)
- **Detailed Features**: Training sessions, coaching quality, match opportunities
- **Pricing Information**: Clear monthly pricing for each program
- **Enrollment CTAs**: Direct action buttons for each program

### 📅 **Fixtures & Results**
- **Recent Matches**: Display of latest game results
- **Upcoming Games**: Schedule of future fixtures
- **Match Details**: Venue, time, and score information

### 🖼️ **Gallery**
- **Media Categories**: Training, Matches, Celebrations, Behind Scenes
- **Video Placeholders**: Highlight reels and training sessions
- **Photo Gallery**: Image placeholders for club moments

### 📞 **Contact**
- **Contact Information**: Address, phone, email details
- **Contact Form**: Functional form for inquiries
- **Facilities Info**: List of world-class training facilities

## 🎨 Design Features

### **Dark Theme Implementation**
- **Base Colors**: `#212121` and `#181818` as specified
- **Accent Colors**: Orange (`#f97316`) and Red (`#ef4444`) gradients
- **Typography**: Inter font family for modern look
- **Responsive**: Mobile-first design approach

### **Interactive Elements**
- **Hover Effects**: Smooth transitions on buttons and cards
- **Animations**: Bounce animations and smooth scrolling
- **Gradients**: Beautiful color transitions throughout
- **Custom Scrollbar**: Orange-themed scrollbar for webkit browsers

### **Player Card Slider**
- **Playing Card Style**: Unique design resembling trading cards
- **Player Numbers**: Prominent jersey number display
- **Color-Coded Stats**: Different colors for goals, assists, saves
- **Smooth Transitions**: 500ms ease-in-out animations

## 🚀 Technical Implementation

### **Project Structure**
```
src/app/
├── constants/
│   └── website-content.ts    # All text content and data
├── app.ts                    # Main component with slider logic
├── app.html                  # Complete website template
└── app.css                   # Custom styles and animations
```

### **Content Management**
- **Centralized Content**: All text in `website-content.ts` for easy updates
- **TypeScript Constants**: Strongly typed content structure
- **Easy Localization**: Ready for multi-language support

### **Technologies Used**
- **Angular 20**: Latest Angular framework
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Responsive Design**: Mobile-first approach

## 🎯 Cristiano Ronaldo Integration

The website includes inspirational quotes from Cristiano Ronaldo:
- **Hero Section**: "Your love makes you fight, but your hate makes you win."
- **Join Section**: Quote about perfection and continuous improvement
- **Player Cards**: Individual motivational quotes for each player

## 🔧 Development

### **Prerequisites**
- Node.js (v18 or higher)
- npm or yarn

### **Getting Started**
```bash
# Install dependencies
npm install

# Start development server
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/` to view the website.

### **Build for Production**
```bash
npm run build
# or
ng build
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px (stacked layout, mobile menu)
- **Tablet**: 768px - 1024px (2-column layout)
- **Desktop**: > 1024px (full multi-column layout)

## 🎨 Customization

### **Colors**
Update colors in `tailwind.config.js`:
```javascript
colors: {
  dark: {
    100: '#212121',
    200: '#181818',
  },
  // Add your custom colors
}
```

### **Content**
Modify content in `src/app/constants/website-content.ts`:
```typescript
export const WEBSITE_CONTENT = {
  hero: {
    title: 'YOUR CLUB NAME',
    // ... other content
  }
}
```

## 🌟 Future Enhancements

This template is ready for:
- **CMS Integration**: Content management system
- **Authentication**: User login and member areas
- **E-commerce**: Merchandise and ticket sales
- **News System**: Blog and news articles
- **Multi-language**: Internationalization support
- **Database Integration**: Dynamic player and match data

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for football excellence**"# Football-club-single-page-website-with-animation" 
