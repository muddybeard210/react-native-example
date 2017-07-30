// Index.ios.js - place code in here for IOS!!!!!!

//Import a library to help create a componenet
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header.js';
// Create a componenet
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
