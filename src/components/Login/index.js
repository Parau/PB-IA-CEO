// src/components/Login/index.js

import { useState } from "react";
import { FcGoogle } from 'react-icons/fc'; // Ícone do Google
import { FaMicrosoft } from 'react-icons/fa'; // Ícone da Microsoft

import { auth } from "../Auth";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useLocation, useHistory } from "@docusaurus/router";

import { GoogleAuthProvider, EmailAuthProvider, OAuthProvider, signInWithPopup } from 'firebase/auth';

import "./styles.css";

/* teste somente google
export function Login() {
  const handleGoogle = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
  }

  return (
    <button onClick={handleGoogle}>logar no google</button>
  )
}
*/ 

// requireDisplayName: false, 


export function Login() {
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignIn = async (p) => {
    try {
      let provider = null;
      if (p === 'Google') { 
          provider = new GoogleAuthProvider()
      } else if (p==='Microsoft') {
          provider = new OAuthProvider('microsoft.com');
      } else 
        return;

        await firebase.auth().signInWithPopup(provider);
      // ... handle successful sign-in (e.g., redirect or show success message) ...
    } catch (error) {
        console.log("Sign-in error:", error.email, error);

        // Optionally, map error codes to user-friendly messages
        let message;
        switch (error.code) {
          /* Estou tirando este tratamento porque quero migrar do popup para a própria página (melhor em celular)
          case 'auth/popup-closed-by-user':
            message = 'Sign-in popup was closed. Please try again.';
            break;
          */
          case 'auth/network-request-failed':
            message = 'Problema de conexão. Por favor, verifique sua internet e tente novamente.';
            break;
          case 'auth/admin-restricted-operation':
            /*Não existe o usuário*/
            message = 'Não foi encontrada uma licença de acesso ao guia associada a este e-mail.'; //tentei imprimir o email mas na documentação fala que por questões de segurança neste caso o e-mail utilizado não é informado.
            break;
          case 'auth/popup-closed-by-user':
            message = 'O janela de login foi fechada. Por favor, tente novamente e conclua o login.';
            break;
          case 'auth/account-exists-with-different-credential':
            if (p==="Microsoft") {  //Problema do provedor microsoft no primeiro login - vamos tentar fazer o relink
              console.log('tentando relink do email para microsoft: '+ error.email);
              // User's email already exists.
              // The pending Microsoft credential.
              var pendingCred = error.credential;
              // The provider account's email address.
              var email = error.email;
              firebase.auth().signInWithEmailAndPassword(email, '_empty_').then(function(result) {
                return result.user.linkWithCredential(pendingCred);
              }).then(function() {
                // Microsoft account successfully linked to the existing Firebase user.
                console.log('relink - primeiro login microsoft:', email);
                return;
              }).catch(function (error) {
                console.log('nao fez relink:', error);
                if (error.code === 'auth/invalid-login-credentials')
                  message = 'O e-mail ' + email + ' já está vinculado a outra conta. Tente fazer login com o Google ou use outro e-mail.';
                else 
                  message = 'Não encontrei uma licença para uso deste guia associada ao email: ' + email;
                setErrorMessage(message);
              });
            }
            else message = 'Não foi possível fazer login com o email: ' + error.email;
            break;
          default:
            message = error.code + ':' + error.message;
        }
        setErrorMessage(message);
    }
  };

  return (
    <div className="container">
    <div className="loginContainer">
      <h2 className="title">Escolha a forma de login que você usou ao liberar o acesso ao guia:</h2>
      <button onClick={() => handleSignIn('Google')} className={`button googleButton`}>
        <FcGoogle className="googleIcon" /> Login com Google
      </button>
      <button onClick={() => handleSignIn('Microsoft')} className={`button microsoftButton`}>
        <FaMicrosoft className="microsoftIcon" /> Login com Microsoft
      </button>
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
    </div>
  </div>
  );
}


