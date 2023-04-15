import { API_BASE, headers } from "../utils/constants";
import Tenant from '../models/Tenant';

export const getAllTenatns = async (): Promise<Tenant[]> => {
    const response = await fetch(`${API_BASE}/tenants`, { headers });
    return await response.json();
};

export const getTenant = async (id: number): Promise<Tenant> => {
    const response = await fetch(`${API_BASE}/tenants?id=eq.${id}`, { headers });
    const data = await response.json();
    return data[0];
};