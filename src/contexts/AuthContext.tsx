import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

type SignInData = {
  token: string;
  userId: number;
};

type AuthContextData = {
  token: string | null;
  userId: number | null;
  isAuthenticated: boolean;
  signIn: (data: SignInData) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  function signIn(data: SignInData) {
    setToken(data.token);
    setUserId(data.userId);
  }

  function signOut() {
    setToken(null);
    setUserId(null);
  }

  const value = useMemo(
    () => ({
      token,
      userId,
      isAuthenticated: Boolean(token),
      signIn,
      signOut,
    }),
    [token, userId]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider.');
  }

  return context;
}
