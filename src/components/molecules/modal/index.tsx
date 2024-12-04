import { ReactNode } from 'react';
import styled from 'styled-components';
import Backdrop from './backdrop';
import Button from '../../atom/button/index';

const Modal = ({
  children,
  showModal,
}: {
  // @ts-ignore
  children: ReactNode;
  showModal?: any;
}) => {
  return (
    //@ts-ignore
    <Backdrop>
      <StyledModal>
        <StyledHeader>
          <Button size={'small'} onClick={showModal}>
            Close
          </Button>
        </StyledHeader>
        <StyledBody>{children}</StyledBody>
      </StyledModal>
    </Backdrop>
  );
};

const StyledModal = styled.div`
  width: 365px;
  background-color: ${props => props.theme.purpleTheme};
`;
const StyledHeader = styled.div``;
const StyledBody = styled.div``;
// const StyledFooter = styled.div``;

export default Modal;
