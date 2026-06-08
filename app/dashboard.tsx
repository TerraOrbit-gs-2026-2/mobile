import { Link, router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../src/components/AppButton';
import { useAuth } from '../src/contexts/AuthContext';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

export default function Dashboard() {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.text}>Resumo da operacao TerraOrbit.</Text>

      <Link href="/farms" style={styles.link}>Fazendas</Link>
      <Link href="/sensors" style={styles.link}>Sensores</Link>
      <Link href="/recommendations" style={styles.link}>Recomendacoes</Link>
      <Link href="/about" style={styles.link}>Sobre o App</Link>

      <View style={styles.footer}>
        <AppButton title="Sair" variant="secondary" onPress={handleLogout} />
      </View>
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
  footer: {
    marginTop: spacing.xl,
  },
});
