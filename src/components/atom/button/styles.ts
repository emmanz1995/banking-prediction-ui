import styled from 'styled-components';
import { ButtonProps } from './index';

export const StyledButton = styled.button<{ size: ButtonProps['size'] }>`
  padding: ${({ size }) =>
    size === 'small'
      ? '8px 16px'
      : size === 'medium'
        ? '12px 24px'
        : '16px 32px'};
  font-size: ${({ size }) =>
    size === 'small' ? '13px' : size === 'medium' ? '15px' : '17px'};
  background-color: rgb(106 85 250 / 1);
  border: 2px solid ${props => props.theme.purpleTheme};
  border-radius: 4px;
  // width: 100%;
  cursor: pointer;
  color: ${props => props.theme.text};
  font-weight: bold;
`;
