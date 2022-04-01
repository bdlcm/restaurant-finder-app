/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantList } from "../../restaurants/restaurant-list-styles.component";
import { RestaurantsInfoCard } from "../../restaurants/restaurant-info-card.component";
import { TouchableOpacity, Text } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade-in-view.animation";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SafeArea>
      {favorites.length ? (
        <RestaurantList
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantsInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, i) => item.placeId}
        />
      ) : (
        <Text center> No favorites yet</Text>
      )}
    </SafeArea>
  );
};
