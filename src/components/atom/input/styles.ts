import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 300px;
  border: 2px solid ${props => props.theme.hover_purple};
  padding: 8px;
  border-radius: 4px;
  margin: 10px 0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
