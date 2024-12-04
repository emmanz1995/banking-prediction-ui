export const errorExtractor = err =>
  (err.response &&
    err.response.data &&
    typeof err.response.data?.errorMessage === 'string' &&
    err.response.data?.errorMessage) ||
  (typeof err.data === 'string' && err.data) ||
  (typeof err === 'string' && err.toString()) ||
  'Unknown error';
