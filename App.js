import React from 'react';
import {LogBox } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import Routes from './src/navigations/Routes';


LogBox.ignoreLogs(['Reanimated 2']);


const App = () => {
  return (
    <Routes />
  );
};


export default App;