import React, { useState } from 'react';
import {Text} from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from './src/infrastructure/theme';
 import { ThemeProvider } from 'styled-components';
 import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SafeArea} from  './src/components/utility/safe-area.components';
import {Ionicons} from '@expo/vector-icons';
import {RestaurantsContextProvider} from "./src/services/restaurants/restaurants.context";
import {LocationContextProvider} from "./src/services/location/location.context";

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
const Settings = () =><SafeArea><Text>Settings</Text></SafeArea>
const Map = () =><SafeArea><Text>Map</Text></SafeArea>


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
<LocationContextProvider>

<RestaurantsContextProvider>

<NavigationContainer>
   <Tab.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Restaurants') {
        iconName = focused
          ? 'ios-restaurant'
          : 'ios-restaurant-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
      }

      else if (route.name === 'Map') {
        iconName = focused ? 'ios-map' : 'ios-map-outline';
      }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }}
   
   
   >
    <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
 
    <Tab.Screen name="Map" component={Map} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
   </NavigationContainer>

</RestaurantsContextProvider>
</LocationContextProvider>

 
    </ThemeProvider>
      <ExpoStatusBar style="auto" />

    </>
    

  );

   }

