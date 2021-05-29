import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { CompactView } from "../restaurant/compact-view.component";
import { Spacer } from "../spacer/spacer.component";

const FavesWrapper = styled.View`
  padding: 10px;
`;

export const FavoritesBar = ({ favorites, navigation }) => {
  //   const { favorites } = useContext(FavoritesContext);
  if (!favorites.length) {
    return null;
  }
  return (
    <FavesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
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
