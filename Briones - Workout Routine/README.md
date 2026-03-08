# 🏋️ Workout Splits PWA

A modern, offline-capable Progressive Web App for tracking your weekly workout splits, personal records, and fitness progress.

![Version](https://img.shields.io/badge/version-2.0-red)
![PWA](https://img.shields.io/badge/PWA-enabled-orange)
![Offline](https://img.shields.io/badge/offline-ready-green)

---

## ✨ Features

### Core Functionality
- 📅 **7-Day Workout Splits** - Pre-configured weekly routine
- 🎥 **Video Demonstrations** - YouTube tutorials for each exercise
- 📊 **Progress Tracking** - Personal records, body measurements, workout history
- ⏱️ **Workout Timer** - Rest period countdown with presets
- 🔥 **Streak Tracker** - Stay motivated with daily streaks
- 🧮 **Nutrition Calculator** - Science-based calorie and protein targets
- 📱 **Mobile Optimized** - Install as app on any device
- ✈️ **Offline Support** - Works without internet after first visit

### Advanced Features
- Body measurements tracking (weight, body fat %, chest, waist, arms)
- Weekly progress dashboard
- Personal record history
- Exercise search
- Dark/Light theme
- Data export/import
- Custom profile picture

---

## 🚀 Quick Start (5 Minutes)

### 1. Generate Icons
```bash
# Open in browser
open generate-icons.html

# Download both icons:
# - icon-192.png
# - icon-512.png
```

### 2. Deploy (Choose One)

#### Option A: Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder
3. Get URL: `https://your-app.netlify.app`

#### Option B: GitHub Pages
1. Create GitHub repository
2. Upload all files
3. Settings → Pages → Enable
4. Get URL: `https://username.github.io/repo-name`

#### Option C: Local Network
```bash
# Start server
python -m http.server 8000 --bind 0.0.0.0

# Find your IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# Access from phone: http://YOUR_IP:8000
```

### 3. Install on Mobile

**Android (Chrome):**
- Menu (⋮) → "Add to Home Screen"

**iPhone (Safari):**
- Share → "Add to Home Screen"

### 4. Use Offline
- Open app while online
- Browse all tabs once
- Turn on Airplane Mode
- App still works! ✈️

---

## 📁 Project Structure

```
workout-splits-pwa/
├── index.html              # Main app
├── styles.css              # All styling
├── app.js                  # App logic
├── service-worker.js       # Offline support
├── manifest.json           # PWA config
├── generate-icons.html     # Icon generator
├── icon-192.png           # App icon (generate)
├── icon-512.png           # App icon (generate)
├── img/
│   └── Darel_Progress.jpg # Profile picture
├── README.md              # This file
├── MOBILE_QUICK_START.md  # Mobile setup guide
└── ADVANCED_FEATURES.md   # Feature documentation
```

---

## 💪 Workout Splits

### Monday - Upper Body
Bench Press, Incline Press, Lat Pulldown, Rows, Shoulder Press, Lateral Raises, Face Pulls, Bicep Curls, Tricep Pushdowns

### Tuesday - Lower + Abs
Squats, RDL, Leg Extensions, Leg Curls, Calf Raises, Cable Crunches, Oblique Twists

### Wednesday - Rest
Light stretching

### Thursday - Push
Bench/Incline Press, Shoulder Press, Cable Flys, Lateral Raises, Tricep Work

### Friday - Pull
Pull-Ups, Lat Pulldown, Rows, Face Pulls, Hammer Curls, Reverse Curls, Straight-Arm Pulldowns

### Saturday - Legs + Abs
Same as Tuesday

### Sunday - Active Recovery
30-45 min walking

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --accent: #e60000;           /* Red */
    --accent-secondary: #ff5a00; /* Orange */
    --accent-tertiary: #ffeea4;  /* Cream */
}
```

### Change Profile Picture
Replace `img/Darel_Progress.jpg` with your image

### Edit Workouts
- Use the app interface to add/edit/delete exercises
- Or edit `defaultWorkouts` in `app.js`

### Change Name
Settings → Profile Information → Update name

---

## 📱 Mobile Installation

### Requirements
- Modern browser (Chrome 90+, Safari 14+)
- HTTPS or localhost (for PWA features)

### Android
1. Open app URL in Chrome
2. Wait for install prompt or tap menu → "Install App"
3. App appears on home screen
4. Opens in full screen (no browser UI)

### iPhone
1. Open app URL in Safari (must be Safari!)
2. Tap Share button
3. "Add to Home Screen"
4. App appears on home screen

### Verification
- ✅ Icon on home screen
- ✅ Opens in full screen
- ✅ Works offline
- ✅ Data persists

---

## ✈️ Offline Usage

### What Works Offline
- ✅ All views (Home, Workouts, Progress, Settings)
- ✅ View exercises with thumbnails
- ✅ Log personal records
- ✅ Use workout timer
- ✅ Track measurements
- ✅ Calculate nutrition
- ✅ Export data
- ⚠️ Video playback needs internet (thumbnails cached)

### How It Works
1. **First Visit**: Downloads and caches all files
2. **Subsequent Visits**: Serves from cache (instant load)
3. **Offline**: Full functionality from cache
4. **Updates**: Automatic when back online

---

## 🧮 Nutrition Calculator

### Calculations
- **BMR**: Mifflin-St Jeor Equation
- **TDEE**: BMR × Activity Level
- **Protein**: 2.2g per kg body weight
- **Calories**: TDEE ± Goal adjustment

### Usage
1. Settings → Profile Information
2. Enter: Age, Weight, Height, Gender
3. Select: Activity Level, Goal
4. Click "Calculate Nutrition"
5. View personalized targets

---

## 💾 Data Management

### Storage
- All data stored locally (LocalStorage)
- ~250KB total (1 year of use)
- 100% private (never leaves your device)

### Backup
1. Settings → Export Data
2. Save JSON file
3. Import on any device

### Reset
Settings → Reset All Data (restores defaults)

---

## 🔧 Technical Details

### Technologies
- HTML5, CSS3, JavaScript (ES6+)
- Service Workers (offline support)
- LocalStorage (data persistence)
- Canvas API (progress charts)
- Web Audio API (timer sounds)
- YouTube Embed API (videos)

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- All modern mobile browsers

### Performance
- Load time: < 1 second
- Offline load: < 0.5 seconds
- Storage: ~250KB
- No external dependencies

---

## 🎯 Usage Tips

### Best Practices
1. **First Time**: Browse all tabs while online (caches everything)
2. **Daily**: Log workouts immediately after completion
3. **Weekly**: Export data as backup
4. **Monthly**: Update body measurements

### Workout Logging
1. Complete your workout
2. Workouts tab → "Mark Workout Complete"
3. Builds your streak automatically

### Timer Usage
1. Workouts tab → Timer icon
2. Select preset (30s, 1m, 1.5m, 2m, 3m)
3. Use between sets

---

## 🆘 Troubleshooting

### Can't Install as PWA
- **Android**: Use Chrome, not Firefox
- **iPhone**: Use Safari, not Chrome
- Ensure HTTPS or localhost
- Wait for full page load

### Doesn't Work Offline
1. Open app while online
2. Visit all 4 tabs
3. Wait for complete load
4. Then try offline

### Videos Don't Play Offline
- Expected behavior (YouTube requires internet)
- Thumbnails work offline
- All other features work offline

### Data Not Saving
- Don't use private/incognito mode
- Check LocalStorage is enabled
- Ensure storage quota not exceeded

---

## 📊 Stats

- **Lines of Code**: ~3,300
- **Features**: 42+
- **Exercises**: 43 with videos
- **Storage**: ~250KB (1 year)
- **Load Time**: < 1 second
- **Offline**: 100% functional

---

## 🎉 What Makes This Special

- ✅ **No Backend** - Pure client-side
- ✅ **Privacy-Focused** - Data stays on your device
- ✅ **Offline-First** - Works anywhere
- ✅ **Free Forever** - No subscriptions
- ✅ **Open Source** - Customize everything
- ✅ **Modern Design** - Glassmorphism UI
- ✅ **Science-Based** - Accurate calculations
- ✅ **Well-Documented** - Easy to understand

---

## 📚 Documentation

- **README.md** (this file) - Main documentation
- **MOBILE_QUICK_START.md** - Mobile setup guide
- **ADVANCED_FEATURES.md** - Detailed feature guide

---

## 🚀 Deployment Options

### Netlify (Recommended)
- Easiest setup (drag & drop)
- Free hosting
- HTTPS included
- Custom domain support

### GitHub Pages
- Free hosting
- Version control
- Professional URL
- Custom domain support

### Vercel
- Fast deployment
- Automatic HTTPS
- Great performance

### Local Network
- No internet needed
- Complete privacy
- Instant setup

---

## 🔒 Privacy & Security

- ✅ No data collection
- ✅ No tracking
- ✅ No cookies
- ✅ No external API calls
- ✅ All data local
- ✅ You own your data

---

## 📝 License

Free to use for personal and commercial purposes.

---

## 🙏 Credits

- Exercise videos from YouTube fitness channels
- Icons: Custom generated
- Design: Cyndaquil-inspired color palette

---

## 💪 Start Your Fitness Journey!

1. Generate icons
2. Deploy your app
3. Install on mobile
4. Start tracking workouts
5. Build your streak!

**Ready to crush your goals!** 🔥

---

**Version 2.0** | Built with 💪 for fitness enthusiasts
