import React, { useState } from 'react';

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from './src/infrastructure/theme';
 import { ThemeProvider } from 'styled-components';
 import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
 import {LocationContextProvider} from "./src/services/location/location.context";
 import {FavoritesContextProvider} from "./src/services/favorites/favorites.context";

import {Navigation}  from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
 



export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded ||  !latoLoaded) {
    return null
  }
   return (
    <>
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
     <LocationContextProvider>
     
     <RestaurantsContextProvider>

       <Navigation />
    </RestaurantsContextProvider>
    </LocationContextProvider>
    </FavoritesContextProvider>
 
  </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
    

  );

   }

