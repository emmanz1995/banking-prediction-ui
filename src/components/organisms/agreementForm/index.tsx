import { useState } from 'react';
import InputField from '../../atom/input';
import styled from 'styled-components';
import { request } from '../../../connector/index';
import Button from '../../atom/button/index';

const Form = styled.form``;

const FormWrapper = styled.div`
  margin: 40px 0 0 0;
`;

const InputGroup = styled.span`
  margin: 20rem 0;
`;

const ParaWrapper = styled.span`
  background-color: ${props => props.theme.gray[100]};
  padding: 10px;
  border-radius: 5px;
`;

const AgreementForm = () => {
  const formData = {
    institutionId: '',
    maxHistoricalDays: 0,
    accessValidForDays: 0,
  };
  const [formValue, setFormValue] = useState(formData);
  const accessScope = ['balances', 'details', 'transactions'];

  const handleChange = (evt: any) => {
    setFormValue(formValue => ({
      ...formValue,
      [evt.target.name]: evt.target.value,
    }));
  };

  const data = {
    ...formValue,
    accessScope,
  };

  const handleCreateAnAgreement = async evt => {
    evt.preventDefault();
    try {
      const response = await request(
        `${import.meta.env.VITE_API_URL}/api/v1/access/createUserAgreement`,
        {
          method: 'POST',
          data,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form>
      <h3>Agreement Form</h3>
      <FormWrapper>
        <InputGroup>
          <label>Search Institutions</label>
          <br />
          <InputField
            type="search"
            name="institutionId"
            placeholder="Find your institution"
            onChange={handleChange}
            value={formValue.institutionId}
          />
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <label>Historical Days</label>
          <br />
          <InputField
            type="number"
            name="maxHistoricalDays"
            placeholder="Select a number of historical days"
            onChange={handleChange}
            value={formValue.maxHistoricalDays}
          />
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <label>Access Days</label>
          <br />
          <InputField
            type="number"
            name="accessValidForDays"
            placeholder="Select a number of accessible days"
            onChange={handleChange}
            value={formValue.accessValidForDays}
          />
        </InputGroup>
        <br />
        <br />
        <InputGroup>
          <label>Select scope access</label>
          <br />
          <br />
          <ParaWrapper>{accessScope.join(', ')}</ParaWrapper>
          <br />
          <br />
        </InputGroup>
        {/*<Button size="small" onClick={handleCreateAnAgreement}>*/}
        {/*  Submit*/}
        {/*</Button>*/}
      </FormWrapper>
    </Form>
  );
};

export default AgreementForm;
