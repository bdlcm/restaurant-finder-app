import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

 import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBUvSVIpUZCykYvSJk_5X3UxO_Ji31zRNg",
  authDomain: "mobile-app-2e4bb.firebaseapp.com",
  projectId: "mobile-app-2e4bb",
  storageBucket: "mobile-app-2e4bb.appspot.com",
  messagingSenderId: "669833080773",
  appId: "1:669833080773:web:28bbd71cb6e63eb07e65ac"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
                <Navigation />     
          </AuthenticationContextProvider>
       </ThemeProvider>
      <ExpoStatusBar  />
    </>
  );
}