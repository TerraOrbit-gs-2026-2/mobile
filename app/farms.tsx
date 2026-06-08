import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { ProtectedScreen } from '../src/components/ProtectedScreen';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

export default function Farms() {
  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Fazendas</Text>
        <Text style={styles.text}>Lista das fazendas cadastradas na API Java.</Text>

        <Link href="/farm-form" style={styles.link}>Cadastrar fazenda</Link>
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
