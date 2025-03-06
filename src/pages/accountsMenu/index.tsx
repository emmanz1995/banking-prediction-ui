import { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  FaCheckCircle,
  FaRegTimesCircle,
  FaRegUserCircle,
  FaTrash,
} from 'react-icons/fa';
import { request } from '../../connector';
import Layout from '../../components/template/Layout/Layout';
import upperCaseToLowerCase from '../../helpers/upperCaseToLowerCase';

class AccountsMenu extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      requisitions: [],
    };
  }

  componentDidMount() {
    this.retrieveRequisitions();
  }

  retrieveRequisitions = async () => {
    const res = await request(
      `${import.meta.env.VITE_API_URL}/api/v1/access/requisitions`
    );
    this.setState({ requisitions: res });
  };

  renderIcon = status => {
    let icons = null;

    switch (status) {
      case 'LN':
        icons = <FaCheckCircle color="green" />;
        break;
      case 'UA':
        icons = <FaRegUserCircle color="orange" />;
        break;
      case 'RJ':
        icons = <FaRegTimesCircle color="red" />;
        break;
      default:
        return null;
    }

    return icons;
  };

  render() {
    const { requisitions } = this.state;
    return (
      <Layout>
        <h2>Hello World!</h2>
        <>
          {requisitions?.res?.map(
            ({ name, logo, data: { status, accounts, created } }, i) => (
              <CardWrapper key={i}>
                <Card>
                  {/*-------TITLE--------*/}
                  <Title>
                    <FaTrash />
                    <h4>{name}</h4>
                    <b>{this.renderIcon(status)}</b>
                  </Title>
                  {/*-------BODY--------*/}
                  <Body>
                    <p>
                      {!(accounts === []) ? (
                        <a href="/">
                          View dashboard for {upperCaseToLowerCase(name)} account
                        </a>
                      ) : (
                        `You cannot access this page unless you link your account!`
                      )}
                    </p>
                  </Body>
                </Card>
              </CardWrapper>
            )
          )}
        </>
      </Layout>
    );
  }
}

export default AccountsMenu;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //flex-wrap: wrap;
  gap: 20px;
  background-color: ${props => props.theme.gray[100]};
  padding: 5px;
`;
const Card = styled.div`
  width: 100%;
`;
const Title = styled.div``;
const Body = styled.div``;
