import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recomendacoes</Text>
      <Text style={styles.text}>Recomendacoes inteligentes geradas a partir dos dados climaticos.</Text>

      <Link href="/dashboard" style={styles.link}>Voltar ao dashboard</Link>
    </View>
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
