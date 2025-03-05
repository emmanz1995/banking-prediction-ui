import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import GlobalStyles from './utils/GlobalStyles';
import AccessAccountsWizard from './pages/wizard';
import TransactionsDashboard from './pages/transactionsDashboard';
import Login from './pages/login/Login';
import AccountsMenu from './pages/accountsMenu/index';

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
        <Route path="/accounts" element={<TransactionsDashboard />} />
        <Route path="/oauth/callback" element={<AccessAccountsWizard />} />
        <Route path="/accounts-menu" element={<AccountsMenu />} />
      </Routes>
    </>
  );
}

export default App;

//http://localhost:5173/oauth/callback?ref=9634f098-02c3-431c-9278-979c623395ab
