import React from 'react';
import { useState, useEffect, useRef } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useLocation, useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';

import {
  PROTECTED_PATHS
} from "../utils/constants";

export default function loginlink() {
  const [userLogged, setUserLogged] = useState(false);
  const baseUrlProtected = useBaseUrl(PROTECTED_PATHS[0]); // Coloca como base uma página protegida para forçar o login no redirecionamento se o usuário não estiver logado e acessar esta página
  const baseUrl = useBaseUrl('/');
  const history = useHistory();

  useEffect(() => {
    const estaLogado = firebase.auth().currentUser;
    if (estaLogado) {
      console.log('Usuário já está logado');
      history.push(`${baseUrl}`); 
    }
    else {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      console.log(window.location.href);
      // Recupera o e-mail do localStorage
      let email = window.localStorage.getItem('emailForSignIn');
      console.log('email from localstorage:', email);
      if (!email) {
        console.log('Não consegui ler email do localstorage');
        alert('O link do e-mail pode ser usado apenas uma vez. Por favor, faça o login com seu e-mail novamente.');
        history.push(`${baseUrlProtected}`);
      }
      else {
        firebase.auth().signInWithEmailLink(email, window.location.href)
          .then((result) => {
            console.log('Usuário autenticado:', result.user);
            window.localStorage.removeItem('emailForSignIn');
            setUserLogged(true);
            history.push(`${baseUrl}`); 
          })
          .catch((error) => {
            setUserLogged(false);
            switch (error.code){
              case 'auth/invalid-action-code':
                console.log('erro no login com email (auth/invalid-action-code)');
                alert('O link do e-mail pode ser usado apenas uma vez. Por favor, faça o login com seu e-mail novamente.');
                history.push(`${baseUrlProtected}`);    
                break;            
              default:
                console.error('Erro:', error);
            }
            
          });
      }
    }
    else {
      console.log('Falha loginlink.')
    }}
  }, [baseUrl, history]); // Dependências para evitar loops infinitos

  return (
    <Layout title="Hello" description="Hello React Page">
    <div>
      <div className="container">
        <div className="loginContainer">
          <center>
          <br />
          <h2 className="title">Verificando licença para acesso ao guia...</h2>
          </center>
          </div>
      </div>
    </div>
    </Layout>
  );
}