import { List } from "react-native-paper";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import styled from "styled-components/native";

export const Accordion = styled(List.Accordion).attrs(
  
 
)`
  color: ${(props) => props.theme.colors.brand.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
  
`;
