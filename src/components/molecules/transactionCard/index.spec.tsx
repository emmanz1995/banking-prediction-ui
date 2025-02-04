import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TransactionCard } from '.';

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
    expect(Card).toBeInTheDocument();
  });
});
