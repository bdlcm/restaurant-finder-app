import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/screens/restaurant/restaurants.screen";
import { RestaurantsDetailScreen } from "../../features/screens/restaurant/restaurant-detail.screen";
const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantsDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
