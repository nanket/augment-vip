import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { getMoodLogs, addMoodLog, MoodLog } from '@/utils/storage';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

type MoodType = 'excellent' | 'good' | 'neutral' | 'difficult' | 'struggling';

interface MoodOption {
  type: MoodType;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

const moodOptions: MoodOption[] = [
  { type: 'excellent', label: 'Excellent', icon: 'happy', color: Colors.success },
  { type: 'good', label: 'Good', icon: 'happy-outline', color: Colors.accentLight },
  { type: 'neutral', label: 'Neutral', icon: 'remove-circle-outline', color: Colors.gray500 },
  { type: 'difficult', label: 'Difficult', icon: 'sad-outline', color: Colors.warning },
  { type: 'struggling', label: 'Struggling', icon: 'sad', color: Colors.error },
];

export default function TrackScreen() {
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [notes, setNotes] = useState('');
  const [moodLogs, setMoodLogs] = useState<MoodLog[]>([]);
  const [isLogging, setIsLogging] = useState(false);

  useEffect(() => {
    loadMoodLogs();
  }, []);

  const loadMoodLogs = async () => {
    const logs = await getMoodLogs();
    setMoodLogs(logs.slice(0, 10)); // Show last 10 logs
  };

  const handleMoodSelect = (mood: MoodType) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setSelectedMood(mood);
  };

  const handleSaveMood = async () => {
    if (!selectedMood) return;

    setIsLogging(true);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    const newLog: MoodLog = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      mood: selectedMood,
      notes: notes.trim() || undefined,
    };

    await addMoodLog(newLog);
    await loadMoodLogs();

    // Reset form
    setSelectedMood(null);
    setNotes('');
    setIsLogging(false);
  };

  const getMoodIcon = (mood: MoodType) => {
    return moodOptions.find(m => m.type === mood)?.icon || 'help-circle';
  };

  const getMoodColor = (mood: MoodType) => {
    return moodOptions.find(m => m.type === mood)?.color || Colors.gray500;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
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
          <Text style={styles.title}>Track Progress</Text>
          <Text style={styles.subtitle}>Log your daily mood and reflections</Text>
        </View>

        {/* Mood Logger */}
        <Card elevated>
          <Text style={styles.sectionTitle}>How are you feeling today?</Text>
          
          <View style={styles.moodGrid}>
            {moodOptions.map((mood) => (
              <Pressable
                key={mood.type}
                onPress={() => handleMoodSelect(mood.type)}
                style={[
                  styles.moodOption,
                  selectedMood === mood.type && styles.moodOptionSelected,
                ]}
              >
                <Ionicons 
                  name={mood.icon} 
                  size={32} 
                  color={selectedMood === mood.type ? mood.color : Colors.gray400} 
                />
                <Text style={[
                  styles.moodLabel,
                  selectedMood === mood.type && { color: mood.color }
                ]}>
                  {mood.label}
                </Text>
              </Pressable>
            ))}
          </View>

          <Input
            label="Notes (Optional)"
            placeholder="How was your day? Any challenges or victories?"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
            style={styles.notesInput}
          />

          <Button
            title="Save Mood Log"
            onPress={handleSaveMood}
            disabled={!selectedMood}
            loading={isLogging}
            fullWidth
          />
        </Card>

        {/* Recent Logs */}
        {moodLogs.length > 0 && (
          <Card elevated>
            <Text style={styles.sectionTitle}>Recent Logs</Text>
            <View style={styles.logsList}>
              {moodLogs.map((log) => (
                <View key={log.id} style={styles.logItem}>
                  <View style={styles.logHeader}>
                    <View style={styles.logMood}>
                      <Ionicons 
                        name={getMoodIcon(log.mood)} 
                        size={24} 
                        color={getMoodColor(log.mood)} 
                      />
                      <Text style={styles.logDate}>{formatDate(log.date)}</Text>
                    </View>
                    <View style={[styles.logBadge, { backgroundColor: `${getMoodColor(log.mood)}20` }]}>
                      <Text style={[styles.logBadgeText, { color: getMoodColor(log.mood) }]}>
                        {moodOptions.find(m => m.type === log.mood)?.label}
                      </Text>
                    </View>
                  </View>
                  {log.notes && (
                    <Text style={styles.logNotes} numberOfLines={2}>
                      {log.notes}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          </Card>
        )}

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
  sectionTitle: {
    ...Typography.titleLarge,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  moodOption: {
    flex: 1,
    minWidth: '30%',
    aspectRatio: 1,
    backgroundColor: Colors.gray100,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.xs,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  moodOptionSelected: {
    backgroundColor: Colors.white,
    borderColor: Colors.black,
  },
  moodLabel: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    fontWeight: '600',
  },
  notesInput: {
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: Spacing.md,
  },
  logsList: {
    gap: Spacing.md,
  },
  logItem: {
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray200,
  },
  logHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  logMood: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  logDate: {
    ...Typography.bodyMedium,
    color: Colors.text,
    fontWeight: '600',
  },
  logBadge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.sm,
  },
  logBadgeText: {
    ...Typography.labelSmall,
    fontWeight: '600',
  },
  logNotes: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  bottomSpacer: {
    height: Spacing.xl,
  },
});

