import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Wallet } from 'lucide-react';
import _ from 'lodash';
import { request } from '../../connector';
import Layout from '../../components/template/Layout/Layout';
import { TransactionCard } from '../../components/molecules/transactionCard';

const TransactionsDashboard = () => {
  const [accounts, setAccounts]: any[] = useState([]);

  //TODO: will be using this state to store the balance in realtime
  const [balance, setBalance]: number = useState(0);

  useEffect(() => {
    retrieveAccounts();
  }, []);
  const retrieveAccounts = async () => {
    const res = await request(`${import.meta.env.VITE_API_URL}/api/v1/details`);
    setAccounts(res);
  };

  return (
    <Layout>
      <Container>
        {/* ------------------------- Main Header of page ------------------------------------ */}
        <MainHeaderWrapper>
          <Header>
            <Title>Welcome back, Emmanuel</Title>
            <p>Here's your financial overview</p>
          </Header>
          <BalanceCard>
            <BalanceContent>
              <Wallet size={24} />
              <BalanceInfo>
                <BalanceLabel>Total Balance</BalanceLabel>
                <BalanceAmount>$4,500.00</BalanceAmount>
              </BalanceInfo>
            </BalanceContent>
          </BalanceCard>
        </MainHeaderWrapper>
        {/* ------------------------- transactions list ------------------------------------ */}
        <ContainerTransactionList>
          <h2>Recent Transactions</h2>
          <TransactionGrid>
            {_.map(accounts.response, ({ id, iban, ...anyThingElse }) => {
              return (
                <div key={id}>
                  {_.map(
                    anyThingElse.transactions,
                    ({
                      transactionAmount,
                      valueDate,
                      receiver,
                      id: transactionId,
                    }) => (
                      <TransactionCard
                        transactionAmount={transactionAmount}
                        valueDate={valueDate}
                        receiver={receiver}
                        transactionId={transactionId}
                        balance={balance}
                        key={transactionId}
                      />
                    )
                  )}
                </div>
              );
            })}
          </TransactionGrid>
        </ContainerTransactionList>
      </Container>
    </Layout>
  );
};

export default TransactionsDashboard;

const Container = styled.div`
  margin: 25px;
  h1 {
    color: ${(props: any) => props.theme.text};
  }
`;

const MainHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing[4]};
`;

const Header = styled.div`
  p {
    font-weight: 700;
  }
`;

const BalanceCard = styled.span`
  background-color: ${props => props.theme.purpleTheme};
  padding: ${props => props.theme.spacing[4]};
  border-radius: 0.5rem;
  color: ${props => props.theme.background};
`;

const BalanceContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[3]};
`;

const BalanceInfo = styled.div``;

const BalanceLabel = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
`;

const BalanceAmount = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

const ContainerTransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[8]};
`;

const TransactionGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[3]};
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`;
