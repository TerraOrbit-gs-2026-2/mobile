import { Link, router } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AppButton } from '../src/components/AppButton';
import { ProtectedScreen } from '../src/components/ProtectedScreen';
import { useAuth } from '../src/contexts/AuthContext';
import { deleteFarm, getFarms } from '../src/services/farmService';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';
import { Farm } from '../src/types/farm';

export default function Farms() {
  const { token, userId } = useAuth();

  const [farms, setFarms] = useState<Farm[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadFarms = useCallback(async () => {
    if (!token || !userId) {
      setErrorMessage('Sessao expirada. Faca login novamente.');
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage('');

      const data = await getFarms(token, userId);
      setFarms(data);
    } catch {
      setErrorMessage(
        'Nao foi possivel carregar as fazendas. Verifique se a API esta rodando e se o login foi feito corretamente.'
      );
    } finally {
      setIsLoading(false);
    }
  }, [token, userId]);

  function handleEditFarm(farm: Farm) {
    router.push({
      pathname: '/farm-form',
      params: {
        id: String(farm.id),
        name: farm.farmName,
        location: farm.location,
        farmSizeHectares: String(farm.farmSizeHectares),
      },
    });
  }

  function handleDeleteFarm(farm: Farm) {
    if (!token) {
      setErrorMessage('Sessao expirada. Faca login novamente.');
      return;
    }

    Alert.alert(
      'Excluir fazenda',
      `Deseja excluir a fazenda ${farm.farmName}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              setIsLoading(true);
              await deleteFarm(farm.id, token);

              setFarms((currentFarms) =>
                currentFarms.filter((currentFarm) => currentFarm.id !== farm.id)
              );

              Alert.alert('Fazenda excluida', 'A fazenda foi removida com sucesso.');
            } catch {
              Alert.alert(
                'Erro ao excluir',
                'Nao foi possivel excluir a fazenda. Ela pode possuir sensores, incidentes, alertas ou recomendacoes vinculados.'
              );
            } finally {
              setIsLoading(false);
            }
          },
        },
      ]
    );
  }

  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Minhas Fazendas</Text>
        <Text style={styles.text}>Fazendas vinculadas ao usuario autenticado.</Text>

        <Link href="/farm-form" style={styles.createLink}>
          Cadastrar fazenda
        </Link>

        <AppButton title="Carregar fazendas" onPress={loadFarms} />

        {isLoading && (
          <View style={styles.feedback}>
            <ActivityIndicator color={colors.accent} />
            <Text style={styles.feedbackText}>Carregando fazendas...</Text>
          </View>
        )}

        {errorMessage ? (
          <Text style={styles.error}>{errorMessage}</Text>
        ) : null}

        <FlatList
          data={farms}
          keyExtractor={(item) => String(item.id)}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={loadFarms} />
          }
          ListEmptyComponent={
            !isLoading ? (
              <Text style={styles.empty}>
                Nenhuma fazenda carregada ainda. Toque em carregar fazendas.
              </Text>
            ) : null
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.farmName}</Text>
              <Text style={styles.cardText}>Localizacao: {item.location}</Text>
              <Text style={styles.cardText}>
                Tamanho: {item.farmSizeHectares} hectares
              </Text>

              <View style={styles.cardActions}>
                <AppButton
                  title="Editar"
                  onPress={() => handleEditFarm(item)}
                />

                <View style={styles.actionSpacer} />

                <AppButton
                  title="Excluir"
                  variant="secondary"
                  onPress={() => handleDeleteFarm(item)}
                />
              </View>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />

        <Link href="/dashboard" style={styles.backLink}>
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
    marginBottom: spacing.md,
  },
  text: {
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  createLink: {
    backgroundColor: colors.surface,
    color: colors.textPrimary,
    padding: spacing.md,
    borderRadius: 12,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  feedback: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  feedbackText: {
    color: colors.textSecondary,
  },
  error: {
    color: colors.danger,
    marginTop: spacing.md,
  },
  empty: {
    color: colors.textSecondary,
    marginTop: spacing.lg,
    textAlign: 'center',
  },
  listContent: {
    paddingVertical: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: spacing.md,
    padding: spacing.md,
  },
  cardTitle: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  cardText: {
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  cardActions: {
    marginTop: spacing.md,
  },
  actionSpacer: {
    height: spacing.sm,
  },
  backLink: {
    color: colors.accent,
    fontWeight: '700',
    textAlign: 'center',
  },
});
