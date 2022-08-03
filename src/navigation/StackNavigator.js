import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import AppIntro from '../screen/AppIntro';
import OTPScreen from '../screen/LoginScreen/OTPScreen';
import CompleteProfile from '../screen/LoginScreen/CompleteProfile';
import HomeScreen from '../screen/HomeScreen';
import Profile from '../screen/Profile';
import MyBooking from '../screen/MyBooking';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const BookingStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MyBooking" component={MyBooking} />
        
      </Stack.Navigator>
    );
  };



export { HomeStackNavigator, BookingStackNavigator};
