import { apiRequest } from './api';
import { AuthResponse, LoginForm, RegisterForm } from '../types/auth';

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
