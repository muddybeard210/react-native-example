// Index.ios.js - place code in here for IOS!!!!!!

//Import a library to help create a componenet
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';
// Create a componenet
const App = () => (
  <View>
    <Header headerText={'Albumz!'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
