import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface StreakCardProps {
  currentStreak: number;
  longestStreak: number;
}

export const StreakCard: React.FC<StreakCardProps> = ({ currentStreak, longestStreak }) => {
  return (
    <Card elevated>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons name="flame" size={32} color={Colors.accent} />
          <Text style={styles.title}>Your Journey</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{currentStreak}</Text>
            <Text style={styles.statLabel}>Current Streak</Text>
            <Text style={styles.statSubLabel}>days</Text>
          </View>
          
          <View style={styles.divider} />
          
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{longestStreak}</Text>
            <Text style={styles.statLabel}>Longest Streak</Text>
            <Text style={styles.statSubLabel}>days</Text>
          </View>
        </View>
        
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${Math.min((currentStreak / 30) * 100, 100)}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {currentStreak < 30 ? `${30 - currentStreak} days to 30-day milestone` : 'Milestone achieved! 🎉'}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  title: {
    ...Typography.titleLarge,
    color: Colors.text,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: Spacing.md,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    ...Typography.displaySmall,
    color: Colors.black,
    fontWeight: '700',
  },
  statLabel: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  statSubLabel: {
    ...Typography.bodySmall,
    color: Colors.textTertiary,
  },
  divider: {
    width: 1,
    backgroundColor: Colors.gray200,
    marginHorizontal: Spacing.md,
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.gray200,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.accent,
  },
  progressText: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

