import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.text}>Aqui ficara a autenticacao real com a API Java.</Text>

      <Link href="/dashboard" style={styles.button}>
        Entrar no app
      </Link>

      <Link href="/register" style={styles.link}>
        Ainda nao tenho conta
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
    fontSize: 32,
    fontWeight: '800',
    marginBottom: spacing.md,
  },
  text: {
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  button: {
    backgroundColor: colors.primary,
    color: colors.white,
    textAlign: 'center',
    padding: spacing.md,
    borderRadius: 12,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  link: {
    color: colors.accent,
    textAlign: 'center',
  },
});
