import { router, Link } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../src/components/AppButton';
import { AppInput } from '../src/components/AppInput';
import { ScreenCard } from '../src/components/ScreenCard';
import { useAuth } from '../src/contexts/AuthContext';
import { loginUser } from '../src/services/authService';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';
import { LoginForm } from '../src/types/auth';

export default function Login() {
  const { signIn } = useAuth();

  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  function updateField(field: keyof LoginForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  async function handleLogin() {
    if (!form.email || !form.password) {
      Alert.alert('Campos obrigatorios', 'Informe e-mail e senha para entrar.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await loginUser(form);

      signIn(response.token);
      router.replace('/dashboard');
    } catch {
      Alert.alert('Erro no login', 'Verifique suas credenciais e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <ScreenCard>
        <Text style={styles.title}>Entrar</Text>
        <Text style={styles.text}>
          Acesse sua conta para acompanhar fazendas, sensores e recomendacoes.
        </Text>

        <AppInput
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          autoCapitalize="none"
          keyboardType="email-address"
          value={form.email}
          onChangeText={(value) => updateField('email', value)}
        />

        <AppInput
          label="Senha"
          placeholder="Digite sua senha"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => updateField('password', value)}
        />

        <AppButton
          title={isLoading ? 'Entrando...' : 'Entrar no app'}
          onPress={handleLogin}
          disabled={isLoading}
        />

        <Link href="/register" style={styles.link}>
          Ainda nao tenho conta
        </Link>
      </ScreenCard>
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
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  link: {
    color: colors.accent,
    fontWeight: '700',
    marginTop: spacing.lg,
    textAlign: 'center',
  },
});
