import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from '@docusaurus/router';
import firebase from "firebase/compat/app";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
  const [expiry, setExpiry] = useState(null);
  const [tooltipContent, setTooltipContent] = useState("Carregando infos da licença...");
  const { siteConfig } = useDocusaurusContext();
  const [cancelaLogin, setCancelaLogin] = useState(null);

  const location = useLocation();
  const history = useHistory();
  const baseUrl = useBaseUrl('/'); // Moved to top level

  useEffect(() => {
    let isMounted = true; // Prevents state updates after component unmount

    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChanged(firebase.auth(), async (user) => {
      if (user && isMounted) {
        try {
          // Force token refresh to get the latest claims
          const idTokenResult = await user.getIdTokenResult(true); // Get the full token result
          const customClaims = idTokenResult.claims;
          setExpiry(""); // Initialize expiry
          let cancelaLoginReason = ''; // Rename to avoid confusion with state variable
          console.log(customClaims);
          if (customClaims.bookExpiryDates) {
            const { bookExpiryDates } = customClaims;
            console.log(customClaims);
            // Check if the bookCode deste livro gerado (arquivo config) exists and get the expiry date
            if (bookExpiryDates[siteConfig.customFields.bookCode]) {
              const excelExpiryDate = bookExpiryDates[siteConfig.customFields.bookCode];
              const excelBuildDate = 1 + siteConfig.customFields.lastBuild;
              const excelBrowserDate = 1 + Math.floor((new Date() - new Date(1899, 11, 31)) / (24 * 60 * 60 * 1000));

              // Convert Excel serial date to a valid date 
              const excelEpoch = new Date(1899, 11, 31);
              const expiryDateObj = new Date(excelEpoch.getTime() + (excelExpiryDate - 1) * 86400000);

              // Check browser date
              //console.log('excelBrowserDate:', excelBrowserDate, 'excelBuildDate:', excelBuildDate , 'excelExpiryDate:', excelExpiryDate);
              if (excelBrowserDate < (excelBuildDate)) { // Margin of one day
                cancelaLoginReason = 'browserdate'; // Set reason for cancellation
              }

              // Check if expiryDateObj is a valid date
              if (!isNaN(expiryDateObj.getTime())) {
                const formattedExpiryDate = expiryDateObj.toLocaleDateString();
                //console.log('excelBrowserDate:', excelBrowserDate, 'excelExpiryDate:', excelExpiryDate);
                if (excelBrowserDate > excelExpiryDate) {
                  setExpiry(`🔴 `);
                  setTooltipContent(`Acesso expirou em: ${formattedExpiryDate}`);
                }
                else if ((excelBrowserDate+30) > excelExpiryDate) {
                  let msg = '';
                  if (excelBrowserDate == excelExpiryDate) msg = '[hoje] ';
                  else if ((excelExpiryDate - excelBrowserDate) == 1) msg = '[1 dia] ';
                  else msg = '[+' + (excelExpiryDate - excelBrowserDate) + ' dias] ';
                  setExpiry(msg + `🟡 `);
                  setTooltipContent(`Acesso expira em: ${formattedExpiryDate}`);
                }
                else {
                  setExpiry(`🟢 `);
                  setTooltipContent(`Acesso expira em: ${formattedExpiryDate}`);
                }
                
              } else {
                console.log('Invalid expiry date');
              }
            }
            else { //Não tem o livro liberado
              cancelaLoginReason = 'noBook'; // Set reason for cancellation
            }
          }
          else {
            cancelaLoginReason = 'noBook'; // Set reason for cancellation
          }

          setUser(user); // Set user state

          if (cancelaLoginReason !== '') {
            setCancelaLogin(cancelaLoginReason); // Update state to trigger redirection
          }
        } catch (error) {
          console.error('Error fetching ID token:', error);
        }
      } else {
        // User is logged out or no user, clear state
        setUser(null);
        setExpiry(null);
      }
    });

    // Cleanup the listener on component unmount
    return () => {
      isMounted = false; // Prevent updates to unmounted components
      unsubscribe(); // Cleanup listener
    };
  }, [siteConfig.customFields.lastBuild]); // Added dependency if siteConfig changes

  // Handle cancelaLogin outside the main effect
  useEffect(() => {
    if (cancelaLogin) {
      handleCancelaLogin(cancelaLogin);
    }
  }, [cancelaLogin]); // Runs only when cancelaLogin changes

  const handleLogout = async () => {
    await signOut(firebase.auth()); // Logs out the user
    setUser(null); // Clears the user state
    history.push(`${LOGOUT_PATH}?p=${encodeURIComponent(location.pathname)}`); // Redirects
  };

  const handleCancelaLogin = async (cancelaLogin) => {
    await signOut(firebase.auth()); // Logs out the user
    setUser(null); // Clears the user state
    history.push(`${baseUrl}?e=${encodeURIComponent(cancelaLogin)}`); // Redirects using baseUrl
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
      {/* ... other JSX ... */}
      {user ? (
        <div>
          <span data-tooltip-id="my-tooltip" data-tooltip-content={tooltipContent}>
            {expiry}
          </span>
          <Tooltip id="my-tooltip" />
          {user.email}
          <a onClick={handleLogout} style={linkStyle}>
            <FaSignOutAlt style={iconStyle} />&nbsp;
          </a>
        </div>
      ) : (
        <span></span>
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