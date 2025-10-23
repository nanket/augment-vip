import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage keys
const KEYS = {
  STREAK_DATA: '@brahmacharya:streak_data',
  MOOD_LOGS: '@brahmacharya:mood_logs',
  PRACTICE_LOGS: '@brahmacharya:practice_logs',
  USER_PROFILE: '@brahmacharya:user_profile',
  ONBOARDING_COMPLETE: '@brahmacharya:onboarding_complete',
};

// Streak Data
export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastCheckIn: string;
  startDate: string;
}

export const getStreakData = async (): Promise<StreakData> => {
  try {
    const data = await AsyncStorage.getItem(KEYS.STREAK_DATA);
    if (data) {
      return JSON.parse(data);
    }
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastCheckIn: new Date().toISOString(),
      startDate: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error getting streak data:', error);
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastCheckIn: new Date().toISOString(),
      startDate: new Date().toISOString(),
    };
  }
};

export const updateStreakData = async (data: StreakData): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEYS.STREAK_DATA, JSON.stringify(data));
  } catch (error) {
    console.error('Error updating streak data:', error);
  }
};

// Mood Logs
export interface MoodLog {
  id: string;
  date: string;
  mood: 'excellent' | 'good' | 'neutral' | 'difficult' | 'struggling';
  notes?: string;
}

export const getMoodLogs = async (): Promise<MoodLog[]> => {
  try {
    const data = await AsyncStorage.getItem(KEYS.MOOD_LOGS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting mood logs:', error);
    return [];
  }
};

export const addMoodLog = async (log: MoodLog): Promise<void> => {
  try {
    const logs = await getMoodLogs();
    logs.unshift(log);
    await AsyncStorage.setItem(KEYS.MOOD_LOGS, JSON.stringify(logs));
  } catch (error) {
    console.error('Error adding mood log:', error);
  }
};

// Practice Logs
export interface PracticeLog {
  id: string;
  date: string;
  type: 'meditation' | 'breathing' | 'yoga' | 'reading';
  duration: number; // in minutes
  notes?: string;
}

export const getPracticeLogs = async (): Promise<PracticeLog[]> => {
  try {
    const data = await AsyncStorage.getItem(KEYS.PRACTICE_LOGS);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error getting practice logs:', error);
    return [];
  }
};

export const addPracticeLog = async (log: PracticeLog): Promise<void> => {
  try {
    const logs = await getPracticeLogs();
    logs.unshift(log);
    await AsyncStorage.setItem(KEYS.PRACTICE_LOGS, JSON.stringify(logs));
  } catch (error) {
    console.error('Error adding practice log:', error);
  }
};

// Onboarding
export const isOnboardingComplete = async (): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(KEYS.ONBOARDING_COMPLETE);
    return value === 'true';
  } catch (error) {
    console.error('Error checking onboarding status:', error);
    return false;
  }
};

export const setOnboardingComplete = async (): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEYS.ONBOARDING_COMPLETE, 'true');
  } catch (error) {
    console.error('Error setting onboarding complete:', error);
  }
};

