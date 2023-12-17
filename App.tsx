import {StyleSheet, View, Text} from 'react-native';
import React from 'react';

import Login from './screen/Login';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Auth/Auth';

const App = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // You might not need these styling properties in SafeAreaProvider
    justifyContent: 'center',
    alignItems: 'center',
  },
});
