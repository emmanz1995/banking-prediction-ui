import { jwtDecode, JwtPayload } from 'jwt-decode';
import connector from '../connector';

export const auth = async (email, password) => {
  const response = await connector('http://localhost:3001/api/auth', {
    method: 'POST',
    data: {
      email,
      password,
    },
  });
  if (response?.token) {
    localStorage.setItem('accessToken', JSON.stringify(response?.token));
  }

  return response;
};

export const onLogout = () => localStorage.removeItem('token');

export const getAccessToken = () => localStorage.getItem('accessToken');

export const isLoggedIn = () => {
  const accessToken = getAccessToken();
  return !!accessToken && !handleExpireToken(accessToken);
};

export const extractUserFromAccessToken = () => {
  const accessToken = getAccessToken();
  // @ts-ignore
  const decoded = jwtDecode(<JwtPayload>accessToken);

  return decoded;
};

// export const handleExpireToken = async (token: string | null) => {
//   let exp;
//   try {
//     if(typeof token === 'string') {
//       ({ exp } = jwtDecode(token))
//     }
//
//     const milliseconds = Date.now() / 10000
//     if (exp < milliseconds)
//       return true
//     else return false
//   } catch(err) {
//     console.log(err);
//     return false;
//   }
// }

export const handleExpireToken = token => {
  try {
    const { exp } = jwtDecode(token);
    const milliseconds = Date.now() / 10000;
    // @ts-ignore
    if (exp < milliseconds) return true;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
