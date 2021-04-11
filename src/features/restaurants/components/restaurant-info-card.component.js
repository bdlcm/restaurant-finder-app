import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};

  color: ${(props) => props.theme.colors.ui.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const OpenIcon = styled(View)`
  flex: 1;

  flex-direction: row;
  justify-content: flex-end;
`;
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Pizzare",
    icon,
    photos = [
      "https://thumb.tildacdn.com/tild3564-3039-4366-b464-666535626662/-/format/webp/pizza.png",
    ],
    address = "Dunckerstrasse 8",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} height={20} width={20} />
            ))}
          </Rating>

          <OpenIcon>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && (
              <SvgXml xml={open} height={20} width={20} marginLeft={10} />
            )}
          </OpenIcon>
        </Section>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
