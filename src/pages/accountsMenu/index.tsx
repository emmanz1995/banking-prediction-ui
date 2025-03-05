import {Component} from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaRegTimesCircle, FaRegUserCircle } from 'react-icons/fa';
import { request } from '../../connector';
import Layout from '../../components/template/Layout/Layout';

class AccountsMenu extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      requisitions: [],
    }
  }

  componentDidMount() {
    this.retrieveRequisitions()
  }

  retrieveRequisitions = async () => {
    const res = await request(`${import.meta.env.VITE_API_URL}/api/v1/access/requisitions`);
    this.setState({ requisitions: res?.data?.results });
  };

  renderIcon = (status) => {
    let icons = null

    switch(status) {
      case 'LN':
        icons = <FaCheckCircle color='green' />
        break;
      case 'UA':
        icons = <FaRegUserCircle color='orange' />
        break;
      case 'RJ':
        icons = <FaRegTimesCircle color='red' />
        break;
      default: return null
    }

    return icons;
  }

  render() {
    const { requisitions } = this.state;
    return (
      <Layout>
        <h2>Hello World!</h2>
        <div>
          <div>{requisitions.map(({ status, id }) => (
            <span key={id}>
              {<b>{this.renderIcon(status)}</b>}
            </span>
          ))}</div>
        </div>
      </Layout>
    )
  }
}

export default AccountsMenu;