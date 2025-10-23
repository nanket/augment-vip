import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

interface WisdomCardProps {
  quote: string;
  author: string;
}

export const WisdomCard: React.FC<WisdomCardProps> = ({ quote, author }) => {
  return (
    <Card elevated style={styles.card}>
      <View style={styles.iconContainer}>
        <Ionicons name="book-outline" size={24} color={Colors.accent} />
      </View>
      <Text style={styles.label}>Daily Wisdom</Text>
      <Text style={styles.quote}>"{quote}"</Text>
      <Text style={styles.author}>— {author}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.black,
  },
  iconContainer: {
    marginBottom: Spacing.sm,
  },
  label: {
    ...Typography.labelSmall,
    color: Colors.gray400,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: Spacing.sm,
  },
  quote: {
    ...Typography.bodyLarge,
    color: Colors.white,
    lineHeight: 24,
    marginBottom: Spacing.md,
    fontStyle: 'italic',
  },
  author: {
    ...Typography.bodyMedium,
    color: Colors.gray400,
    textAlign: 'right',
  },
});

