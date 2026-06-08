export type User = {
  id: number;
  name: string;
  email: string;
  token?: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  userId: number;
};
