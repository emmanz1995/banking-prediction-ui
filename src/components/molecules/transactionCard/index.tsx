import type { FC } from 'react';
import { ArrowDownLeft } from 'lucide-react';
import styled from 'styled-components';

interface TransactionProps {
  balance: number;
  transactionAmount: {
    amount?: string;
    currency?: string;
  };
  valueDate: string;
  receiver: Array<String>;
  transactionId?: string;
  testId?: string;
}

const StyledTransactionCard = styled.div`
  background-color: white;
  color: #000;
  //height: 200px;
  //@ts-ignore
  padding: ${(props: any) => props?.theme?.spacing?.[4]};
  border-radius: 0.5rem;
  border: 1px solid #f3f4f6;
  transition: box-shadow 0.2s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  margin: 10px 0;
`;
// const TransactionGrid = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${props => props.theme.spacing[3]};
// `;

const TransactionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing?.[3]};
`;
const IconWrapper = styled.div`
  border-radius: 9999px;
  padding: ${props => props.theme.spacing?.[2]};
  background-color: #fee2e2;
`;
const TransactionInfo = styled.div``;
const Description = styled.p`
  font-weight: 500;
  color: #1f2937;
`;
const Date = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const RightSection = styled.div`
  text-align: right;
`;
const Amount = styled.p`
  font-weight: 600;
  color: #6b7280;
`;
const Balance = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const TransactionCard: FC<TransactionProps> = ({
  balance,
  transactionAmount,
  valueDate,
  receiver,
  testId
}) => {
  const { amount } = transactionAmount;

  return (
    <StyledTransactionCard data-testid={testId}>
      <TransactionContent>
        <LeftSection>
          <IconWrapper>
            <ArrowDownLeft size={20} />
          </IconWrapper>
          <TransactionInfo>
            <Description>{receiver.map(r => r)}</Description>
            <Date>{valueDate}</Date>
          </TransactionInfo>
        </LeftSection>
        <RightSection>
          <Amount>{amount}</Amount>
          <Balance>£{balance}</Balance>
        </RightSection>
      </TransactionContent>
    </StyledTransactionCard>
  );
};
