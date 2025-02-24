import { FC } from 'react';
import styled from 'styled-components';
import InputField from '../../atom/input/index';

const Form = styled.form``;

const FormWrapper = styled.div`
  margin: 40px 0 0 0;
`;

const InputGroup = styled.span`
  margin: 20px 0;
`;

const RequisitionForm: FC<{ institutionId: string; agreementId: string }> = ({
  institutionId,
  agreementId,
}) => (
  <Form>
    <h3>Requisition Form</h3>
    <FormWrapper>
      <InputGroup>
        <label>Search Institutions</label>
        <br />
        <InputField
          type="text"
          name="institutionId"
          placeholder="Find your institution"
          value={institutionId}
        />
      </InputGroup>
      <br />
      <br />
      <InputGroup>
        <label>Agreement ID</label>
        <br />
        <InputField type="text" name="agreementId" value={agreementId} />
      </InputGroup>
    </FormWrapper>
  </Form>
);

export default RequisitionForm;
