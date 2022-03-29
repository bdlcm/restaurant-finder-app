/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantList } from "../../restaurants/components/restaurant/restaurant-list-styles.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";

import { Search } from "../../restaurants/components/search.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurant/restaurant-info-card.component";
import { TouchableOpacity, View } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { FadeInView } from "../../../components/animations/fade-in-view.animation";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
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
      <RestaurantList
        data={restaurants}
        extr
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
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
