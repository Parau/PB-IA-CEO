import React from 'react';
import { useState, useEffect, useRef } from "react";
import { FcGoogle } from 'react-icons/fc'; // Ícone do Google
import { FaMicrosoft } from 'react-icons/fa'; // Ícone da Microsoft
import { FaEnvelope } from 'react-icons/fa'; // Ícone de envelope de e-mail
import { FaPaperPlane } from 'react-icons/fa'; // Ícone de mensagem sendo enviada
import { FaUnlockAlt } from 'react-icons/fa';


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { GoogleAuthProvider, OAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
//import "./login.module.css"; Está carregando um css no módulo que usa este componente de Login


export default function login() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [emailMessage, setEmailMessage] = useState(null);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showSpecialCode, setShowSpecialCode] = useState(false);
  const [emailFornecido, setEmailFornecido] = useState('');
  const [codeFornecido, setCodigoFornecido] = useState('');
  const emailInputRef = useRef(null);
  const specialCodeInputRef = useRef(null);

  // Adicionando useEffect para monitorar showEmailInput
  useEffect(() => {
    if (showEmailInput && emailInputRef.current) {
      emailInputRef.current.focus(); // Define o foco no campo de e-mail quando é exibido
    }
    else if (showSpecialCode && specialCodeInputRef.current) {
      specialCodeInputRef.current.focus(); // Define o foco no campo de e-mail quando é exibido
    }
  }, [showEmailInput, showSpecialCode]); // Dependência adicionada aqui

  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);
  const baseUrl =  useBaseUrl('/');
  let pagRedirecionamento =  urlParams.has('p') ? urlParams.get('p') : baseUrl;
  const pagValidaLink = `${window.location.origin}${useBaseUrl('/loginlink')}`;

  const handleSignIn = async (p) => {
    try {
      let provider = null;
      if (p === 'Google') { 
          provider = new GoogleAuthProvider()
      } else if (p==='Microsoft') {
          provider = new OAuthProvider('microsoft.com');
      } else if (p==='codigo') {
          let code = codeFornecido.trim();
          console.log('código fornecido:', code);
          if (code==='503-12') {
            try {
              // Realizar o login com Firebase Authentication
              await signInWithEmailAndPassword(firebase.auth(), 'avaliar@criatividade.digital', 'acesso');
              console.log("Login via código realizado com sucesso!");
              history.push(pagRedirecionamento);
              return;
            } catch (error) {
              console.log('Código fornecido inexistente');
              let message = "O código de acesso informado não foi encontrado. Verifique se digitou corretamente e tente novamente."
              setErrorMessage(message);
              return;
            }
          } else {
            console.log('Código fornecido inexistente');
            let message = "O código de acesso informado não foi encontrado. Verifique se digitou corretamente e tente novamente."
            setErrorMessage(message);
            return;
          }
      } else if (p==='email') {
          const actionCodeSettings = {
            url: pagValidaLink, // URL de redirecionamento após o login
            handleCodeInApp: true // Informa ao Firebase que o link será aberto no app
          };
          console.log(emailFornecido);
          console.log(actionCodeSettings.url);
          firebase.auth().useDeviceLanguage();
          firebase.auth().sendSignInLinkToEmail(emailFornecido, actionCodeSettings)
            .then(() => {
              // Salva o e-mail para recuperação posterior
              window.localStorage.setItem('emailForSignIn', emailFornecido);
              console.log('Link de autenticação enviado!');
              let message = 'O link para acessar o Guia foi enviado para o e-mail '+ emailFornecido +'.'
              alert (message);
              message = message + ' Por favor, verifique sua caixa de entrada (ou a pasta de spam) e siga as instruções para concluir seu acesso!'
              setEmailMessage(message);

            })
            .catch((error) => {
              console.log("Sign-in error:", error.email, error);
              let message;
              switch (error.code) {
                case 'auth/admin-restricted-operation':
                  /*Não existe o usuário*/
                  message = 'Não foi encontrada uma licença de acesso ao guia associada ao e-mail ' + emailFornecido + '.'; //tentei imprimir o email mas na documentação fala que por questões de segurança neste caso o e-mail utilizado não é informado.
                  break;
                case 'auth/missing-email':
                  message = 'Digite o e-mail para envio do link de acesso ao guia.'
                  break;
                case 'auth/invalid-email':
                  message = 'Não foi encontrada uma licença de acesso ao guia associada ao e-mail ' + emailFornecido + '. Verifique se ele foi digitado corretamente.';
                  break;
                default:
                  message = error.code + ':' + error.message;
              }
              setErrorMessage(message);
            });
          return;
          
      } else
        return;

      await firebase.auth().signInWithPopup(provider);

      // ... handle successful sign-in (e.g., redirect or show success message) ...
      history.push(pagRedirecionamento);
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
          case 'auth/popup-blocked':
            message = 'O navegador bloqueou a janela de login. Por favor, ajuste as configurações do navegador para permitir a abertura de janelas pop-up para fazer o login.';
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
    <Layout title="Hello" description="Hello React Page">
    <div>
      <div className="container">
        <div className="loginContainer">
          <center>
          <br />
          <h2 className="title">Escolha a forma de login que você usou ao liberar o acesso ao guia:</h2>
          </center>
          {!showEmailInput && (
            <>
              <button onClick={() => handleSignIn('Google')} className="button googleButton">
                <FcGoogle className="googleIcon" /> Login com Google
              </button>
              <button onClick={() => handleSignIn('Microsoft')} className="button microsoftButton">
                <FaMicrosoft className="microsoftIcon" /> Login com Microsoft
              </button>
            </>
          )}

          {!showEmailInput ? (
              <button onClick={() => {setShowEmailInput(true); setShowSpecialCode(false);}} className="button emailButton">
                <FaEnvelope className="emailIcon"/> Login com email
              </button>
            ) : (
              <>
                <center>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => {setEmailFornecido(e.target.value); }}
                  className="emailInput"
                  ref={emailInputRef}          // Associa a referência ao campo de entrada
                />
                </center>
                <button onClick={() => handleSignIn('email')} className="button emailButton">
                  <FaPaperPlane className="emailIcon" />Enviar link de acesso
                </button>
              </>
            )
          }

          {!showSpecialCode ? (
              <button onClick={() => {setShowSpecialCode(true); setShowEmailInput(false);}} className="button codeButton">
                <FaUnlockAlt className="emailIcon"/> Usar código de acesso
              </button>
            ) : (
              <>
                <center>
                <input
                  type="codigo"
                  placeholder="Digite o código de acesso"
                  onChange={(e) => {setCodigoFornecido(e.target.value); }}
                  className="emailInput"
                  ref={specialCodeInputRef}          // Associa a referência ao campo de entrada
                />
                </center>
                <button onClick={() => handleSignIn('codigo')} className="button emailButton">
                  <FaPaperPlane className="emailIcon" />Enviar código de acesso
                </button>
              </>
            )
          }

          <center>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {emailMessage && <p style={{ color: 'green' }}>{emailMessage}</p>}
          </center>
        </div>
      </div>
    </div>
    </Layout>
  );
}