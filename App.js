import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

const isAndroid = Platform.OS === 'android';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Hello World");
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 16, backgroundColor: "blue" }} >
          <Text>
            Search
        </Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "red" }}>
          <Text>
            List
          </Text>
        </View>

      </SafeAreaView>
      <ExpoStatusBar style="auto" />

    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
