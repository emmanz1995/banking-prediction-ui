import styled from 'styled-components';

export const StyledLayout = styled.main`
  width: 100%;
  .layout-header {
    display: flex;
  }
`;

export const Main = styled.main`
  margin-left: 16rem;
  padding: ${props => props.theme.spacing[8]};
  width: 100%;
`;
