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

import Layout from '@theme/Layout';

import "./styles.css";

export function Login() {
 

  return (

      <div>
        Escolha a forma de login que você usou ao liberar o acesso ao guia:
      </div>

 
      
 );
}


