import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {HomeStackNavigator, BookingStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home1" component={HomeStackNavigator} />
        <Tab.Screen name="Booking" component={BookingStackNavigator} />
      </Tab.Navigator>
    );
  };
  
  export default BottomTabNavigator;
