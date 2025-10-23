import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { Card } from '@/components/Card';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

interface LearningTopic {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  category: string;
}

const topics: LearningTopic[] = [
  {
    id: '1',
    title: 'Understanding Brahmacharya',
    description: 'Ancient wisdom and modern science behind celibacy and self-control',
    icon: 'book',
    category: 'Foundations',
  },
  {
    id: '2',
    title: 'The Science of Self-Control',
    description: 'Neuroplasticity and how habits shape your brain',
    icon: 'bulb',
    category: 'Science',
  },
  {
    id: '3',
    title: 'Meditation Techniques',
    description: 'Practical methods for mindfulness and inner peace',
    icon: 'flower',
    category: 'Practice',
  },
  {
    id: '4',
    title: 'Energy Transmutation',
    description: 'Channeling vital energy into creative pursuits',
    icon: 'flash',
    category: 'Advanced',
  },
  {
    id: '5',
    title: 'Dealing with Urges',
    description: 'Practical strategies for difficult moments',
    icon: 'shield',
    category: 'Practical',
  },
  {
    id: '6',
    title: 'Spiritual Growth',
    description: 'Connecting with your higher self through discipline',
    icon: 'sparkles',
    category: 'Spiritual',
  },
];

export default function LearnScreen() {
  const handleTopicPress = (topicId: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // In a real app, this would navigate to the topic detail
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
          <Text style={styles.title}>Learn</Text>
          <Text style={styles.subtitle}>Wisdom from ancient traditions and modern science</Text>
        </View>

        {/* Featured Card */}
        <Card elevated style={styles.featuredCard}>
          <View style={styles.featuredBadge}>
            <Ionicons name="star" size={16} color={Colors.white} />
            <Text style={styles.featuredBadgeText}>Featured</Text>
          </View>
          <Text style={styles.featuredTitle}>The Path of Self-Mastery</Text>
          <Text style={styles.featuredDescription}>
            Discover how ancient practices of brahmacharya can transform your life, boost your energy, and unlock your full potential.
          </Text>
          <View style={styles.featuredFooter}>
            <View style={styles.featuredMeta}>
              <Ionicons name="time-outline" size={16} color={Colors.gray400} />
              <Text style={styles.featuredMetaText}>15 min read</Text>
            </View>
            <Ionicons name="arrow-forward" size={20} color={Colors.white} />
          </View>
        </Card>

        {/* Topics */}
        <View style={styles.topicsSection}>
          <Text style={styles.sectionTitle}>Explore Topics</Text>
          {topics.map((topic) => (
            <Card
              key={topic.id}
              elevated
              onPress={() => handleTopicPress(topic.id)}
            >
              <View style={styles.topicCard}>
                <View style={styles.topicIcon}>
                  <Ionicons name={topic.icon} size={24} color={Colors.accent} />
                </View>
                <View style={styles.topicContent}>
                  <View style={styles.topicHeader}>
                    <Text style={styles.topicCategory}>{topic.category}</Text>
                  </View>
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  <Text style={styles.topicDescription}>{topic.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.gray400} />
              </View>
            </Card>
          ))}
        </View>

        {/* Resources Card */}
        <Card elevated>
          <View style={styles.resourcesHeader}>
            <Ionicons name="library" size={24} color={Colors.accent} />
            <Text style={styles.sectionTitle}>Recommended Resources</Text>
          </View>
          <View style={styles.resourcesList}>
            <View style={styles.resourceItem}>
              <Ionicons name="book-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.resourceText}>Sacred Texts & Scriptures</Text>
            </View>
            <View style={styles.resourceItem}>
              <Ionicons name="headset-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.resourceText}>Guided Audio Sessions</Text>
            </View>
            <View style={styles.resourceItem}>
              <Ionicons name="videocam-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.resourceText}>Video Tutorials</Text>
            </View>
            <View style={styles.resourceItem}>
              <Ionicons name="people-outline" size={20} color={Colors.textSecondary} />
              <Text style={styles.resourceText}>Community Discussions</Text>
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
  featuredCard: {
    backgroundColor: Colors.black,
    padding: Spacing.lg,
  },
  featuredBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
    alignSelf: 'flex-start',
    backgroundColor: Colors.accent,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
    borderRadius: 12,
    marginBottom: Spacing.md,
  },
  featuredBadgeText: {
    ...Typography.labelSmall,
    color: Colors.white,
    fontWeight: '700',
  },
  featuredTitle: {
    ...Typography.headlineSmall,
    color: Colors.white,
    marginBottom: Spacing.sm,
  },
  featuredDescription: {
    ...Typography.bodyLarge,
    color: Colors.gray300,
    lineHeight: 24,
    marginBottom: Spacing.lg,
  },
  featuredFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
  featuredMetaText: {
    ...Typography.bodySmall,
    color: Colors.gray400,
  },
  topicsSection: {
    gap: Spacing.md,
  },
  sectionTitle: {
    ...Typography.titleLarge,
    color: Colors.text,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  topicIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: `${Colors.accent}15`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topicContent: {
    flex: 1,
    gap: Spacing.xs,
  },
  topicHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicCategory: {
    ...Typography.labelSmall,
    color: Colors.accent,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  topicTitle: {
    ...Typography.titleMedium,
    color: Colors.text,
  },
  topicDescription: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    lineHeight: 18,
  },
  resourcesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    marginBottom: Spacing.md,
  },
  resourcesList: {
    gap: Spacing.md,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  resourceText: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
  },
  bottomSpacer: {
    height: Spacing.xl,
  },
});

