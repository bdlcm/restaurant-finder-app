import React from "react";
import { Searchbar } from "react-native-paper";
import { RestaurantsInfo } from "../components/restaurant-info.component";

import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>

    <View style={styles.list}>
      <RestaurantsInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
