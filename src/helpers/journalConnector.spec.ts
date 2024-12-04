jest.mock('axios');

import axios from 'axios';
import journalConnectors from './journalConnector';

describe('test queries api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  const mockAxios = axios as unknown as jest.Mock;

  it('should be successful when call is made', async () => {
    mockAxios.mockImplementation(() => ({
      data: 'Bacon Cheese Cake',
    }));
    const journalCalls = await journalConnectors({
      url: 'http://localhost:3001/chickenSoup',
      method: 'GET',
      headers: {},
      data: '',
    });
    expect(journalCalls).toEqual('Bacon Cheese Cake');
    expect(axios).toHaveBeenCalledTimes(1);
    expect(axios).toHaveBeenCalledWith({
      url: 'http://localhost:3001/chickenSoup',
      method: 'GET',
      data: '',
    });
  });

  it('should fail when call is made with wrong arguments', async () => {
    expect.assertions(1);
    mockAxios.mockImplementationOnce(() => {
      const error = new Error();
      error.message = 'oops';
      throw error;
    });
    try {
      await journalConnectors({
        url: 'http://localhost:3',
        method: '',
        headers: {},
        data: '',
      });
    } catch (err: any) {
      expect(err.message).toEqual('oops');
    }
  });
});
