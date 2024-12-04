import { StyledLayout } from './styles';
import Navbar from '../../organisms/navbar';
import Sidebar from '../../organisms/sidebar';

function Layout({ children }) {
  return (
    <StyledLayout>
      <div>
        <Navbar />
      </div>
      <div className="layout-header">
        <div className="sidebar-left">
          <Sidebar />
        </div>
        <div style={{ width: '100%' }}>{children}</div>
      </div>
    </StyledLayout>
  );
}

export default Layout;
