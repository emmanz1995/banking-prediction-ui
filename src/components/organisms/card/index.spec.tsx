import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // For custom jest matchers
import Card from './index';

// jest.mock('react-router-dom', () => ({
//   Link: jest.fn(({ to, children }) => <Link to={to}>{children}</Link>),
// }));

describe('test', () => {
  const transactions = {
    description: 'I want Mum to have a bacon cheese sandwich!',
    title: 'Mum2',
  };

  it('should display card queries', async () => {
    const { getByText } = render(<Card transactions={transactions} />);
    const titleElement = getByText('Mum2');
    const descElement = getByText(
      'I want Mum to have a bacon cheese sandwich!'
    );
    expect(titleElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });

  // it('should open up modal', async () => {});
  // it('should toggle if prayer is completed or not via button click', async () => {});
});
