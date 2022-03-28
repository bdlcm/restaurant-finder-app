import React from "react";
import { AccountButton } from "../components/account.styles";
import LottieView from "lottie-react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountVeil,
  AnimationWrapper,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountVeil />
      <AnimationWrapper>
        <LottieView
          key="animation"
          autoPlay
          resizeMode="cover"
          loop
          source={require("../../../../assets/pin.json")}
        />
      </AnimationWrapper>
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AccountButton>

        <AccountButton
          icon="mail"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  );
};
