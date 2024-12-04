import {render, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import AccessAccountsWizard from './index';
import { onSearchInstitutions } from '../../connector/user/institutions';

jest.mock('../../connector/user/institutions', () => ({
  onSearchInstitutions: jest.fn(),
}));

describe('test', () => {
  const mockInstitutions = [
    {
      _id: 'REVOLUT_REVOGB21',
      __v: 0,
      bic: 'REVOGB21',
      countries: ['GB'],
      createdAt: '2024-10-16T18:21:25.508Z',
      logo: 'https://storage.googleapis.com/gc-prd-institution_icons-production/UK/PNG/revolut.png',
      name: 'Revolut',
      transaction_total_days: '730',
      updatedAt: '2024-10-16T22:30:57.972Z',
    },
  ];
  it('should render component', async () => {
    const { container } = render(<AccessAccountsWizard />)

    expect(container).toMatchSnapshot()
  });

  it('should render initial layout and button', () => {
    const { getByText, getByRole } = render(<AccessAccountsWizard />);

    // Check that the title and button are rendered
    expect(getByText('Access Your Account')).toBeInTheDocument();
    expect(getByRole('button', { name: /institutions/i })).toBeInTheDocument();
  });

  it('should show modal after clicking the institutes button', async () => {
   // mocks the institutions
   (onSearchInstitutions as jest.MockedFunction<typeof onSearchInstitutions>).mockResolvedValue(mockInstitutions)
    const { getByRole, getByTestId, getByPlaceholderText, getByText, queryByText } = render(<AccessAccountsWizard />);

    // gets the button institution button
    const btn = getByRole('button');
    fireEvent.click(btn)

    const form = getByTestId('institution-search')
    const input = getByPlaceholderText('Search an institution')

    // fires on change event
    fireEvent.change(input, { target: { value: 'Revolut' } })

    await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument())
    await waitFor(() => expect(queryByText('Loading...')).not.toBeInTheDocument())

    // asserting that these values exists in the documents
    expect(btn).toBeInTheDocument()
    expect(form).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Revolut')

    const closeBtn = getByRole('button', { name: /Close/i })
    fireEvent.click(closeBtn);

    expect(form).not.toBeInTheDocument();
    expect(input).not.toBeInTheDocument();
  })
});