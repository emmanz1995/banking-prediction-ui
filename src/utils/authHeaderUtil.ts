export default function authHeader() {
  const currentUser = JSON.parse(localStorage.getItem('accessToken') as any);

  if (currentUser && currentUser.token) {
    return { Authorization: `Bearer ${currentUser.token}` };
  } else {
    return {};
  }
}
