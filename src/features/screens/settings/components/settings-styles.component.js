import styled from "styled-components";
import { List } from "react-native-paper";
import { View } from "react-native-web";



 

// export const SettingBackground = styled.ImageBackground.attrs({
//   source: require("../../../../../assets/donuts3.jpg"),
// })`
//   flex: 1;
//   z-index: 1;
 
// `;
export const SettingBackground = styled.ImageBackground`

 
`;

export const SettingItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  z-index: 99;
`;

export const SettingAvatarContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[4]};
 
`;
