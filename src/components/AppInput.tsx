import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type AppInputProps = TextInputProps & {
  label: string;
};

export function AppInput({ label, style, ...props }: AppInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
  label: {
    color: colors.textPrimary,
    fontWeight: '700',
    marginBottom: spacing.xs,
  },
  input: {
    backgroundColor: colors.surface,
    borderColor: colors.surfaceMuted,
    borderRadius: 14,
    borderWidth: 1,
    color: colors.textPrimary,
    padding: spacing.md,
  },
});
