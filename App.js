import React, { useState } from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

const isAndroid = Platform.OS === 'android';


export default function App() {

   return (
    <>
<RestaurantsScreen />
      <ExpoStatusBar style="auto" />

    </>
    

  );
}


