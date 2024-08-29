import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from '@docusaurus/router';
import firebase from "firebase/compat/app";
import { onAuthStateChanged } from "firebase/auth";

/*import { fab } from '@fortawesome/free-brands-svg-icons'; // Import all brands icons.
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import all solid icons.*/
import { FaSignOutAlt } from 'react-icons/fa';

import { useThemeConfig } from "@docusaurus/theme-common";

import {
  LOGIN_BUTTON,
  LOGIN_PATH,
  LOGOUT_BUTTON,
  LOGOUT_PATH,
} from "@site/src/utils/constants";


const User = () => {

  const [user, setUser] = useState(null);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    onAuthStateChanged(firebase.auth(), (user) => {
      setUser(user);
    });
  });

  const handleLogout = () => {
    let encondedPath =  LOGOUT_PATH + '?p=' + encodeURIComponent(location.pathname);
    history.push(encondedPath);
  };
  const handleLogin = () => {
    history.push(LOGIN_PATH);
  };

  const iconStyle = {
    verticalAlign: 'middle', // Aligns the icon vertically in the middle
    marginLeft: '0.5rem' // Optional: Adds spacing between text and icon
  };
  const linkStyle = {
    textDecoration: 'none', // Removes the default underline
    cursor: 'pointer', // Changes the cursor to a hand
  };

  return (
    <div>
      {/* ... */}
      {user ? (
        <div>
          {user.email}<a onClick={handleLogout} style={linkStyle}> <FaSignOutAlt  style={iconStyle} />&nbsp;</a>
        </div>
      ) : (
        <spam></spam>
      )}
    </div>
  );
};
export default User;

/* versão do return com a opção de logout
return (
    <div>
      {user ? (
        <div>
          <p>{user.email}<button onClick={handleLogout}>Sair</button></p>
        </div>
      ) : (
        <button onClick={handleLogin}>Logar</button>
      )}
    </div>
  );
*/