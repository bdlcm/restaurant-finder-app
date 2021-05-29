/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { FlatList, View } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { Search } from "../components/search.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Spacer } from "../../../components/spacer/spacer.component";
 
const LowerTouchableOpacity = styled(TouchableOpacity)`
  z-index: 2;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [expanded, setExpanded] = React.useState(true);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

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
      <Search isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />

      {isToggled && (
        <FavoritesBar favorites={favorites} navigation={navigation.navigate} />
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <LowerTouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantsInfoCard restaurant={item} />
              </Spacer>
            </LowerTouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
