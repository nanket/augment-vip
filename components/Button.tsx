import React from 'react';
import { Text, StyleSheet, Pressable, ViewStyle, TextStyle, ActivityIndicator } from 'react-native';
import { Colors, BorderRadius, Spacing, Typography } from '@/constants/theme';
import * as Haptics from 'expo-haptics';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  fullWidth = false,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.96, { damping: 15 });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15 });
  };

  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[`button_${size}`]];
    
    if (fullWidth) baseStyle.push(styles.fullWidth);
    if (disabled) baseStyle.push(styles.disabled);
    
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.primary);
        break;
      case 'secondary':
        baseStyle.push(styles.secondary);
        break;
      case 'outline':
        baseStyle.push(styles.outline);
        break;
      case 'ghost':
        baseStyle.push(styles.ghost);
        break;
    }
    
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.text, styles[`text_${size}`]];
    
    switch (variant) {
      case 'primary':
        baseStyle.push(styles.textPrimary);
        break;
      case 'secondary':
        baseStyle.push(styles.textSecondary);
        break;
      case 'outline':
        baseStyle.push(styles.textOutline);
        break;
      case 'ghost':
        baseStyle.push(styles.textGhost);
        break;
    }
    
    return baseStyle;
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      style={{ width: fullWidth ? '100%' : 'auto' }}
    >
      <Animated.View style={[getButtonStyle(), style, animatedStyle]}>
        {loading ? (
          <ActivityIndicator color={variant === 'primary' ? Colors.white : Colors.black} />
        ) : (
          <Text style={[getTextStyle(), textStyle]}>{title}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button_small: {
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.md,
    minHeight: 36,
  },
  button_medium: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    minHeight: 44,
  },
  button_large: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    minHeight: 52,
  },
  fullWidth: {
    width: '100%',
  },
  primary: {
    backgroundColor: Colors.black,
  },
  secondary: {
    backgroundColor: Colors.gray100,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.black,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: '600',
  },
  text_small: {
    ...Typography.labelMedium,
  },
  text_medium: {
    ...Typography.labelLarge,
  },
  text_large: {
    ...Typography.titleMedium,
  },
  textPrimary: {
    color: Colors.white,
  },
  textSecondary: {
    color: Colors.black,
  },
  textOutline: {
    color: Colors.black,
  },
  textGhost: {
    color: Colors.black,
  },
});

