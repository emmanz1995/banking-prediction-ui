import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TransactionCard } from '.';

// jest.mock('react-router-dom', () => ({
//   Link: jest.fn(({ to, children }) => <Link to={to}>{children}</Link>),
// }));

jest.mock('lucide-react', () => ({
  ArrowDownLeft: () => <svg data-testid="mocked-arrow-icon" />,
}));

describe('the tests for the <TransactionCard /> component', () => {
  it('should render the transactions card', () => {
    render(
      <TransactionCard
        balance={0}
        receiver={['Sainsbury']}
        transactionAmount={{ amount: '-4.00' }}
        valueDate={'2025-01-29'}
        testId="transactionCard-test"
      />
    );
    const Card = screen.getByTestId('transactionCard-test');
    console.log('...Card:', Card);
    //@ts-ignore
    console.log('...Card2222:', Card?.['__reactProps$hvzb384apcc']);
    expect(Card).toBeInTheDocument();
  });
});
