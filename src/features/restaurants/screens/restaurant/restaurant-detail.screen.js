import React, { useState } from "react";
import { SafeArea } from "../../../../components/utility/safe-area.components";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantsInfoCard } from "../../components/restaurant/restaurant-info-card.component";
import { colors } from "../../../../infrastructure/theme/colors";

export const RestaurantsDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          theme={{ colors: { primary: colors.brand.secondary } }}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Pancakes" />
          <List.Item title="Waffles" />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { primary: colors.brand.secondary } }}
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="pizza" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Pizza" />
          <List.Item title="Cheeseburger" />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { primary: colors.brand.secondary } }}
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Ravioli" />
          <List.Item title="Roasted Chicken" />
        </List.Accordion>
        <List.Accordion
          theme={{ colors: { primary: colors.brand.secondary } }}
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Red Wine" />
          <List.Item title="Coke Zero" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
