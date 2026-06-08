import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';

type AppButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: 'primary' | 'secondary';
};

export function AppButton({ title, variant = 'primary', style, ...props }: AppButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        styles.button,
        isPrimary ? styles.primaryButton : styles.secondaryButton,
        style,
      ]}
      {...props}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 14,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  secondaryButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  primaryText: {
    color: colors.white,
  },
  secondaryText: {
    color: colors.accent,
  },
});
