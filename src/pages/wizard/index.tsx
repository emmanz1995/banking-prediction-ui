import { EventHandler, FormEventHandler, useState } from 'react';
import styled from 'styled-components';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';
import Layout from '../../components/template/Layout/Layout';
import AgreementForm from '../../components/organisms/agreementForm/index';
import RequisitionForm from '../../components/organisms/requisitionsForm/index';
import AccountAccessForm from '../../components/organisms/accountAccessForm/index';
import SuccessForm from '../../components/organisms/successForm/index';
import Button from '../../components/atom/button/index';
import { request } from '../../connector/index';

function AccessAccountsWizard() {
  const formData = {
    institutionId: '',
    maxHistoricalDays: 0,
    accessValidForDays: 0,
  };
  const [currentIndex, setCurrentIndex] = useState(1);
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

  const handleCreateAnAgreement = async () => {
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

  const steps = [
    {
      formType: 'agreementForm',
      icon: <FiUser />,
      component: AgreementForm,
      props: { formValue, handleChange, accessScope },
    },
    {
      formType: 'requisitionForm',
      icon: <FiMail />,
      component: RequisitionForm,
      props: {},
    },
    {
      formType: 'accountAccessForm',
      icon: <FiLock />,
      component: AccountAccessForm,
      props: {},
    },
    {
      formType: 'successForm',
      icon: <FiCheck />,
      component: SuccessForm,
      props: {},
    },
  ];

  const nextPage = async evt => {
    evt.preventDefault();
    let isErrorPresented = false;

    if (currentIndex < steps.length && !isErrorPresented) {
      setCurrentIndex(step => step + 1);
      if (currentIndex === 1) {
        isErrorPresented;
        await handleCreateAnAgreement();
      } else {
        isErrorPresented;
        setCurrentIndex(1);
      }
    }
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
            <ComponentForms {...steps[currentIndex - 1].props} />
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
