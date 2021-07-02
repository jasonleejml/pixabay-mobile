import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './src/AppContext';

import Router from './src/navigation/Router';

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
