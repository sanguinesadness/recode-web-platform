import { API_BASE_URL } from '@config/api.ts';
import ky from 'ky';

export const api = ky.create({
  prefixUrl: API_BASE_URL,
});
