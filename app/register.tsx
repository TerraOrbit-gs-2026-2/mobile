import { router, Link } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../src/components/AppButton';
import { AppInput } from '../src/components/AppInput';
import { ScreenCard } from '../src/components/ScreenCard';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';
import { RegisterForm } from '../src/types/auth';

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    name: '',
    email: '',
    password: '',
  });

  function updateField(field: keyof RegisterForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function handleRegister() {
    if (!form.name || !form.email || !form.password) {
      Alert.alert('Campos obrigatorios', 'Preencha nome, e-mail e senha.');
      return;
    }

    if (form.password.length < 3) {
      Alert.alert('Senha invalida', 'A senha deve ter pelo menos 3 caracteres.');
      return;
    }

    Alert.alert('Cadastro validado', 'Agora vamos conectar essa tela com a API Java.');
    router.replace('/login');
  }

  return (
    <View style={styles.container}>
      <ScreenCard>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.text}>
          Cadastre-se para usar o TerraOrbit e acompanhar sua operacao agricola.
        </Text>

        <AppInput
          label="Nome"
          placeholder="Seu nome completo"
          value={form.name}
          onChangeText={(value) => updateField('name', value)}
        />

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
          placeholder="Minimo de 3 caracteres"
          secureTextEntry
          value={form.password}
          onChangeText={(value) => updateField('password', value)}
        />

        <AppButton title="Criar conta" onPress={handleRegister} />

        <Link href="/login" style={styles.link}>
          Ja tenho uma conta
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
