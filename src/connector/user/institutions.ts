import connector from '../connector';

// ${import.meta.env.VITE_API_URL}

export const onSearchInstitutions = async (text: string) =>
  await connector(`http://localhost:8082/api/v1/institutions/search`, {
    method: 'POST',
    data: { text },
  });

export const getAllInstitutions = async (page: number, limit: number) =>
  await connector(
    `http://localhost:8082/api/v1/institutions?page=${page}&limit=${limit}`,
    {
      method: 'GET',
    }
  );
