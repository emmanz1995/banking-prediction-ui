import { FC } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash, FaUser } from 'react-icons/fa';

type AccessCardProps = {
  title: string;
  icon: any;
  clickLink: any;
  link: string;
};

const AccessCard: FC<AccessCardProps> = ({ title, icon, clickLink, link }) => (
  <Card onClick={() => clickLink(link)}>
    {icon}
    <h4 className="card__title">{title}</h4>
  </Card>
);

export default AccessCard;

const Card = styled.div`
  padding: 15px;
  background-color: ${props => props.theme.purpleTheme};
  border-radius: 6px;
  color: ${props => props.theme.text};
  cursor: pointer;
`;