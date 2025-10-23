# Brahmacharya App - Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** or **yarn**
   - npm comes with Node.js
   - Verify: `npm --version`
   - Or install yarn: `npm install -g yarn`

3. **Git**
   - Download from: https://git-scm.com/
   - Verify: `git --version`

### For Mobile Development

#### iOS Development (Mac only)
- **Xcode** (latest version from Mac App Store)
- **Xcode Command Line Tools**: `xcode-select --install`
- **CocoaPods**: `sudo gem install cocoapods`

#### Android Development
- **Android Studio**: https://developer.android.com/studio
- **Android SDK** (installed via Android Studio)
- **Java Development Kit (JDK)** 11 or higher

### Expo Go App (Easiest Method)
- **iOS**: Download from App Store
- **Android**: Download from Google Play Store

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/nanket/augment-vip.git
cd augment-vip
```

### 2. Install Dependencies

```bash
npm install
```

Or with yarn:
```bash
yarn install
```

This will install all required packages including:
- React Native
- Expo SDK
- TypeScript
- Navigation libraries
- Animation libraries
- Storage utilities

### 3. Start the Development Server

```bash
npm start
```

Or:
```bash
npx expo start
```

This will:
- Start the Metro bundler
- Display a QR code in your terminal
- Open Expo DevTools in your browser

## Running the App

### Option 1: Expo Go (Recommended for Quick Testing)

#### iOS
1. Open Camera app on your iPhone
2. Scan the QR code from the terminal
3. Tap the notification to open in Expo Go
4. App will load and run

#### Android
1. Open Expo Go app
2. Tap "Scan QR Code"
3. Scan the QR code from the terminal
4. App will load and run

### Option 2: iOS Simulator (Mac only)

```bash
npm run ios
```

Or press `i` in the terminal after running `npm start`

This will:
- Build the app
- Launch iOS Simulator
- Install and run the app

### Option 3: Android Emulator

1. Start Android Emulator from Android Studio
2. Run:
```bash
npm run android
```

Or press `a` in the terminal after running `npm start`

### Option 4: Web Browser

```bash
npm run web
```

Or press `w` in the terminal after running `npm start`

Note: Some features may not work perfectly on web (haptics, native animations)

## Development Workflow

### Hot Reloading
- Changes to code automatically reload the app
- Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android) for dev menu

### Debugging

#### React Native Debugger
1. Install: https://github.com/jhen0409/react-native-debugger
2. Open debugger before starting app
3. Enable "Debug Remote JS" from dev menu

#### Chrome DevTools
1. Open dev menu
2. Select "Debug Remote JS"
3. Chrome will open with debugger

#### Console Logs
- View in terminal where you ran `npm start`
- Or in browser console when debugging

### Clearing Cache

If you encounter issues:
```bash
npx expo start -c
```

Or:
```bash
npm start -- --clear
```

## Project Structure Explained

```
brahmacharya-app/
│
├── app/                          # Application screens
│   ├── (tabs)/                   # Tab navigation screens
│   │   ├── _layout.tsx          # Tab navigator configuration
│   │   ├── index.tsx            # Home screen
│   │   ├── practice.tsx         # Practice screen
│   │   ├── track.tsx            # Track screen
│   │   └── learn.tsx            # Learn screen
│   ├── _layout.tsx              # Root layout with navigation
│   ├── index.tsx                # Entry point redirect
│   └── sos.tsx                  # SOS modal screen
│
├── components/                   # Reusable UI components
│   ├── Button.tsx               # Custom button component
│   ├── Card.tsx                 # Card container component
│   ├── Input.tsx                # Text input component
│   ├── SOSButton.tsx            # Emergency SOS button
│   ├── StreakCard.tsx           # Streak display card
│   └── WisdomCard.tsx           # Daily wisdom card
│
├── constants/                    # App constants
│   └── theme.ts                 # Design system (colors, spacing, typography)
│
├── utils/                        # Utility functions
│   ├── storage.ts               # AsyncStorage helpers
│   └── wisdom.ts                # Daily wisdom quotes
│
├── assets/                       # Static assets
│   └── .gitkeep                 # Placeholder (add icons here)
│
├── app.json                      # Expo configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── babel.config.js               # Babel configuration
└── README.md                     # Project documentation
```

## Adding Assets

### App Icon
1. Create a 1024x1024px PNG image
2. Save as `assets/icon.png`
3. Expo will automatically generate all required sizes

### Splash Screen
1. Create a 1242x2436px PNG image
2. Save as `assets/splash.png`
3. Background should match splash.backgroundColor in app.json

### Adaptive Icon (Android)
1. Create a 1024x1024px PNG image
2. Save as `assets/adaptive-icon.png`
3. Keep important content in center 66% (safe zone)

### Favicon (Web)
1. Create a 48x48px PNG image
2. Save as `assets/favicon.png`

## Environment Setup

### TypeScript
- Already configured in `tsconfig.json`
- Type checking: `npx tsc --noEmit`
- VS Code will show type errors automatically

### ESLint (Optional)
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

Create `.eslintrc.js`:
```javascript
module.exports = {
  extends: ['expo', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
};
```

### Prettier (Optional)
```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

## Common Issues & Solutions

### Issue: Metro bundler won't start
**Solution:**
```bash
npx expo start -c
# Or
rm -rf node_modules
npm install
```

### Issue: iOS build fails
**Solution:**
```bash
cd ios
pod install
cd ..
npm run ios
```

### Issue: Android build fails
**Solution:**
1. Check Android Studio SDK is installed
2. Set ANDROID_HOME environment variable
3. Clean build: `cd android && ./gradlew clean && cd ..`

### Issue: "Unable to resolve module"
**Solution:**
```bash
watchman watch-del-all
rm -rf node_modules
npm install
npx expo start -c
```

### Issue: Expo Go shows "Something went wrong"
**Solution:**
1. Make sure you're on the same WiFi network
2. Try using tunnel: `npx expo start --tunnel`
3. Update Expo Go app to latest version

## Building for Production

### Development Build
```bash
npx expo install expo-dev-client
npx expo run:ios
# or
npx expo run:android
```

### EAS Build (Recommended)
1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure build:
```bash
eas build:configure
```

4. Build for iOS:
```bash
eas build --platform ios
```

5. Build for Android:
```bash
eas build --platform android
```

### Local Build (Advanced)

#### iOS
```bash
npx expo prebuild
cd ios
xcodebuild -workspace BrahmacharyaApp.xcworkspace -scheme BrahmacharyaApp -configuration Release
```

#### Android
```bash
npx expo prebuild
cd android
./gradlew assembleRelease
```

## Testing

### Manual Testing Checklist
- [ ] Home screen loads correctly
- [ ] Streak counter displays
- [ ] Daily wisdom shows
- [ ] Navigation between tabs works
- [ ] SOS button opens modal
- [ ] Mood logging saves data
- [ ] Practice cards are clickable
- [ ] Learn topics display
- [ ] Haptic feedback works
- [ ] Animations are smooth
- [ ] Data persists after app restart

### Automated Testing (Future)
```bash
npm install --save-dev jest @testing-library/react-native
```

## Performance Optimization

### Tips
1. Use `React.memo()` for expensive components
2. Implement `useMemo()` and `useCallback()` where needed
3. Optimize images (use WebP format)
4. Lazy load screens with `React.lazy()`
5. Profile with React DevTools

### Monitoring
```bash
npx expo start --dev-client
# Enable performance monitor from dev menu
```

## Deployment

### App Store (iOS)
1. Build with EAS: `eas build --platform ios`
2. Download IPA file
3. Upload to App Store Connect
4. Submit for review

### Google Play (Android)
1. Build with EAS: `eas build --platform android`
2. Download AAB file
3. Upload to Google Play Console
4. Submit for review

## Support & Resources

### Documentation
- Expo Docs: https://docs.expo.dev/
- React Native Docs: https://reactnative.dev/
- React Navigation: https://reactnavigation.org/

### Community
- Expo Discord: https://chat.expo.dev/
- React Native Community: https://www.reactnative.dev/community/overview

### Troubleshooting
- Expo Forums: https://forums.expo.dev/
- Stack Overflow: Tag with `expo` and `react-native`

---

Happy coding! 🚀

