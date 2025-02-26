import InputField from '../../atom/input/index';
import styled from 'styled-components';
import { FC } from 'react';

const Form = styled.form``;

const FormWrapper = styled.div`
  margin: 40px 0 0 0;
`;

// const InputGroup = styled.span`
//   margin: 20px 0;
// `;

const AccountAccessForm: FC<{ link: string }> = ({ link }) => (
  <Form>
    <h3>Connect to your Bank Account</h3>
    <FormWrapper>
      <li>
        <a href={link}>Connect to Bank</a>
      </li>
    </FormWrapper>
  </Form>
);

export default AccountAccessForm;
