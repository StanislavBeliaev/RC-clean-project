import React from 'react';
import { Text, StyleSheet, ScrollView, useColorScheme } from 'react-native';
import { Button, Card } from '../components';

export const HomeScreen: React.FC = () => {
  const isDark = useColorScheme() === 'dark';

  const handlePress = () => {
    console.warn('Button pressed!');
  };

  return (
    <ScrollView
      style={[styles.container, isDark && styles.containerDark]}
      contentContainerStyle={styles.content}
    >
      <Text style={[styles.title, isDark && styles.titleDark]}>
        Welcome to RC2App
      </Text>
      <Text style={[styles.subtitle, isDark && styles.subtitleDark]}>
        A React Native app without Expo
      </Text>

      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Getting Started</Text>
        <Text style={styles.cardText}>
          This is a fully configured React Native project with TypeScript,
          ESLint, and Prettier.
        </Text>
        <Button title="Get Started" onPress={handlePress} />
      </Card>

      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Features</Text>
        <Text style={styles.cardText}>✓ TypeScript configured</Text>
        <Text style={styles.cardText}>✓ ESLint + Prettier</Text>
        <Text style={styles.cardText}>✓ Custom components</Text>
        <Text style={styles.cardText}>✓ Organized folder structure</Text>
        <Text style={styles.cardText}>✓ Ready for development</Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  containerDark: {
    backgroundColor: '#1C1C1E',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  titleDark: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 24,
  },
  subtitleDark: {
    color: '#999',
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
});
