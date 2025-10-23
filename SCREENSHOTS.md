# Brahmacharya App - Screenshots & UI Preview

## App Screens Overview

### Home Screen
**Features:**
- Welcome header with personalized greeting
- Pulsing SOS emergency button
- Streak tracking card with current and longest streaks
- Progress bar toward 30-day milestone
- Daily wisdom quote in elegant dark card
- Quick action cards for Practice and Log Mood
- Today's focus section with actionable guidance

**Design Highlights:**
- Clean white background
- Elevated cards with subtle shadows
- Black and white color scheme with deep blue accents
- Consistent 16px spacing between elements
- Smooth scroll experience

---

### Practice Screen
**Features:**
- Section header with subtitle
- Four practice options:
  1. Guided Meditation (10-20 min)
  2. Breathing Exercise (5-10 min)
  3. Yoga Practice (15-30 min)
  4. Mindful Reading (10-15 min)
- Each card shows icon, title, description, and duration
- Practice tips card with helpful guidance
- Chevron indicators for navigation

**Design Highlights:**
- Large, tappable cards
- Color-coded icons with light backgrounds
- Clear typography hierarchy
- Informative tips section in gray background

---

### Track Screen
**Features:**
- Mood logging interface with 5 emotion levels
- Visual mood selector grid:
  - Excellent (green happy face)
  - Good (blue smile)
  - Neutral (gray neutral face)
  - Difficult (orange concerned face)
  - Struggling (red sad face)
- Optional notes text area
- Save button
- Recent logs history with:
  - Date (Today, Yesterday, or date)
  - Mood badge with color
  - Notes preview

**Design Highlights:**
- Interactive mood grid with selection states
- Color-coded emotional indicators
- Clean form layout
- Organized history view

---

### Learn Screen
**Features:**
- Featured article card in black background
- "Featured" badge with star icon
- Topic cards organized by category:
  - Foundations
  - Science
  - Practice
  - Advanced
  - Practical
  - Spiritual
- Each topic shows icon, category, title, and description
- Resources section with:
  - Sacred Texts & Scriptures
  - Guided Audio Sessions
  - Video Tutorials
  - Community Discussions

**Design Highlights:**
- Prominent featured content
- Category-based organization
- Icon-driven navigation
- Clear content hierarchy

---

### SOS Screen (Modal)
**Features:**
- Alert header with red icon
- "You're Not Alone" encouragement message
- Four immediate action strategies:
  1. Breathing Exercise
  2. Cold Shower
  3. Physical Activity
  4. Call Someone
- Motivational reminders section
- Support network contact button
- Close button in header

**Design Highlights:**
- Red emergency theme
- Large, clear action cards
- Encouraging messaging
- Easy-to-access strategies
- Modal presentation over main app

---

## UI Components

### Card Component
- White background
- 16px border radius
- 1px gray border
- Medium shadow elevation
- 16px internal padding
- Press animation (scales to 0.98)
- Haptic feedback on press

### Button Component
**Variants:**
- **Primary**: Black background, white text
- **Secondary**: Light gray background, black text
- **Outline**: Transparent with black border
- **Ghost**: Transparent background

**Sizes:**
- Small: 36px height
- Medium: 44px height
- Large: 52px height

**Features:**
- Rounded corners (12px)
- Press animation (scales to 0.96)
- Loading state with spinner
- Disabled state (50% opacity)
- Haptic feedback

### Input Component
- Light gray background
- 12px border radius
- 1.5px border
- 48px minimum height
- Focus state: white background, black border
- Error state: red border
- Label and helper text support

### Streak Card
- Flame icon with accent color
- Two-column stat display
- Large numbers (36px)
- Progress bar with percentage fill
- Milestone text below progress

### Wisdom Card
- Black background
- Book icon
- "DAILY WISDOM" label
- Italic quote text in white
- Author attribution
- Elegant spacing

### SOS Button
- Red background
- Circular shape (full border radius)
- Alert icon + text
- Pulsing animation
- Large shadow
- Heavy haptic feedback

---

## Navigation

### Bottom Tab Bar
**Tabs:**
1. Home (house icon)
2. Practice (leaf icon)
3. Track (analytics icon)
4. Learn (book icon)

