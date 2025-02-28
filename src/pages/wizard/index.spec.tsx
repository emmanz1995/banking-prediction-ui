import { render /* fireEvent, waitFor */ } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessAccountsWizard from './index';
import { request } from '../../connector/index';

jest.mock('../../connector/index');

describe('<AccessAccountWizard />', () => {
  it('should pass step 1 of the wizard form', async () => {
    render(<AccessAccountsWizard />);
    (request as jest.Mock as any).mockImplementation(() => ({
      id: 'b34345de-650f-427d-ab7e-1f3f83e21984',
      created: '2025-02-28T17:36:52.171998Z',
      institution_id: 'REVOLUT_REVOGB21',
      max_historical_days: 730,
      access_valid_for_days: 90,
      access_scope: ['balances', 'details', 'transactions'],
      accepted: null,
    }));
  });
});
