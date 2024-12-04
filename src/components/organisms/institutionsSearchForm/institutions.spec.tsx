import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, waitFor } from '@testing-library/react';
import Institutions from './Institutions';
import { onSearchInstitutions } from '../../../connector/user/institutions';

jest.mock('../../../connector/user/institutions', () => ({
  onSearchInstitutions: jest.fn(),
}));

describe('test <Institutions /> component', () => {
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
  it('should render <Institutions />', () => {
    const { getByTestId } = render(<Institutions />);

    const SearchComponent = getByTestId('institution-search');
    expect(SearchComponent).toBeInTheDocument();
  });

  it('should search for Revolut', async () => {
    (
      onSearchInstitutions as jest.MockedFunction<typeof onSearchInstitutions>
    ).mockResolvedValue(mockInstitutions);
    const user = userEvent.setup();
    const { getByRole, getByText, queryByText, getByAltText } = render(
      <Institutions />
    );

    const input = getByRole('searchbox');
    await user.type(input, 'Revolut');
    expect(input).toHaveValue('Revolut');

    await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());

    await waitFor(() =>
      expect(queryByText('Loading...')).not.toBeInTheDocument()
    );

    for (const institution of mockInstitutions) {
      expect(getByText(`Code: ${institution?.bic}`)).toBeInTheDocument();
      expect(getByText(`${institution.name}`)).toBeInTheDocument();
      expect(getByAltText(`${institution.name}`)).toBeInTheDocument();
    }
    expect(onSearchInstitutions).toHaveBeenCalledTimes(1);
    expect(onSearchInstitutions).toHaveBeenCalledWith('Revolut');
  });
});
