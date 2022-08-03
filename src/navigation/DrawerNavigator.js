import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screen/Profile';

// const Drawer = createDrawerNavigator();


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name='Profile' component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;