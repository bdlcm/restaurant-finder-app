/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from "react";
import { ActivityIndicator, Card, Colors } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { FlatList, View } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { Search } from "../components/search.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { colors } from "../../../infrastructure/theme/colors";

const LowerTouchableOpacity = styled(TouchableOpacity)`
  z-index: 2;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
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
            color={colors.brand.secondary}
          />
        </View>
      )}
      <Search isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />

      {isToggled && (
        <FavoritesBar favorites={favorites} navigation={navigation.navigate} />
      )}
      <FlatList
        data={restaurants}
        initialNumToRender={200}
        renderItem={({ item }) => {
          return (
            <LowerTouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <Card source={{ uri: item.photos[0] }} />
                <RestaurantsInfoCard
                  restaurant={item}
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                />
              </Spacer>
            </LowerTouchableOpacity>
          );
        }}
        keyExtractor={(item, i) => `${item.name}-${i}`}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
