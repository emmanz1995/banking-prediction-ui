import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
// import Layout from '../../template/Layout/Layout';
// import Button from '../../components/atom/button';
import InputField from '../../atom/input/index';
import { onSearchInstitutions } from '../../../connector/user/institutions';
import Button from '../../atom/button/index';

const InstitutionsSearchForm = ({ selectId }: { selectId?: any }) => {
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [institutions, setInstitutions] = useState<any[]>([]);
  // const [revealBankId, setRevealBankId] = useState(false);

  useEffect(() => {
    if (!text) return;
    setLoading(true);

    const handleSearchInstitution = async () => {
      try {
        const res = await onSearchInstitutions(text);
        setInstitutions(res);
        setLoading(false);
      } catch (err: unknown) {
        console.log(err);
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      handleSearchInstitution();
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    // <Layout>
    <StyledWrapper data-testid="institution-search">
      {/* ---------------- institutionsSearchForm search box ---------------- */}
      <StyledSearchBox>
        <InputField
          type="search"
          placeholder="Search an institution"
          name="text"
          value={text}
          onChange={(evt: ChangeEvent<HTMLInputElement | any>) =>
            setText(evt.target.value)
          }
        />
        {/* <Button onClick={handleSearchInstitution} size="small" type="submit">
            Search an Institution
          </Button> */}
      </StyledSearchBox>

      {/* ---------------- institutionsSearchForm card search viewer ---------------- */}
      <StyledCardSearchView>
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          institutions?.map(({ name, logo, ...rest }) => {
            return (
              <StyledInstituteCard data-testid="card-holder" key={rest?._id}>
                <img src={logo} alt={name} />
                <h3 data-testid="heading-t">{name}</h3>
                <p>Code: {rest?.bic}</p>
                <span>
                  Select Id:{' '}
                  <Button onClick={() => selectId(rest?._id)} size="small">
                    {rest?._id}
                  </Button>
                </span>
              </StyledInstituteCard>
            );
          })
        )}
      </StyledCardSearchView>

      {/* ---------------- institutionsSearchForm card viewer ---------------- */}
      <StyledCardView></StyledCardView>

      {/* ---------------- institutionsSearchForm footer ---------------- */}
    </StyledWrapper>
    // </Layout>
  );
};

const StyledWrapper = styled.div``;
const StyledSearchBox = styled.form`
  width: 100%;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledCardView = styled.div``;
const StyledCardSearchView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  h3 {
    color: ${props => props.theme.background};
  }
  overflow-y: auto;
  height: 365px;
  scrollbar-width: thin; /* For modern browsers */
  scrollbar-color: #888 #ccc; /* Customize scrollbar color */
`;
const StyledInstituteCard = styled.div`
  padding: 20px;
  //height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.cardBackground};
  border-radius: 5px;
`;

export default InstitutionsSearchForm;
