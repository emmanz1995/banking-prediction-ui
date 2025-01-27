import { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
// import { request } from '../../connector';
import connector from '../../connector/connector';
import Layout from '../../components/template/Layout/Layout';

const TransactionsDashboard = () => {
  const [ accounts, setAccounts ]: any[] = useState([])
  useEffect(() => {
    retrieveAccounts()
  }, [])
  const retrieveAccounts = async() => {
    const res = await connector('http://localhost:8083/api/v1/details');
    setAccounts(res);
  }

  console.log(accounts)
  return (
    <Layout>
      <Container>
        <h1>Your Bank Details</h1>
        <CardContainer>
          {_.map(accounts.response, ({ id, iban, ownerName, transactions }) => {
            return (
              <StyledCard key={id}>
                <h4>Owner(s): {ownerName}</h4>
                <p>IBAN: {iban}</p>
              </StyledCard>
            )
          })}
        </CardContainer>
      </Container>
    </Layout>
  );
};

export default TransactionsDashboard;

const Container = styled.div`
  margin: 25px;
  h1 {
    color: ${(props: any) => props.theme.text};
  };
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledCard = styled.div`
  background-color: ${(props: any) => props.theme.purpleTheme};
  color: #F4F7FE;
  padding: 15px;
  width: 100%;
  //height: 200px;
`;
