# Brahmacharya App - Quick Start Guide

Get the app running in 5 minutes! ⚡

## Prerequisites

- Node.js installed (v18+)
- npm or yarn
- Expo Go app on your phone (iOS/Android)

## Installation (3 steps)

### 1. Clone & Install
```bash
git clone https://github.com/nanket/augment-vip.git
cd augment-vip
npm install
```

### 2. Start Development Server
```bash
npm start
```

### 3. Open on Your Phone
- **iOS**: Open Camera app → Scan QR code → Tap notification
- **Android**: Open Expo Go → Tap "Scan QR Code" → Scan

That's it! The app should now be running on your device. 🎉

## Quick Commands

```bash
# Start development server
npm start

# Run on iOS simulator (Mac only)
npm run ios

# Run on Android emulator
npm run android

# Run in web browser
npm run web

# Clear cache and restart
npm start -- --clear
```

## Project Structure (Quick Overview)

```
app/
├── (tabs)/          # Main screens (Home, Practice, Track, Learn)
├── sos.tsx          # Emergency support modal
└── _layout.tsx      # Navigation setup

components/          # Reusable UI components
constants/theme.ts   # Design system (colors, spacing, fonts)
utils/              # Storage and helper functions
```

## Key Features to Test

1. **Home Screen**
   - View streak counter
   - Read daily wisdom
   - Tap SOS button
   - Try quick actions

2. **Practice Screen**
   - Browse practice options
   - Tap on any practice card

3. **Track Screen**
   - Select a mood
   - Add optional notes
   - Save mood log
   - View recent logs

4. **Learn Screen**
   - Read featured article
   - Browse topics
   - Check resources

5. **SOS Modal**
   - Tap SOS button from home
   - Try emergency strategies
   - Read reminders
   - Close modal

## Customization

### Change Colors
Edit `constants/theme.ts`:
```typescript
export const Colors = {
  accent: '#1E3A8A',  // Change this to your preferred color
  // ... other colors
};
```

### Add Wisdom Quotes
Edit `utils/wisdom.ts`:
```typescript
export const wisdomQuotes: WisdomQuote[] = [
  {
    quote: "Your custom quote here",
    author: "Author Name"
  },
  // ... add more quotes
];
```

### Modify Spacing
Edit `constants/theme.ts`:
```typescript
export const Spacing = {
  md: 16,  // Change default spacing
  // ... other spacing values
};
```

## Common Issues

### "Unable to resolve module"
```bash
rm -rf node_modules
npm install
npm start -- --clear
```

### "Network response timed out"
```bash
npm start -- --tunnel
```

### App won't load on phone
1. Make sure phone and computer are on same WiFi
2. Check firewall settings
3. Try tunnel mode: `npm start -- --tunnel`

## Next Steps

1. Read [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup
2. Check [FEATURES.md](FEATURES.md) for complete feature list
3. Review [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for design guidelines
4. See [README.md](README.md) for full documentation

## Development Tips

### Hot Reload
- Save any file to see changes instantly
- No need to restart the app

### Debug Menu
- **iOS**: Shake device or press `Cmd+D`
- **Android**: Shake device or press `Cmd+M`

### View Logs
- Check terminal where you ran `npm start`
- Or enable "Debug Remote JS" from debug menu

## Building for Production

### Using EAS (Recommended)
```bash
npm install -g eas-cli
eas login
eas build:configure
eas build --platform ios
eas build --platform android
```

### Local Build
```bash
npx expo prebuild
# Then use Xcode (iOS) or Android Studio (Android)
```

## Need Help?

- 📖 Full documentation: [README.md](README.md)
- 🎨 Design system: [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
- ⚙️ Setup guide: [SETUP_GUIDE.md](SETUP_GUIDE.md)
- ✨ Features: [FEATURES.md](FEATURES.md)
- 📱 Screenshots: [SCREENSHOTS.md](SCREENSHOTS.md)

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

Happy coding! 🚀

