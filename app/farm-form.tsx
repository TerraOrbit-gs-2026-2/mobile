import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../src/components/AppButton';
import { AppInput } from '../src/components/AppInput';
import { ProtectedScreen } from '../src/components/ProtectedScreen';
import { ScreenCard } from '../src/components/ScreenCard';
import { useAuth } from '../src/contexts/AuthContext';
import { createFarm } from '../src/services/farmService';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';
import { FarmFormData } from '../src/types/farm';

type FarmFormState = {
  name: string;
  location: string;
  farmSizeHectares: string;
  ownerId: string;
};

export default function FarmForm() {
  const { token } = useAuth();

  const [form, setForm] = useState<FarmFormState>({
    name: '',
    location: '',
    farmSizeHectares: '',
    ownerId: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  function updateField(field: keyof FarmFormState, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    if (!token) {
      Alert.alert('Sessao expirada', 'Faca login novamente.');
      router.replace('/login');
      return;
    }

    if (!form.name || !form.location || !form.farmSizeHectares || !form.ownerId) {
      Alert.alert('Campos obrigatorios', 'Preencha todos os campos da fazenda.');
      return;
    }

    const farmSize = Number(form.farmSizeHectares.replace(',', '.'));
    const ownerId = Number(form.ownerId);

    if (Number.isNaN(farmSize) || farmSize <= 0) {
      Alert.alert('Tamanho invalido', 'Informe o tamanho da fazenda em hectares.');
      return;
    }

    if (Number.isNaN(ownerId) || ownerId <= 0) {
      Alert.alert('Proprietario invalido', 'Informe um ID de proprietario valido.');
      return;
    }

    const payload: FarmFormData = {
      name: form.name,
      location: form.location,
      farmSizeHectares: farmSize,
      ownerId,
    };

    try {
      setIsLoading(true);
      await createFarm(payload, token);

      Alert.alert('Fazenda cadastrada', 'A fazenda foi criada com sucesso.');
      router.replace('/farms');
    } catch {
      Alert.alert(
        'Erro ao cadastrar',
        'Nao foi possivel criar a fazenda. Verifique se o ownerId existe na API.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <ScreenCard>
          <Text style={styles.title}>Cadastrar fazenda</Text>
          <Text style={styles.text}>
            Informe os dados para criar uma fazenda usando a API Java.
          </Text>

          <AppInput
            label="Nome da fazenda"
            placeholder="Ex: Fazenda Sao Joao"
            value={form.name}
            onChangeText={(value) => updateField('name', value)}
          />

          <AppInput
            label="Localizacao"
            placeholder="Ex: Ribeirao Preto, SP"
            value={form.location}
            onChangeText={(value) => updateField('location', value)}
          />

          <AppInput
            label="Tamanho em hectares"
            placeholder="Ex: 150.5"
            keyboardType="numeric"
            value={form.farmSizeHectares}
            onChangeText={(value) => updateField('farmSizeHectares', value)}
          />

          <AppInput
            label="ID do proprietario"
            placeholder="Ex: 1"
            keyboardType="numeric"
            value={form.ownerId}
            onChangeText={(value) => updateField('ownerId', value)}
          />

          <AppButton
            title={isLoading ? 'Salvando...' : 'Salvar fazenda'}
            onPress={handleSubmit}
            disabled={isLoading}
          />

          <View style={styles.cancelButton}>
            <AppButton
              title="Cancelar"
              variant="secondary"
              onPress={() => router.replace('/farms')}
            />
          </View>
        </ScreenCard>
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
    fontSize: 28,
    fontWeight: '800',
    marginBottom: spacing.md,
  },
  text: {
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.xl,
  },
  cancelButton: {
    marginTop: spacing.md,
  },
});
