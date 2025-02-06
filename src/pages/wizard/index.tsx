import { useState } from 'react';
import styled from 'styled-components';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';
import Layout from '../../components/template/Layout/Layout';
import AgreementForm from '../../components/organisms/agreementForm/index';
import RequisitionForm from '../../components/organisms/requisitionsForm/index';
import AccountAccessForm from '../../components/organisms/accountAccessForm/index';
import SuccessForm from '../../components/organisms/successForm/index';

function AccessAccountsWizard() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const steps = [
    {
      icon: <FiUser />,
      component: AgreementForm,
    },
    {
      icon: <FiMail />,
      component: RequisitionForm,
    },
    {
      icon: <FiLock />,
      component: AccountAccessForm,
    },
    {
      icon: <FiCheck />,
      component: SuccessForm,
    },
  ];

  const nextPage = () => {
    if(currentIndex < steps.length) setCurrentIndex(step => step + 1);
  }
  const previousPage = () => {
    if(currentIndex > 1) setCurrentIndex(step => step - 1);
  }

  const ComponentForms = steps[currentIndex - 1].component

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
            <button onClick={previousPage}>Back</button>
            <button onClick={nextPage}>Next</button>
          </FormWrapper>
        </Card>
      </MainWrapper>
    </Layout>
  );
}

export default AccessAccountsWizard;

const StepWrapper = styled.div<{ active: boolean; completed: boolean; }>`
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
  margin: 30px 0 0 0;
`;

// const TitleWrapper = styled.div`
//   width: 100%;
//   color: ${props => props.theme.text};
// `;
//
// const TitleSection = styled.div`
//   padding: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   color: ${props => props.theme.text};
// `;
