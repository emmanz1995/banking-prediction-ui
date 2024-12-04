import { ReactNode } from 'react';
import styled from 'styled-components';

//@ts-ignore
const Backdrop = ({ children }: ReactNode) => {
  return <StyledBackdrop>{children}</StyledBackdrop>;
};

const StyledBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0 0 0 / 0.5);
  opacity: 1;
  z-index: 1;
`;

export default Backdrop;
