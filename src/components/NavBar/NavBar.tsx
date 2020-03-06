import React from 'react';
import { useAuth0 } from '../../react-auth0-spa';

const NavBar = () => {
  const { logout } = useAuth0();

  return (
    <>
      <div>
        <button type="button" onClick={() => logout()}>Log out</button>
      </div>
    </>
  );
};

export default NavBar;
