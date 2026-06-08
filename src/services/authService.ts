import { apiRequest } from './api';
import { LoginForm, RegisterForm } from '../types/auth';

type AuthResponse = {
  token: string;
};

export function loginUser(data: LoginForm) {
  return apiRequest<AuthResponse>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function registerUser(data: RegisterForm) {
  return apiRequest<AuthResponse>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
