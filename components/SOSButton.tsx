import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '@/constants/theme';
import * as Haptics from 'expo-haptics';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withRepeat, withSequence } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

interface SOSButtonProps {
  onPress: () => void;
}

export const SOSButton: React.FC<SOSButtonProps> = ({ onPress }) => {
  const scale = useSharedValue(1);
  const pulse = useSharedValue(1);

  React.useEffect(() => {
    pulse.value = withRepeat(
      withSequence(
        withSpring(1.05, { damping: 2 }),
        withSpring(1, { damping: 2 })
      ),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value * pulse.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.95, { damping: 15 });
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1, { damping: 15 });
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View style={[styles.button, animatedStyle]}>
        <Ionicons name="alert-circle" size={24} color={Colors.white} />
        <Text style={styles.text}>SOS Support</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.error,
    borderRadius: BorderRadius.full,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    ...Shadows.lg,
  },
  text: {
    ...Typography.titleMedium,
    color: Colors.white,
    fontWeight: '700',
  },
});

