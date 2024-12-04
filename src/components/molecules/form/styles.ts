import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${props => props.theme.light_color};
  padding: 30px;
  border-radius: 10px;
  .title {
    color: ${props => props.theme.hover_purple};
    text-align: center;
  }
  .line-separator {
    margin: 20px;
  }
`;
