import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ProtectedScreen } from '../src/components/ProtectedScreen';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

const COMMIT_HASH = 'cefadf3';

export default function About() {
  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Sobre o App</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Projeto</Text>
          <Text style={styles.value}>TerraOrbit Mobile</Text>

          <Text style={styles.label}>Global Solution</Text>
          <Text style={styles.value}>2026/1 - O Espaco e a Nova Fronteira</Text>

          <Text style={styles.label}>Objetivo</Text>
          <Text style={styles.value}>
            Aplicativo para apoiar o monitoramento agricola inteligente com fazendas,
            sensores e recomendacoes integradas a API Java.
          </Text>

          <Text style={styles.label}>Commit de referencia</Text>
          <Text style={styles.hash}>{COMMIT_HASH}</Text>
        </View>

        <Link href="/dashboard" style={styles.link}>
          Voltar ao dashboard
        </Link>
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
    marginBottom: spacing.xl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: spacing.lg,
  },
  label: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '800',
    marginTop: spacing.md,
    textTransform: 'uppercase',
  },
  value: {
    color: colors.textPrimary,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.xs,
  },
  hash: {
    backgroundColor: colors.background,
    borderRadius: 12,
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '800',
    marginTop: spacing.sm,
    padding: spacing.md,
  },
  link: {
    color: colors.accent,
    fontWeight: '700',
    marginTop: spacing.xl,
    textAlign: 'center',
  },
});
