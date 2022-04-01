import React, { useContext } from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { CompactView } from "../restaurants/compact-view.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import { FavesWrapper } from "./favorite-bar-styles.component";

export const FavoritesBar = ({ favorites, navigation }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavesWrapper elevation={3}>
      <Text style={{ paddingLeft: 20 }} variant="caption">
        Favorites
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant, i) => {
          const key = restaurant.placeId;
          return (
            <Spacer key={key} position="left" size="large">
              <TouchableOpacity
                onPress={() => {
                  navigation("RestaurantDetail", {
                    restaurant: restaurant,
                  });
                }}
              >
                <CompactView restaurant={restaurant} s />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavesWrapper>
  );
};
