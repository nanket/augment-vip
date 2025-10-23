# Brahmacharya App - Design System Documentation

## Overview
This document outlines the complete design system for the Brahmacharya app, ensuring consistency across all screens and components.

## Color Palette

### Primary Colors
```
Black: #000000
White: #FFFFFF
```

### Gray Scale
```
gray50:  #FAFAFA  - Lightest background
gray100: #F5F5F5  - Surface background
gray200: #E0E0E0  - Dividers, borders
gray300: #D4D4D4  - Subtle borders
gray400: #A3A3A3  - Placeholder text
gray500: #737373  - Secondary icons
gray600: #525252  - Secondary text
gray700: #404040  - Body text (dark mode)
gray800: #262626  - Surface (dark mode)
gray900: #171717  - Background (dark mode)
```

### Accent Colors
```
accent:      #1E3A8A  - Deep blue (primary accent)
accentLight: #3B82F6  - Light blue (secondary accent)
```

### Semantic Colors
```
success: #22C55E  - Green for positive actions
warning: #F59E0B  - Orange for warnings
error:   #EF4444  - Red for errors/SOS
```

## Typography

### Font Weights
- Regular: 400
- Medium: 500
- Semi-bold: 600
- Bold: 700

### Type Scale

#### Display (Hero Text)
- **Display Large**: 57px / 64px line-height / -0.25 letter-spacing / Bold
- **Display Medium**: 45px / 52px line-height / Bold
- **Display Small**: 36px / 44px line-height / Bold

#### Headline (Section Headers)
- **Headline Large**: 32px / 40px line-height / Bold
- **Headline Medium**: 28px / 36px line-height / Semi-bold
- **Headline Small**: 24px / 32px line-height / Semi-bold

#### Title (Card Headers)
- **Title Large**: 22px / 28px line-height / Semi-bold
- **Title Medium**: 16px / 24px line-height / 0.15 letter-spacing / Semi-bold
- **Title Small**: 14px / 20px line-height / 0.1 letter-spacing / Semi-bold

#### Body (Content Text)
- **Body Large**: 16px / 24px line-height / 0.5 letter-spacing / Regular
- **Body Medium**: 14px / 20px line-height / 0.25 letter-spacing / Regular
- **Body Small**: 12px / 16px line-height / 0.4 letter-spacing / Regular

#### Label (UI Elements)
- **Label Large**: 14px / 20px line-height / 0.1 letter-spacing / Medium
- **Label Medium**: 12px / 16px line-height / 0.5 letter-spacing / Medium
- **Label Small**: 11px / 16px line-height / 0.5 letter-spacing / Medium

## Spacing System

### Base Unit: 4px

```
xs:   4px   - Tight spacing within components
sm:   8px   - Small gaps between related items
md:   16px  - Standard spacing between elements
lg:   24px  - Large spacing between sections
xl:   32px  - Extra large spacing
xxl:  48px  - Section dividers
xxxl: 64px  - Major section breaks
```

### Usage Guidelines
- Use `xs` (4px) for icon-text gaps, tight padding
- Use `sm` (8px) for list item gaps, small padding
- Use `md` (16px) for card padding, standard gaps
- Use `lg` (24px) for section spacing, large padding
- Use `xl` (32px) for screen padding, major gaps
- Use `xxl` (48px) for section dividers
- Use `xxxl` (64px) for major visual breaks

## Border Radius

```
sm:   8px   - Small elements (badges, tags)
md:   12px  - Standard elements (inputs, buttons)
lg:   16px  - Cards, containers
xl:   24px  - Large cards, modals
full: 9999px - Circular elements (avatars, pills)
```

## Shadows (Elevation)

### Small (Subtle Lift)
```
shadowColor: #000
shadowOffset: { width: 0, height: 1 }
shadowOpacity: 0.05
shadowRadius: 2
elevation: 2
```

### Medium (Standard Cards)
```
shadowColor: #000
shadowOffset: { width: 0, height: 2 }
shadowOpacity: 0.08
shadowRadius: 4
elevation: 4
```

### Large (Prominent Elements)
```
shadowColor: #000
shadowOffset: { width: 0, height: 4 }
shadowOpacity: 0.1
shadowRadius: 8
elevation: 8
```

### Extra Large (Modals, Overlays)
```
shadowColor: #000
shadowOffset: { width: 0, height: 8 }
shadowOpacity: 0.12
shadowRadius: 16
elevation: 12
```

