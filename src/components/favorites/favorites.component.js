import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavoritesContext } from "../../services/favorites/favorites.context";

const FavButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 10;
`;

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
