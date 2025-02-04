import { Main, StyledLayout } from './styles';
import Sidebar from '../../organisms/sidebar';

function Layout({ children }) {
  return (
    <StyledLayout>
      <div className="layout-header">
        <div className="sidebar-left">
          <Sidebar />
        </div>
        <Main style={{ width: '100%' }}>{children}</Main>
      </div>
    </StyledLayout>
  );
}

export default Layout;
