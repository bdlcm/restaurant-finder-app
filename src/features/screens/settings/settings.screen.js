import React, { useContext } from "react";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Avatar, List } from "react-native-paper";
import {
  SettingItem,
  SettingAvatarContainer,
  SettingBackground,
} from "../settings/components/settings-styles.component";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AccountVeil } from "../../account/components/account.styles";

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);

  return (
    <SettingBackground>
      <AccountVeil>
        <SafeArea>
          <SettingAvatarContainer>
            <Avatar.Icon size={120} icon={"human"} />
            <Spacer position="top" size="large">
              <Text variant="caption">{user.email}</Text>
            </Spacer>
          </SettingAvatarContainer>

          <List.Section>
            <SettingItem
              title="Favourites"
              description="View your favourites"
              left={(props) => (
                <List.Icon {...props} color="black" icon="heart" />
              )}
              onPress={() => navigation.navigate("Favourites")}
            />

            <SettingItem
              title="Log out"
              left={(props) => (
                <List.Icon {...props} color="black" icon="lock-open-outline" />
              )}
              onPress={() => onLogOut()}
            />
          </List.Section>
        </SafeArea>
      </AccountVeil>
    </SettingBackground>
  );
};
