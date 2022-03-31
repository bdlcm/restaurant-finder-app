import React, { useState, useContext } from "react";
import { colors } from "../../../infrastructure/theme/colors";
import {
  AccountBackground,
  AccountVeil,
  AccountContainer,
  AccountButton,
  AuthInput,
} from "../../account/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator } from "react-native-paper";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const { onRegistration, isLoading, error } = useContext(
    AuthenticationContext
  );
  return (
    <AccountBackground>
      <AccountVeil />
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Repeat password"
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setRepeatPassword(p)}
          />
        </Spacer>
        {error && (
          <Spacer size="large">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AccountButton
              icon="mail"
              mode="contained"
              onPress={() => onRegistration(email, password, repeatPassword)}
            >
              Register
            </AccountButton>
          ) : (
            <ActivityIndicator animating={true} color={colors.brand.primary} />
          )}
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
