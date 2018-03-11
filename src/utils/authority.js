// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  let auth = localStorage.getItem('diablo-authority');
  if (!auth) {
    auth = 'Guest';
    setAuthority(auth);
  }
  console.info('getAuthority:', auth);
  return auth;
}

export function setAuthority(authority) {
  console.info('setAuthority:', authority);
  let auth = authority;
  if (!authority) {
    auth = 'Guest';
  }
  return localStorage.setItem('diablo-authority', auth);
}
