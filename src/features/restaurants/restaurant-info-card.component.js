import React, { useContext, useEffect } from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { Spacer } from "../../components/spacer/spacer.component";
import { Text } from "../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  OpenIcon,
  Section,
} from "./restaurant-info-card-styles.component";
import { Favorites } from "../favorites/favorites.component";
import { View } from "react-native";

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));
  const mockImages = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-baking-600x750.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/02/messy-pizza-on-a-black-table-600x400.jpg",
    "https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking-600x400.jpg",
  ];

  return (
    <RestaurantCard elevation={2}>
      <View>
        <Favorites restaurant={restaurant} />

        {restaurant.photos[0] ? (
          <RestaurantCardCover
            source={{
              uri:
                //mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
                restaurant.photos[0],
            }}
          />
        ) : (
          <RestaurantCardCover
            source={{
              uri:
                "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
            }}
          />
        )}
      </View>
      <Info>
        <Text variant="label">{restaurant.name}</Text>
        <Section>
          <OpenIcon>
            {restaurant.isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {restaurant.isOpenNow && (
                <SvgXml xml={open} height={20} width={20} marginLeft={10} />
              )}
            </Spacer>
          </OpenIcon>

          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${restaurant.placeId}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
        </Section>

        <Address>{restaurant.vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
