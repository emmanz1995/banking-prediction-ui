import {
  useState,
  useEffect,
  // ChangeEvent,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiUser, FiMail, FiLock, FiCheck } from 'react-icons/fi';
import Layout from '../../components/template/Layout/Layout';
import AgreementForm from '../../components/organisms/agreementForm';
import RequisitionForm from '../../components/organisms/requisitionsForm';
import AccountAccessForm from '../../components/organisms/accountAccessForm';
import SuccessForm from '../../components/organisms/successForm';
import Button from '../../components/atom/button';
import { request } from '../../connector/index';

function AccessAccountsWizard() {
  const formData = {
    institutionId: '',
    maxHistoricalDays: 0,
    accessValidForDays: 0,
  };
  const [currentIndex, setCurrentIndex] = useState(1);
  const [formValue, setFormValue] = useState(formData);
  const [institutionId, setInstitutionId] = useState(null);
  const [agreementId, setAgreementId] = useState(null);
  const [link, setLink] = useState(null);
  const [requisition, setRequisition] = useState({});
  const accessScope = ['balances', 'details', 'transactions'];

  const handleChange = (evt: any) => {
    const { name, value } = evt.target;
    setFormValue(formValue => ({
      ...formValue,
      [name]: value,
    }));
  };

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.search);

  const reference = new URLSearchParams(location.search).get('ref');
  console.log(reference);

  const getRequisition = async () => {
    try {
      const response = await request(
        `${import.meta.env.VITE_API_URL}/api/v1/access/accounts/${reference}`,
        { method: 'GET' }
      );
      setRequisition(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRequisition();
  }, [reference]);

  console.log('...requisition', requisition);

  const data = {
    ...formValue,
    accessScope,
  };

  const checkForErrors = async (step: number): Promise<boolean> => {
    try {
      // First API call
      if (step === 1) {
        const responseAgreement = await request(
          `${import.meta.env.VITE_API_URL}/api/v1/access/createUserAgreement`,
          {
            method: 'POST',
            data,
          }
        );
        setAgreementId(responseAgreement?.id);
        setInstitutionId(responseAgreement?.institution_id);
        if (responseAgreement.data?.error) {
          console.warn('Error detected in step 1 validation.');
          return true; // Stop early if there's an error
        }
      }

      // Second API call (only if first passed)
      if (step === 2) {
        const response2 = await request(
          `${import.meta.env.VITE_API_URL}/api/v1/access/requisitions`,
          {
            method: 'POST',
            data: {
              institutionId,
              agreementId,
              redirect: 'http://localhost:5173',
            },
          }
        );
        setLink(response2?.link);
        if (response2.data?.error) {
          console.warn('Error detected in step 2 validation.');
          return true;
        }
      }

      return false; // No errors detected in both calls
    } catch (error) {
      console.error('Error while checking validation:', error);
      return true; // Assume error to prevent progressing
    }
  };

  const steps: any = [
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
      props: { institutionId, agreementId },
    },
    {
      formType: 'accountAccessForm',
      icon: <FiLock />,
      component: AccountAccessForm,
      props: { link },
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
    let isErrorPresented = await checkForErrors(currentIndex);
    if (currentIndex < steps.length - 1) {
      if (![1, 2].includes(currentIndex) || !isErrorPresented) {
        setCurrentIndex(step => step + 1);
        console.log('Moving to next step. Error presented:', isErrorPresented);
      } else {
        console.log(`Error detected at step ${currentIndex}! Can't proceed.`);
      }
    } else {
      console.log('Already at the last step.');
    }
  };

  const previousPage = () => {
    if (currentIndex > 1) setCurrentIndex(step => step - 1);
  };

  const ComponentForms = steps[currentIndex - 1].component;

  // TODO: add logic to sync bank details to DB
  const handleBankTransactionSync = async () => {
    try {
      for (const account of requisition?.accounts) {
        await Promise.all([
          await request(`${import.meta.env.VITE_API_URL}/api/v1/details`, {
            method: 'POST',
            data: { accountId: account },
          }),
          await request(
            `${import.meta.env.VITE_API_URL}/api/v1/details/balances/sync`,
            {
              method: 'POST',
              data: {
                accountId: account,
              },
            }
          ),
          await request(
            `${import.meta.env.VITE_API_URL}/api/v1/details/transactions/sync`,
            {
              method: 'POST',
              data: {
                accountId: account,
              },
            }
          ),
        ]);
      }
      console.log('...Syncing bank account');
      navigate('/');
    } catch (err: any) {
      console.log('error syncing bank transaction:', err);
    }
  };

  return (
    <Layout>
      <MainWrapper>
        {!(reference === null) ? (
          <Card>
            <h3>Requisition</h3>
            <Button size="large" onClick={handleBankTransactionSync}>
              Sync Banks Details to account
            </Button>
          </Card>
        ) : (
          <Card>
            <StepContainer>
              {steps.map(({ icon }, index: number) => (
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
        )}
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
