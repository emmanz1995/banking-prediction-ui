import type { FC, ReactNode, FormEventHandler } from 'react';
import { StyledButton } from './styles';

export interface ButtonProps {
  /**
   * button size
   */
  size: 'small' | 'medium' | 'large';
  /**
   * Optional background color
   */
  backgroundColor?: string;
  /**
   * Optional click handler
   */
  onClick?: FormEventHandler<HTMLButtonElement>;
  /**
   * children display
   */
  children: ReactNode;
  /**
   * type -> submit
   */
  type?: string;
}

const Button: FC<ButtonProps> = ({ size, onClick, children, type }) => (
  <StyledButton size={size} onClick={onClick} type={type}>
    {children}
  </StyledButton>
);

export default Button;
