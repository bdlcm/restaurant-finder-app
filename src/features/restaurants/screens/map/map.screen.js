import React, { useContext, useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LocationContext } from "../../../../services/location/location.context";
import { useEffect } from "react/cjs/react.development";
import { Marker } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../../components/map/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => (
  // const { location } = useContext(LocationContext);

  <>
    <Search />
    <Map
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </>
);
