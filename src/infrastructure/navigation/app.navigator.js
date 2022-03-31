import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantNavigator } from "./restaurant.navigator";
import { MapScreen } from "../../features/screens/map/map.screen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { SettingsNavigator } from "./settings.navigator";
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Restaurants") {
                iconName = "ios-restaurant";
              } else if (route.name === "Settings") {
                iconName = "ios-settings";
              } else if (route.name === "Map") {
                iconName = "ios-map";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#0079E0",
            inactiveTintColor: "#8fb7d9",
          }}
        >
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />

          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
