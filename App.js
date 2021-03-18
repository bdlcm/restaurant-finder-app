import React, { useState } from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, Text, View, StyleSheet, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';
import { Searchbar } from 'react-native-paper';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm

const isAndroid = Platform.OS === 'android';


export default function App() {

   return (
    <>
      <SafeAreaView style={styles.container}>
        <View  style={styles.search}>
     <Searchbar></Searchbar>
        </View>
    
        <View style={styles.list}>
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
    flex: 1, marginTop: StatusBar.currentHeight
  },
  search: {
     padding: 16,  
  },
  list: {
    flex: 1, padding: 16, backgroundColor: "blue" 
  },
});