**Design:**
- White background
- 1px top border in gray
- Active tab: black color
- Inactive tabs: gray color
- 24px icons
- Small labels below icons
- 88px height on iOS, 64px on Android

---

## Color Palette in Use

### Primary
- Black (#000000) - Primary actions, text
- White (#FFFFFF) - Backgrounds, inverse text

### Grays
- #F5F5F5 - Surface backgrounds
- #E0E0E0 - Borders, dividers
- #A3A3A3 - Placeholder text
- #525252 - Secondary text

### Accent
- #1E3A8A - Deep blue for icons and highlights
- #3B82F6 - Light blue for secondary accents

### Semantic
- #22C55E - Success (excellent mood)
- #F59E0B - Warning (difficult mood)
- #EF4444 - Error (SOS, struggling mood)

---

## Typography Examples

### Display Text
- Streak numbers: 36px, Bold
- Large headings: 28px, Semi-bold

### Titles
- Screen titles: 28px, Semi-bold
- Card titles: 22px, Semi-bold
- Section titles: 16px, Semi-bold

### Body Text
- Primary: 16px, Regular
- Secondary: 14px, Regular
- Small: 12px, Regular

### Labels
- Buttons: 14px, Medium
- Badges: 12px, Medium
- Captions: 11px, Medium

---

## Spacing Examples

### Screen Padding
- Horizontal: 16px
- Vertical: 16px

### Card Spacing
- Internal padding: 16px
- Gap between cards: 16px

### Component Spacing
- Icon to text: 8px
- Label to input: 4px
- Button padding: 8px/16px (vertical/horizontal)

---

## Animation Examples

### Button Press
- Scale from 1.0 to 0.96
- Spring animation with damping: 15
- Duration: ~250ms

### Card Press
- Scale from 1.0 to 0.98
- Spring animation with damping: 15
- Duration: ~250ms

### SOS Button Pulse
- Scale from 1.0 to 1.05 and back
- Continuous loop
- Smooth spring animation

### Screen Transitions
- Fade animation
- Duration: 250ms
- Smooth and subtle

---

## Responsive Design

### Safe Areas
- Respects device notches
- Accounts for home indicators
- Proper padding on all devices

### Scroll Behavior
- Smooth scrolling
- Hidden scroll indicators
- Bottom spacer for comfortable viewing
- Bounce effect on iOS

### Touch Targets
- Minimum 44x44px for all interactive elements
- Larger targets for primary actions
- Adequate spacing between tappable items

---

## Dark Mode (Future)

### Planned Colors
- Background: #000000
- Surface: #171717
- Text: #FFFFFF
- Secondary text: #A3A3A3
- Borders: #404040

### Considerations
- Maintain contrast ratios
- Adjust shadow opacity
- Invert card colors
- Keep accent colors consistent

---

## Accessibility

### Current Features
- High contrast text
- Large touch targets
- Clear visual hierarchy
- Semantic colors with icons

### Future Enhancements
- Screen reader labels
- Dynamic type support
- Reduced motion option
- Voice control

---

## Platform Differences

### iOS
- 88px tab bar height (includes safe area)
- Native haptic engine
- Smooth spring animations
- System fonts

### Android
- 64px tab bar height
- Vibration feedback
- Material Design compliance
- System fonts

---

## Screenshot Checklist

When taking screenshots for app store:

### Required Screens
- [ ] Home screen with streak data
- [ ] Practice screen showing all options
- [ ] Track screen with mood selector
- [ ] Learn screen with topics
- [ ] SOS screen showing support options

### Best Practices
- Use realistic data (not all zeros)
- Show app in use (selected states)
- Capture on multiple device sizes
- Include both light backgrounds
- Show key features prominently

### Device Sizes
- iPhone 6.7" (Pro Max)
- iPhone 6.5" (Plus)
- iPhone 5.5"
- iPad Pro 12.9"
- iPad Pro 11"

---

## Marketing Assets

### App Store Description
Highlight:
- Privacy-first approach
- Offline functionality
- Beautiful, minimalist design
- Ancient wisdom + modern science
- Emergency SOS support
- Progress tracking
- Daily practices

### Keywords
- Brahmacharya
- Self-control
- Meditation
- Mindfulness
- Personal growth
- Habit tracking
- Wellness
- Mental health

---

*Note: Actual screenshots should be added to this directory once the app is running on a device or simulator.*

