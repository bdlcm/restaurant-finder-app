import React, { useContext } from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { TouchableOpacity, ScrollView } from "react-native";
import { CompactView } from "../restaurant/compact-view.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
 
const FavesWrapper = styled(Card)`
  z-index: 999;
  padding: 10px;
   background-color: rgba(255, 255, 255, 0.3);
`;

export const FavoritesBar = ({ favorites, navigation }) => {
  //   const { favorites } = useContext(FavoritesContext);
  if (!favorites.length) {
    return null;
  }
  return (
    <FavesWrapper elevation={3}>
      <Text style={{ paddingLeft: 20 }} variant="caption">
        Favorites
      </Text>

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
