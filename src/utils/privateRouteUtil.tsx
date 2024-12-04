import { Navigate, useLocation } from 'react-router-dom';
import { getAccessToken } from '../connector/auth/auth';

export const PrivateRouteUtil = ({ children }: any) => {
  const location = useLocation();

  if (!getAccessToken()) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
