import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TerraOrbit</Text>
      <Text style={styles.subtitle}>
        Monitoramento agricola inteligente para a Global Solution 2026.
      </Text>

      <Link href="/login" style={styles.link}>
        Entrar
      </Link>

      <Link href="/register" style={styles.secondaryLink}>
        Criar conta
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 42,
    fontWeight: '800',
    marginBottom: spacing.md,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: spacing.xl,
  },
  link: {
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
    padding: spacing.md,
    borderRadius: 12,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  secondaryLink: {
    color: colors.accent,
    textAlign: 'center',
    fontWeight: '700',
  },
});
