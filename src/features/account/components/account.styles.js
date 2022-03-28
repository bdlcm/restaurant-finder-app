import styled from "styled-components/native";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AnimationWrapper = styled.View`
  width: 70%;
  height: 20%;
  position: absolute;
  top: 10px;
  margin: ${(props) => props.theme.space[4]};
`;

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/donuts3.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
`;

export const AccountVeil = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: 5px;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;
