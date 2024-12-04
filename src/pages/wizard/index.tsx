import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/template/Layout/Layout';
import Button from '../../components/atom/button/index';
import Modal from '../../components/molecules/modal';
import { InstitutionsSearchForm } from '../../components/organisms/institutionsSearchForm';

function AccessAccountsWizard() {
  const [showHide, setShowHide] = useState<boolean>(false);
  //@ts-ignore
  const [instutionsId, setInstutionsId] = useState<string>('');

  const showModal = () => setShowHide(show => !show);
  const handleSetInstitutionsId = (id: string) => setInstutionsId(id);

  return (
    <Layout>
      <MainWrapper>
        <TitleSection>
          <TitleWrapper>
            <h3>Access Your Account</h3>
            emmanz95
          </TitleWrapper>{' '}
          <div>
            {/*@ts-ignore*/}
            <Button size={'small'} onClick={showModal}>
              Institutions
            </Button>
          </div>
        </TitleSection>
        {showHide && (
          <Modal showModal={showModal}>
            {/*@ts-ignore*/}
            <InstitutionsSearchForm selectId={handleSetInstitutionsId} />
          </Modal>
        )}
      </MainWrapper>
    </Layout>
  );
}

export default AccessAccountsWizard;

const MainWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const TitleWrapper = styled.div`
  width: 100%;;
  color: ${props => props.theme.text};
`

const TitleSection = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.theme.text};
`