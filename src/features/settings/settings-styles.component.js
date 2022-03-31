import styled from "styled-components";
import { List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export const SettingTransparentSafeArea = styled(SafeAreaView)`
  background-color: rgba(241, 240, 234, 0.2);
`;

export const SettingBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/donuts3.jpg"),
})`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(241, 240, 234, 0.5);
  margin: ${(props) => props.theme.space[1]};
  z-index: 99;
`;

export const SettingAvatarContainer = styled.View`
  align-items: center;
  z-index: 99;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[4]};
`;
