import React from 'react';
import styled from 'styled-components';
import {
  Home,
  CreditCard,
  PieChart,
  Settings,
  LogOut,
  Wallet,
} from 'lucide-react';
const SidebarContainer = styled.div`
  height: 100%;
  width: 16rem;
  background-color: rgb(31, 41, 55);
  color: white;
  padding: ${props => props.theme.spacing[4]};
  position: fixed;
  left: 0;
  top: 0;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  margin-bottom: ${props => props.theme.spacing[8]};
`;
const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing[2]};
`;
const NavItemContainer = styled.div<{
  active?: boolean;
}>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  padding: ${props => props.theme.spacing[2]};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
`;
const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing[2]};
  transition: color 0.2s;
  position: absolute;
  bottom: ${props => props.theme.spacing[4]};
  left: ${props => props.theme.spacing[4]};
`;
const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>
        <Wallet
          className="w-8 h-8"
          style={{
            color: 'rgb(106,85,250)',
          }}
        />
        <LogoText>Transaction Predication</LogoText>
      </Logo>
      <Nav>
        <NavItem icon={<Home size={20} />} text="Dashboard" active />
        <NavItem icon={<CreditCard size={20} />} text="Transactions" />
        <NavItem icon={<PieChart size={20} />} text="Analytics" />
        <NavItem icon={<Settings size={20} />} text="Settings" />
      </Nav>
      <LogoutButton>
        <LogOut size={20} />
        <span>Logout</span>
      </LogoutButton>
    </SidebarContainer>
  );
};
const NavItem = ({
  icon,
  text,
  active = false,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) => {
  return (
    <NavItemContainer active={active}>
      {icon}
      <span>{text}</span>
    </NavItemContainer>
  );
};

export default Sidebar;