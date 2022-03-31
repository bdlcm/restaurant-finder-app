import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { FavButton } from "./favorite-bar-styles.component";

export const Favorites = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext
  );

  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavButton
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavButton>
  );
};
