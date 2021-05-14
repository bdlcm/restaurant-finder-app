/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { FlatList, View } from "react-native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { Search } from "../components/search.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.blue300}
          />
        </View>
      )}
      <Search />

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantsInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
