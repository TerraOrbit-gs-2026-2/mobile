import { Stack } from 'expo-router';
import { AuthProvider } from '../src/contexts/AuthContext';
import { colors } from '../src/theme/colors';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.textPrimary,
          headerTitleStyle: {
            fontWeight: '700',
          },
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'TerraOrbit' }} />
        <Stack.Screen name="login" options={{ title: 'Login' }} />
        <Stack.Screen name="register" options={{ title: 'Cadastro' }} />
        <Stack.Screen name="dashboard" options={{ title: 'Dashboard' }} />
        <Stack.Screen name="farms" options={{ title: 'Fazendas' }} />
        <Stack.Screen name="farm-form" options={{ title: 'Formulario de Fazenda' }} />
        <Stack.Screen name="sensors" options={{ title: 'Sensores' }} />
        <Stack.Screen name="recommendations" options={{ title: 'Recomendacoes' }} />
        <Stack.Screen name="about" options={{ title: 'Sobre o App' }} />
      </Stack>
    </AuthProvider>
  );
}
