import './sidebar.scss';
import { map } from 'lodash';

const links: { title: string; link: string }[] = [
  {
    link: '/',
    title: 'Dashboard',
  },
  {
    link: '/users',
    title: 'Users',
  },
  {
    link: '/profile',
    title: 'Profile',
  },
  {
    link: '/about',
    title: 'About',
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="title"></div>
      <ul className="list">
        {map(links, ({ title, link }: { title: string; link: string }) => (
          <li key={title}>
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
