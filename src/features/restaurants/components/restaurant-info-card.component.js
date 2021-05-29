import React, { useContext } from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  OpenIcon,
  Section,
} from "../components/restaurant-info-card-styles.component";
import { Favorites } from "../../../components/favorites/favorites.component";
import { View } from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Pizzare",

    photos = [
      "https://thumb.tildacdn.com/tild3564-3039-4366-b464-666535626662/-/format/webp/pizza.png",
    ],
    vicinity = "Dunckerstrasse",
    isOpenNow = true,
    rating = 4,
    placeId,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <View>
        <Favorites restaurant={restaurant} />

        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>

          <OpenIcon>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && (
                <SvgXml xml={open} height={20} width={20} marginLeft={10} />
              )}
            </Spacer>
          </OpenIcon>
        </Section>

        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
