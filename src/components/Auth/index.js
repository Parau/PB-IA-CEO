// src/components/Auth/index.js

import React, { useEffect, useState } from "react";

import firebase from "firebase/compat/app";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { firebaseConfig } from "../../config/firebase-config";

import { Redirect, useLocation } from "@docusaurus/router";
import useBaseUrl from '@docusaurus/useBaseUrl';

import { Login } from "../Login";
import Loading from "../Loading";
import {
  BASE,
  LOGOUT_PATH,
  LOGIN_PATH,
  PROTECTED_PATHS,
} from "../../utils/constants";

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

export function AuthCheck({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const baseURL = useBaseUrl('/');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthLoading(false);
    });
  });

  const from = useLocation().pathname;
  
  if (authLoading) return <Loading />;

  if (user?.email) {
    if (from === LOGOUT_PATH) {
      //await signOut(auth);
      //console.log("LOGOUT->", user.email);
      return <Redirect to={baseURL} from={LOGOUT_PATH} />;
    } else if (from === LOGIN_PATH) return <Redirect to={BASE} from={from} />;
    return children;
  } else {
    if (from === LOGOUT_PATH) return <Redirect to={baseURL} from={LOGOUT_PATH} />;
    else if (PROTECTED_PATHS.filter((x) => from.includes(x)).length)
      return <Redirect to={baseURL+'login?p='+from} />
    //else if (from === LOGIN_PATH) return <Redirect to={baseURL+'p='+from} />;
    return children;
  }
}