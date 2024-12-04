import { request } from '../connector/index';

const url = import.meta.env.VITE_API_URL;

export const getQueries = async () =>
  await request(`${url}/api/v1/query`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache no-store must-revalidate',
      Pragma: 'no-cache',
    },
  });

export const onCreateQuery = async data =>
  await request(`${url}/api/v1/query`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Cache-Control': 'no-cache no-store must-revalidate',
      // Pragma: 'no-cache'
    },
    data,
  });
