import axios from 'axios';

// interface IAxios {
//   url: string,
//   headers: object,
//   method: string,
//   data: object
// }

const journalConnectors = async ({
  url = '',
  headers = {},
  method = 'GET',
  ...rest
}) => {
  const { data } = await axios({
    url,
    method,
    ...headers,
    data: rest.body,
    ...rest,
  });
  return data;
};

export default journalConnectors;
