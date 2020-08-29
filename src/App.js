import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';

const App = () => {

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({

});

export default App;


