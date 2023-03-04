import { api } from '@/services/api';

interface ResourcesAuthRequest {
  id_auth: string;
  email: string;
  picture: string;
  name: string;
}

interface ResourcesAuthResponse {
  id_auth: string;
  email: string;
  picture: string;
  name: string;
}

const baseURL = 'auth';

export const resourcesAuth = {
  auth: (request: ResourcesAuthRequest) =>
    api.post<ResourcesAuthResponse>(`${baseURL}/`, request)
};
