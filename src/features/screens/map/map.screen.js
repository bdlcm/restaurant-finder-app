import React, { useContext, useState } from "react";
import MapView from "react-native-maps";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../../map/map-callout.component";
import { useEffect } from "react/cjs/react.development";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import styled from "styled-components/native";
import { View } from "react-native";
import { FavoritesBar } from "../../favorites/favorites-bar.component";
import { Search } from "../../map/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const FavoritesView = styled.View`
  position: absolute;
  bottom: 0%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const [latDelta, setLatDelta] = useState(0);
  const [currentFavorites, setFavorites] = useState([]);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  useEffect(() => {
    setFavorites(favorites);
  }, [favorites]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.01,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() => {
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant,
                  });
                }}
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}

        <FavoritesView>
          <FavoritesBar
            favorites={currentFavorites}
            navigation={navigation.navigate}
          />
        </FavoritesView>
      </Map>
    </>
  );
};
