export const API_BASE_URL = 'http://10.0.2.2:8080';

export async function apiRequest<TResponse>(
  path: string,
  options: RequestInit = {}
): Promise<TResponse> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(responseText || 'Erro ao comunicar com a API.');
  }

  if (!responseText) {
    return undefined as TResponse;
  }

  return JSON.parse(responseText) as TResponse;
}
