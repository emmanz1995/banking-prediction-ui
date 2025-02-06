import InputField from '../../atom/input/index';
import styled from 'styled-components';

const Form = styled.form``;

const FormWrapper = styled.div`
  margin: 40px 0 0 0;
`;

const InputGroup = styled.span`
  margin: 20px 0;
`;

const AccountAccessForm = () => (
  <Form>
    <h3>Account Access Form</h3>
    <FormWrapper>
      <InputGroup>
        <label>Search Institutions</label>
        <br />
        <InputField
          type="search"
          name="institutionId"
          placeholder="Find your institution"
        />
      </InputGroup>
      <br />
      <br />
      <InputGroup>
        <label>Historical Days</label>
        <br />
        <InputField
          type="text"
          name="maxHistoricalDays"
          placeholder="Select a number of historical days"
        />
      </InputGroup>
      <br />
      <br />
      <InputGroup>
        <label>Access Days</label>
        <br />
        <InputField
          type="text"
          name="accessValidForDays"
          placeholder="Select a number of accessible days"
        />
      </InputGroup>
      <br />
      <br />
      <InputGroup>
        <label>Access Scopes</label>
        <br />
        <InputField
          type="text"
          name="accessScope"
          placeholder="Select Access Scopes"
        />
      </InputGroup>
    </FormWrapper>
  </Form>
);

export default AccountAccessForm;
