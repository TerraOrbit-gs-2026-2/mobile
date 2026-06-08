import { apiRequest } from './api';
import { Farm, FarmFormData } from '../types/farm';

type EmbeddedFarms = {
  farmDTOList?: Farm[];
  farms?: Farm[];
  recommendations?: Farm[];
  farmDTOs?: Farm[];
  farmDTOes?: Farm[];
  [key: string]: unknown;
};

type FarmsResponse = {
  _embedded?: EmbeddedFarms;
};

const authHeaders = (token: string) => ({
  Authorization: `Bearer ${token}`,
});

function extractFarms(response: FarmsResponse) {
  const embedded = response._embedded;

  if (!embedded) {
    return [];
  }

  if (embedded.farmDTOList) return embedded.farmDTOList;
  if (embedded.farms) return embedded.farms;
  if (embedded.recommendations) return embedded.recommendations;
  if (embedded.farmDTOs) return embedded.farmDTOs;
  if (embedded.farmDTOes) return embedded.farmDTOes;

  const firstArray = Object.values(embedded).find(Array.isArray);

  return (firstArray ?? []) as Farm[];
}

export async function getFarms(token: string, userId: number) {
  const response = await apiRequest<FarmsResponse>(`/farms?userId=${userId}`, {
    headers: authHeaders(token),
  });

  return extractFarms(response);
}

export function createFarm(data: FarmFormData, token: string) {
  return apiRequest<Farm>('/farms', {
    method: 'POST',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
}

export function updateFarm(id: number, data: FarmFormData, token: string) {
  return apiRequest<Farm>(`/farms/${id}`, {
    method: 'PUT',
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
}

export function deleteFarm(id: number, token: string) {
  return apiRequest<void>(`/farms/${id}`, {
    method: 'DELETE',
    headers: authHeaders(token),
  });
}
