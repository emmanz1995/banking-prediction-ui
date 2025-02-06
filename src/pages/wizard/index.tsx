import { useState } from 'react';
import styled from 'styled-components';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';
import Layout from '../../components/template/Layout/Layout';
import AgreementForm from '../../components/organisms/agreementForm/index';
import RequisitionForm from '../../components/organisms/requisitionsForm/index';
import AccountAccessForm from '../../components/organisms/accountAccessForm/index';
import SuccessForm from '../../components/organisms/successForm/index';
import Button from '../../components/atom/button/index';

function AccessAccountsWizard() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const steps = [
    {
      formType: 'agreementForm',
      icon: <FiUser />,
      component: AgreementForm,
    },
    {
      formType: 'requisitionForm',
      icon: <FiMail />,
      component: RequisitionForm,
    },
    {
      formType: 'accountAccessForm',
      icon: <FiLock />,
      component: AccountAccessForm,
    },
    {
      formType: 'successForm',
      icon: <FiCheck />,
      component: SuccessForm,
    },
  ];

  const nextPage = () => {
    if (currentIndex < steps.length) setCurrentIndex(step => step + 1);
  };
  const previousPage = () => {
    if (currentIndex > 1) setCurrentIndex(step => step - 1);
  };

  const ComponentForms = steps[currentIndex - 1].component;

  return (
    <Layout>
      <MainWrapper>
        <Card>
          <StepContainer>
            {steps.map(({ icon }, index) => (
              <StepWrapper
                active={currentIndex === index + 1}
                completed={currentIndex > index + 1}
                key={index}
              >
                {icon}
              </StepWrapper>
            ))}
          </StepContainer>
          <FormWrapper>
            <ComponentForms />
            <ButtonWrapper>
              <Button onClick={previousPage} size="medium">
                Back
              </Button>
              <Button onClick={nextPage} size="medium">
                Next
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </Card>
      </MainWrapper>
    </Layout>
  );
}

export default AccessAccountsWizard;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StepWrapper = styled.div<{ active: boolean; completed: boolean }>`
  background: ${props =>
    props.completed
      ? props.theme.purpleTheme
      : props.active
        ? props.theme.white
        : props.theme.gray?.[400]};
  border: solid 1px
    ${props =>
      !(props.completed || props.active)
        ? props.theme.gray?.[400]
        : props.theme.purpleTheme};
  color: ${props => (props.completed ? 'white' : props.active)};
  padding: ${props => props.theme.spacing?.[3]};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  padding: 2rem;
`;

const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormWrapper = styled.div`
  margin: 40px 0 0 0;
`;
