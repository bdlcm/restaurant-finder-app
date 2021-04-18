import React, { useState } from 'react';
import {Text} from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from './src/infrastructure/theme';
 import { ThemeProvider } from 'styled-components';
 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


 import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';
 
const isAndroid = Platform.OS === 'android';

const Tab = createBottomTabNavigator();
const Settings = () =><Text>Settings</Text>
const Map = () =><Text>Map</Text>


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
   <NavigationContainer>
   <Tab.Navigator>
    <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
    <Tab.Screen name="Settings" component={Settings} />
    <Tab.Screen name="Map" component={Map} />

  </Tab.Navigator>
   </NavigationContainer>

    </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
    

  );

   }

