import { apiRequest } from './api';
import { Farm, FarmFormData } from '../types/farm';

type FarmsResponse = {
  _embedded?: {
    farmDTOList?: Farm[];
    farms?: Farm[];
  };
};

export async function getFarms() {
  const response = await apiRequest<FarmsResponse>('/farms');

  return response._embedded?.farmDTOList ?? response._embedded?.farms ?? [];
}

export function createFarm(data: FarmFormData, token: string) {
  return apiRequest<Farm>('/farms', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export function updateFarm(id: number, data: FarmFormData, token: string) {
  return apiRequest<Farm>(`/farms/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export function deleteFarm(id: number, token: string) {
  return apiRequest<void>(`/farms/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
