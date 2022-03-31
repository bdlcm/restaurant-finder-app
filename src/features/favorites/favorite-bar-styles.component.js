import styled from "styled-components";
import { Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";

export const FavesWrapper = styled(Card)`
  z-index: 999;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const FavButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 10;
`;

export const FavoritesView = styled.View`
  position: absolute;
  bottom: 0%;
  width: 100%;
`;
