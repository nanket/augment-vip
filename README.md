# Brahmacharya App 🧘‍♂️

A modern, minimalist mobile application for practicing celibacy and self-mastery, integrating ancient wisdom with modern science.

## 🎨 Design Philosophy

- **Minimalist Black & White Theme**: Clean, professional design that promotes focus and clarity
- **Modern UI/UX**: Smooth animations, haptic feedback, and intuitive navigation
- **Privacy-First**: Offline-first architecture with local data storage
- **Refined Typography**: Clear hierarchy using system fonts
- **Consistent Spacing**: 4/8/16/24/32 scale for visual harmony
- **Elevated Cards**: 12-16px border radius with subtle shadows

## ✨ Features

### Core Functionality
- **Home Screen**: Daily wisdom, streak tracking, and quick actions
- **Practice**: Guided meditation, breathing exercises, yoga, and mindful reading
- **Track**: Mood logging and progress tracking with visual insights
- **Learn**: Educational content from ancient traditions and modern science
- **SOS Support**: Emergency support flow for difficult moments

### Technical Features
- 📱 React Native with Expo
- 🎯 TypeScript for type safety
- 🗄️ Offline-first with AsyncStorage
- 🎨 Modern design system with reusable components
- ⚡ Smooth animations with Reanimated
- 📳 Haptic feedback for better UX
- 🧭 Bottom tab navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brahmacharya-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your device:
- **iOS**: Press `i` or scan QR code with Camera app
- **Android**: Press `a` or scan QR code with Expo Go app
- **Web**: Press `w`

## 📁 Project Structure

```
brahmacharya-app/
├── app/                    # App screens and navigation
│   ├── (tabs)/            # Bottom tab screens
│   │   ├── index.tsx      # Home screen
│   │   ├── practice.tsx   # Practice screen
│   │   ├── track.tsx      # Track screen
│   │   └── learn.tsx      # Learn screen
│   ├── sos.tsx            # SOS modal screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── StreakCard.tsx
│   ├── WisdomCard.tsx
│   └── SOSButton.tsx
├── constants/             # Design system and theme
│   └── theme.ts
├── utils/                 # Utilities and helpers
│   ├── storage.ts         # Local storage functions
│   └── wisdom.ts          # Daily wisdom quotes
└── assets/               # Images and icons
```

## 🎨 Design System

### Colors
- **Primary**: Black (#000000) and White (#FFFFFF)
- **Grays**: #F5F5F5, #E0E0E0, #D4D4D4, etc.
- **Accent**: Deep Blue (#1E3A8A) for calm and focus
- **Semantic**: Success, Warning, Error colors

### Spacing Scale
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px
- xxxl: 64px

### Typography
- Display: 36-57px (Bold)
- Headline: 24-32px (Semi-bold)
- Title: 14-22px (Semi-bold)
- Body: 12-16px (Regular)
- Label: 11-14px (Medium)

## 🔧 Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tooling
- **TypeScript**: Type-safe code
- **Expo Router**: File-based navigation
- **React Native Reanimated**: Smooth animations
- **AsyncStorage**: Local data persistence
- **Expo Haptics**: Tactile feedback
- **Expo Vector Icons**: Icon library

## 📱 Screens Overview

### Home
- Current and longest streak display
- Daily wisdom quote
- Quick action cards
- SOS button for emergencies
- Today's focus section

### Practice
- Guided meditation
- Breathing exercises
- Yoga practice
- Mindful reading
- Practice tips

### Track
- Mood logging with 5 levels
- Notes and reflections
- Recent logs history
- Visual mood indicators

### Learn
- Featured articles
- Topic categories
- Educational resources
- Sacred texts and modern science

### SOS
- Emergency support strategies
- Breathing exercises
- Physical activities
- Contact support network
- Motivational reminders

## 🔐 Privacy & Data

- All data stored locally on device
- No cloud sync (optional feature for future)
- No tracking or analytics
- Complete user privacy

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Ancient wisdom traditions
- Modern neuroscience research
- Open source community

---

Built with ❤️ for personal growth and self-mastery
