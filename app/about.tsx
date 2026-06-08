import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ProtectedScreen } from '../src/components/ProtectedScreen';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

export default function About() {
  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre o App</Text>
        <Text style={styles.text}>
          TerraOrbit Mobile - Global Solution 2026. Aqui sera exibido o hash do commit publicado.
        </Text>

        <Link href="/dashboard" style={styles.link}>Voltar ao dashboard</Link>
      </View>
    </ProtectedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 32,
    fontWeight: '800',
    marginBottom: spacing.md,
  },
  text: {
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  link: {
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
  },
});
