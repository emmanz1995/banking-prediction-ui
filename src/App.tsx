import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import GlobalStyles from './utils/GlobalStyles';
import AccessAccountsWizard from './pages/wizard';
import Login from './pages/login/Login';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/*<Route path="/register" element={<Register />} />*/}
        {/* <Route path="/dashboard" element={
          <PrivateRouteUtil>
            <Dashboard />
          </PrivateRouteUtil>
        } /> */}
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/accessAccountsWizard"
          element={<AccessAccountsWizard />}
        />
      </Routes>
    </>
  );
}

export default App;
