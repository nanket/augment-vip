import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface SOSStrategy {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  action: string;
}

const strategies: SOSStrategy[] = [
  {
    id: '1',
    title: 'Breathing Exercise',
    description: 'Calm your mind with box breathing',
    icon: 'pulse',
    action: 'Start Now',
  },
  {
    id: '2',
    title: 'Cold Shower',
    description: 'Reset your system instantly',
    icon: 'water',
    action: 'Learn How',
  },
  {
    id: '3',
    title: 'Physical Activity',
    description: 'Channel energy through movement',
    icon: 'fitness',
    action: 'Get Moving',
  },
  {
    id: '4',
    title: 'Call Someone',
    description: 'Reach out to your accountability partner',
    icon: 'call',
    action: 'Contact',
  },
];

export default function SOSScreen() {
  const router = useRouter();
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);

  const handleClose = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  const handleStrategySelect = (id: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setSelectedStrategy(id);
    // In a real app, this would navigate to the specific strategy
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.alertIcon}>
            <Ionicons name="alert-circle" size={32} color={Colors.error} />
          </View>
          <Text style={styles.title}>SOS Support</Text>
        </View>
        <Pressable onPress={handleClose} style={styles.closeButton}>
          <Ionicons name="close" size={28} color={Colors.text} />
        </Pressable>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Emergency Message */}
        <Card elevated style={styles.emergencyCard}>
          <Text style={styles.emergencyTitle}>You're Not Alone</Text>
          <Text style={styles.emergencyText}>
            This is a challenging moment, but you have the strength to overcome it. Take a deep breath and choose one of the strategies below.
          </Text>
        </Card>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Immediate Actions</Text>
          {strategies.map((strategy) => (
            <Card
              key={strategy.id}
              elevated
              onPress={() => handleStrategySelect(strategy.id)}
            >
              <View style={styles.strategyCard}>
                <View style={[styles.strategyIcon, { backgroundColor: `${Colors.error}15` }]}>
                  <Ionicons name={strategy.icon} size={28} color={Colors.error} />
                </View>
                <View style={styles.strategyContent}>
                  <Text style={styles.strategyTitle}>{strategy.title}</Text>
                  <Text style={styles.strategyDescription}>{strategy.description}</Text>
                </View>
                <View style={styles.strategyAction}>
                  <Text style={styles.strategyActionText}>{strategy.action}</Text>
                  <Ionicons name="arrow-forward" size={20} color={Colors.error} />
                </View>
              </View>
            </Card>
          ))}
        </View>

        {/* Reminders */}
        <Card elevated style={styles.remindersCard}>
          <View style={styles.remindersHeader}>
            <Ionicons name="heart" size={24} color={Colors.accent} />
            <Text style={styles.sectionTitle}>Remember</Text>
          </View>
          <View style={styles.remindersList}>
            <View style={styles.reminderItem}>
              <View style={styles.reminderBullet} />
              <Text style={styles.reminderText}>This urge is temporary and will pass</Text>
            </View>
            <View style={styles.reminderItem}>
              <View style={styles.reminderBullet} />
              <Text style={styles.reminderText}>You've overcome this before</Text>
            </View>
            <View style={styles.reminderItem}>
              <View style={styles.reminderBullet} />
              <Text style={styles.reminderText}>Your progress is worth protecting</Text>
            </View>
            <View style={styles.reminderItem}>
              <View style={styles.reminderBullet} />
              <Text style={styles.reminderText}>You are stronger than you think</Text>
            </View>
          </View>
        </Card>

        {/* Emergency Contacts */}
        <Card elevated>
          <View style={styles.contactsHeader}>
            <Ionicons name="people" size={24} color={Colors.accent} />
            <Text style={styles.sectionTitle}>Need to Talk?</Text>
          </View>
          <Text style={styles.contactsDescription}>
            Sometimes talking to someone helps. Reach out to your support network or a professional.
          </Text>
          <Button
            title="Contact Support Network"
            onPress={() => {}}
            variant="outline"
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  alertIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${Colors.error}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...Typography.headlineSmall,
    color: Colors.text,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.md,
    gap: Spacing.md,
  },
  emergencyCard: {
    backgroundColor: Colors.error,
  },
  emergencyTitle: {
    ...Typography.titleLarge,
    color: Colors.white,
    marginBottom: Spacing.sm,
  },
  emergencyText: {
    ...Typography.bodyLarge,
    color: Colors.white,
    lineHeight: 24,
    opacity: 0.95,
  },
  section: {
    gap: Spacing.md,
  },
  sectionTitle: {
    ...Typography.titleLarge,
    color: Colors.text,
  },
  strategyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  strategyIcon: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  strategyContent: {
    flex: 1,
    gap: Spacing.xs,
  },
  strategyTitle: {
    ...Typography.titleMedium,
    color: Colors.text,
  },
  strategyDescription: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  strategyAction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  strategyActionText: {
    ...Typography.labelLarge,
    color: Colors.error,
    fontWeight: '700',
  },
  remindersCard: {
    backgroundColor: Colors.gray100,
  },
  remindersHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  remindersList: {
    gap: Spacing.md,
  },
  reminderItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: Spacing.sm,
  },
  reminderBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accent,
    marginTop: 6,
  },
  reminderText: {
    ...Typography.bodyLarge,
    color: Colors.text,
    flex: 1,
    lineHeight: 22,
  },
  contactsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  contactsDescription: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
  bottomSpacer: {
    height: Spacing.xl,
  },
});

