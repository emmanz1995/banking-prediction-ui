import { useState } from 'react';
import { FaUser, FaMoneyBill, FaBalanceScale } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './dashboard.scss';
import Layout from '../../components/template/Layout/Layout';
import AccessCard from '../../components/organisms/accessCard/index';

function Dashboard() {
  const [showHide, setShowHide] = useState<boolean>(false);
  const [instutionsId, setInstutionsId] = useState<string>('');
  const navigate = useNavigate();

  const showModal = () => setShowHide(show => !show);

  const handleSetInstitutionsId = (id: string) => setInstutionsId(id);

  const onClickLink = (link: string) => navigate(link);

  return (
    <Layout>
      <div className="main">
        <div className="main__hub">
          <h3>Dashboard</h3>
          emmanz95
        </div>
        <p>{instutionsId}</p>
        <div className="main__journalSection">
          <AccessCard
            title="Register your Account"
            icon={<FaUser />}
            clickLink={onClickLink}
            link="/oauth/callback"
          />
          <AccessCard
            title="See your Account Transactions"
            icon={<FaMoneyBill />}
            clickLink={onClickLink}
            link="/accounts"
          />
          <AccessCard
            title="Summarise Balance"
            icon={<FaBalanceScale />}
            clickLink={onClickLink}
            link="/"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
