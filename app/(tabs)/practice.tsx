import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface PracticeItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const practices: PracticeItem[] = [
  {
    id: '1',
    title: 'Guided Meditation',
    subtitle: 'Calm your mind and find inner peace',
    duration: '10-20 min',
    icon: 'flower',
    color: Colors.accent,
  },
  {
    id: '2',
    title: 'Breathing Exercise',
    subtitle: 'Box breathing for stress relief',
    duration: '5-10 min',
    icon: 'pulse',
    color: Colors.accentLight,
  },
  {
    id: '3',
    title: 'Yoga Practice',
    subtitle: 'Gentle stretches and poses',
    duration: '15-30 min',
    icon: 'body',
    color: Colors.accent,
  },
  {
    id: '4',
    title: 'Mindful Reading',
    subtitle: 'Sacred texts and wisdom',
    duration: '10-15 min',
    icon: 'book',
    color: Colors.accentLight,
  },
];

export default function PracticeScreen() {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const handlePracticeSelect = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedPractice(id);
    // In a real app, this would navigate to the practice session
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Practice</Text>
          <Text style={styles.subtitle}>Choose your daily practice</Text>
        </View>

        {/* Practice Cards */}
        {practices.map((practice) => (
          <Card
            key={practice.id}
            elevated
            onPress={() => handlePracticeSelect(practice.id)}
          >
            <View style={styles.practiceCard}>
              <View style={[styles.iconContainer, { backgroundColor: `${practice.color}15` }]}>
                <Ionicons name={practice.icon} size={32} color={practice.color} />
              </View>
              <View style={styles.practiceContent}>
                <Text style={styles.practiceTitle}>{practice.title}</Text>
                <Text style={styles.practiceSubtitle}>{practice.subtitle}</Text>
                <View style={styles.durationContainer}>
                  <Ionicons name="time-outline" size={16} color={Colors.textSecondary} />
                  <Text style={styles.duration}>{practice.duration}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color={Colors.gray400} />
            </View>
          </Card>
        ))}

        {/* Tips Card */}
        <Card elevated style={styles.tipsCard}>
          <View style={styles.tipsHeader}>
            <Ionicons name="information-circle" size={24} color={Colors.accent} />
            <Text style={styles.tipsTitle}>Practice Tips</Text>
          </View>
          <View style={styles.tipsList}>
            <View style={styles.tipItem}>
              <View style={styles.tipBullet} />
              <Text style={styles.tipText}>Find a quiet, comfortable space</Text>
            </View>
            <View style={styles.tipItem}>
              <View style={styles.tipBullet} />
              <Text style={styles.tipText}>Practice at the same time daily</Text>
            </View>
            <View style={styles.tipItem}>
              <View style={styles.tipBullet} />
              <Text style={styles.tipText}>Start small and build consistency</Text>
            </View>
            <View style={styles.tipItem}>
              <View style={styles.tipBullet} />
              <Text style={styles.tipText}>Be patient with yourself</Text>
            </View>
          </View>
        </Card>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  header: {
    paddingVertical: Spacing.md,
  },
  title: {
    ...Typography.headlineMedium,
    color: Colors.text,
  },
  subtitle: {
    ...Typography.bodyLarge,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },
  practiceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  practiceContent: {
    flex: 1,
    gap: Spacing.xs,
  },
  practiceTitle: {
    ...Typography.titleMedium,
    color: Colors.text,
  },
  practiceSubtitle: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    marginTop: Spacing.xs,
  },
  duration: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
  },
  tipsCard: {
    backgroundColor: Colors.gray100,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  tipsTitle: {
    ...Typography.titleMedium,
    color: Colors.text,
  },
  tipsList: {
    gap: Spacing.sm,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
  },
  tipBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.accent,
    marginTop: 7,
  },
  tipText: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    flex: 1,
  },
  bottomSpacer: {
    height: Spacing.xl,
  },
});

