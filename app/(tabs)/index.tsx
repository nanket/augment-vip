import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { StreakCard } from '@/components/StreakCard';
import { WisdomCard } from '@/components/WisdomCard';
import { SOSButton } from '@/components/SOSButton';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { getStreakData, StreakData } from '@/utils/storage';
import { getDailyWisdom } from '@/utils/wisdom';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    longestStreak: 0,
    lastCheckIn: new Date().toISOString(),
    startDate: new Date().toISOString(),
  });
  const dailyWisdom = getDailyWisdom();

  useEffect(() => {
    loadStreakData();
  }, []);

  const loadStreakData = async () => {
    const data = await getStreakData();
    setStreakData(data);
  };

  const handleSOS = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
    router.push('/sos');
  };

  const handleQuickLog = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    router.push('/track');
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
          <View>
            <Text style={styles.greeting}>Welcome back</Text>
            <Text style={styles.title}>Your Journey Continues</Text>
          </View>
        </View>

        {/* SOS Button */}
        <View style={styles.sosContainer}>
          <SOSButton onPress={handleSOS} />
        </View>

        {/* Streak Card */}
        <StreakCard 
          currentStreak={streakData.currentStreak} 
          longestStreak={streakData.longestStreak}
        />

        {/* Daily Wisdom */}
        <WisdomCard quote={dailyWisdom.quote} author={dailyWisdom.author} />

        {/* Quick Actions */}
        <Card elevated>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <Card 
              style={styles.actionCard}
              onPress={() => router.push('/practice')}
            >
              <Ionicons name="leaf" size={32} color={Colors.accent} />
              <Text style={styles.actionTitle}>Practice</Text>
              <Text style={styles.actionSubtitle}>Meditation & Breathing</Text>
            </Card>
            
            <Card 
              style={styles.actionCard}
              onPress={handleQuickLog}
            >
              <Ionicons name="create" size={32} color={Colors.accent} />
              <Text style={styles.actionTitle}>Log Mood</Text>
              <Text style={styles.actionSubtitle}>Track your progress</Text>
            </Card>
          </View>
        </Card>

        {/* Today's Focus */}
        <Card elevated>
          <View style={styles.focusHeader}>
            <Ionicons name="bulb" size={24} color={Colors.accent} />
            <Text style={styles.sectionTitle}>Today's Focus</Text>
          </View>
          <Text style={styles.focusText}>
            Practice mindfulness for 10 minutes today. Focus on your breath and observe your thoughts without judgment.
          </Text>
          <Button 
            title="Start Practice" 
            onPress={() => router.push('/practice')}
            variant="primary"
            fullWidth
          />
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
  greeting: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  title: {
    ...Typography.headlineMedium,
    color: Colors.text,
    marginTop: Spacing.xs,
  },
  sosContainer: {
    alignItems: 'center',
    marginVertical: Spacing.sm,
  },
  sectionTitle: {
    ...Typography.titleLarge,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  quickActions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  actionCard: {
    flex: 1,
    alignItems: 'center',
    padding: Spacing.lg,
    gap: Spacing.sm,
  },
  actionTitle: {
    ...Typography.titleMedium,
    color: Colors.text,
  },
  actionSubtitle: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  focusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  focusText: {
    ...Typography.bodyLarge,
    color: Colors.textSecondary,
    lineHeight: 24,
    marginBottom: Spacing.lg,
  },
  bottomSpacer: {
    height: Spacing.xl,
  },
});

