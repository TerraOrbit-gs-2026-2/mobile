import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { AppButton } from '../src/components/AppButton';
import { ProtectedScreen } from '../src/components/ProtectedScreen';
import { useAuth } from '../src/contexts/AuthContext';
import { getFarms } from '../src/services/farmService';
import { colors } from '../src/theme/colors';
import { spacing } from '../src/theme/spacing';
import { Farm } from '../src/types/farm';

export default function Farms() {
  const { token } = useAuth();

  const [farms, setFarms] = useState<Farm[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const loadFarms = useCallback(async () => {
    if (!token) {
      setErrorMessage('Sessao expirada. Faca login novamente.');
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage('');

      const data = await getFarms(token);
      setFarms(data);
    } catch {
      setErrorMessage('Nao foi possivel carregar as fazendas. Verifique se a API esta rodando e se o login foi feito corretamente.');
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Fazendas</Text>
        <Text style={styles.text}>Lista das fazendas cadastradas na API Java.</Text>

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
              <Text style={styles.cardText}>Proprietario ID: {item.ownerId}</Text>
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
  backLink: {
    color: colors.accent,
    fontWeight: '700',
    textAlign: 'center',
  },
});
