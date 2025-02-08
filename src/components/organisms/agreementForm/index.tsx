import { FC } from 'react';
import InputField from '../../atom/input';
import styled from 'styled-components';

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

interface AgreementFromTypes {
  formValue: {
    institutionId: string;
    maxHistoricalDays: number;
    accessValidForDays: number;
  };
  accessScope: Array<string>;
  handleChange: any;
}

const AgreementForm: FC<AgreementFromTypes> = ({
  institutionId,
  maxHistoricalDays,
  accessValidForDays,
  accessScope,
  handleChange,
}) => (
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
          value={institutionId}
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
          value={maxHistoricalDays}
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
          value={accessValidForDays}
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
    </FormWrapper>
  </Form>
);

export default AgreementForm;
