import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screen/LoginScreen';
import OTPScreen from '../screen/LoginScreen/OTPScreen';
import SplashScreen from '../screen/SplashScreen';
import AppIntro from '../screen/AppIntro';
import CompleteProfile from '../screen/LoginScreen/CompleteProfile';

const RootStack = createNativeStackNavigator();
const RootNavigator = () => {
  const isLogin = false;
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <RootStack.Screen name="Drawer" component={DrawerNavigator} />
       
      ) : (
        <RootStack.Screen name="login" component={LoginNavigator} />
        
      )}
    </RootStack.Navigator>
  );
};

const LoginStack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <LoginStack.Navigator >
      <LoginStack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
      <LoginStack.Screen name="AppIntro" component={AppIntro} options={{headerShown: false}}/>
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <LoginStack.Screen name="Verification" component={OTPScreen} />
      <LoginStack.Screen name="Complete Profile" component={CompleteProfile} />
    </LoginStack.Navigator>
  );
};



export default RootNavigator;