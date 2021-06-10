import React from "react";
import { AccountButton, TextInput } from "../components/account.styles";

import {
  AccountBackground,
  AccountContainer,
  AccountVeil,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountVeil />
      <AccountContainer>
        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AccountButton>

        <AccountButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AccountButton>
      </AccountContainer>
    </AccountBackground>
  );
};
