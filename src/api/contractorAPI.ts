import Contractor from '../models/Contractor';
import { API_BASE, headers } from "../utils/constants";

export const getAllContractors = async (): Promise<Contractor[]> => {
  const response = await fetch(`${API_BASE}/contractors`, { headers });
  return await response.json();
};

export const getContractor = async (id: number): Promise<Contractor> => {
  const response = await fetch(`${API_BASE}/contractors?id=eq.${id}`, { headers });
  const data = await response.json();
  return data[0];
};

export const updateContractor = async (id: number, contractor: Partial<Contractor>): Promise<void> => {
  await fetch(`${API_BASE}/contractors?id=eq.${id}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(contractor),
  });
};
