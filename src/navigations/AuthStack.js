import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screen/LoginScreen';
import OTPScreen from '../screen/LoginScreen/OTPScreen';
import SplashScreen from '../screen/SplashScreen';
import AppIntro from '../screen/AppIntro';
import CompleteProfile from '../screen/LoginScreen/CompleteProfile';
import HomeStack from '../navigations/HomeStack';
import TabNav from '../navigations/TabNav';

const LoginStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="AppIntro"
        component={AppIntro}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <LoginStack.Screen name="Verification" component={OTPScreen} />
      <LoginStack.Screen name="Complete Profile" component={CompleteProfile} />
      <LoginStack.Screen name='HomeTack' component={TabNav} options={{headerShown:false}}/>
    </LoginStack.Navigator>
  );
};

export default AuthStack;