## Animation Timing

```
fast:   150ms - Quick feedback (button press)
normal: 250ms - Standard transitions
slow:   350ms - Deliberate animations
```

### Animation Curves
- Use spring animations for interactive elements
- Damping: 15 for responsive feel
- Use linear for progress indicators

## Component Specifications

### Card
- Background: White (#FFFFFF)
- Border: 1px solid gray200 (#E0E0E0)
- Border Radius: 16px (lg)
- Padding: 16px (md)
- Shadow: Medium elevation
- Hover: Scale to 0.98 with spring animation

### Button
- **Primary**: Black background, white text
- **Secondary**: Gray100 background, black text
- **Outline**: Transparent background, black border (1.5px), black text
- **Ghost**: Transparent background, black text
- Border Radius: 12px (md)
- Padding: 8px/16px (small), 8px/24px (medium), 16px/32px (large)
- Min Height: 36px (small), 44px (medium), 52px (large)
- Hover: Scale to 0.96 with spring animation

### Input
- Background: Gray100 (#F5F5F5)
- Border: 1.5px solid gray200 (#E0E0E0)
- Border Radius: 12px (md)
- Padding: 8px/16px
- Min Height: 48px
- Focus: White background, black border
- Error: Red border (#EF4444)

### Bottom Navigation
- Background: White (#FFFFFF)
- Border Top: 1px solid gray200 (#E0E0E0)
- Height: 88px (iOS), 64px (Android)
- Active Color: Black (#000000)
- Inactive Color: Gray400 (#A3A3A3)
- Icon Size: 24px
- Label: Label Small (11px, Medium weight)

## Screen Layouts

### Standard Screen Padding
- Horizontal: 16px (md)
- Vertical: 16px (md)
- Gap between sections: 16px (md)

### Safe Area
- Always use SafeAreaView for top-level screens
- Account for notches and home indicators

### Scroll Views
- Hide scroll indicators
- Add bottom spacer (32px) for comfortable scrolling

## Haptic Feedback

### Light Impact
- Used for: Selection changes, mood selection
- Intensity: Light

### Medium Impact
- Used for: Button presses, navigation
- Intensity: Medium

### Heavy Impact
- Used for: SOS button, critical actions
- Intensity: Heavy

### Notification Feedback
- Success: Mood log saved
- Warning: SOS activated
- Error: Form validation errors

## Accessibility

### Minimum Touch Targets
- 44x44px minimum for all interactive elements
- 48x48px recommended for primary actions

### Color Contrast
- Text on white: Minimum 4.5:1 ratio
- Text on black: White text for maximum contrast
- Never use color alone to convey information

### Text Sizing
- Support dynamic type scaling
- Test with larger text sizes
- Ensure layouts don't break with 200% text size

## Icon Usage

### Icon Library
- Use Ionicons from @expo/vector-icons
- Consistent icon style across app

### Icon Sizes
- Small: 16px (labels, inline)
- Medium: 24px (buttons, navigation)
- Large: 32px (feature cards)
- Extra Large: 48px+ (hero sections)

### Icon Colors
- Primary actions: Black (#000000)
- Secondary actions: Gray500 (#737373)
- Accent features: Accent (#1E3A8A)
- Semantic: Success/Warning/Error colors

## Best Practices

### Do's
✅ Use consistent spacing from the scale
✅ Apply elevation appropriately (cards, modals)
✅ Provide haptic feedback for interactions
✅ Use smooth spring animations
✅ Maintain clear visual hierarchy
✅ Test on both iOS and Android
✅ Support dark mode (future consideration)

### Don'ts
❌ Mix spacing values outside the scale
❌ Overuse shadows (keep it subtle)
❌ Use too many accent colors
❌ Create custom animations without spring
❌ Ignore safe areas
❌ Use small touch targets (<44px)
❌ Rely solely on color for information

## Implementation Notes

### Theme File Location
`constants/theme.ts` - Central source of truth for all design tokens

### Component Library
All reusable components in `components/` directory:
- Button.tsx
- Card.tsx
- Input.tsx
- StreakCard.tsx
- WisdomCard.tsx
- SOSButton.tsx

### Usage Example
```typescript
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    backgroundColor: Colors.background,
  },
  title: {
    ...Typography.headlineMedium,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  card: {
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
  },
});
```

---

This design system ensures consistency, maintainability, and a professional appearance throughout the Brahmacharya app.

