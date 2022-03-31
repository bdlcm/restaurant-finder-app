import React, { useState, useContext } from "react";
import { SafeArea } from "../../../settings/utility/safe-area.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AccountButton } from "../../account/components/account.styles";

export const SettingsScreen = ({ route }) => {
  const { onLogOut } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AccountButton
        icon="lock-open-outline"
        mode="contained"
        onPress={() => onLogOut()}
      >
        Log Out
      </AccountButton>
    </SafeArea>
  );
};
