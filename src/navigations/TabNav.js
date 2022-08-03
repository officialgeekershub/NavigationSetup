import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerStack from './DrawerStack';
import MyBooking from '../screen/MyBooking';

const Tab = createBottomTabNavigator();

const DrawerNav = () => {
    return (
        <DrawerStack />
    );
}

function TabNav() {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='HomePage' component={DrawerNav} />
            <Tab.Screen name='MyBooking' component={MyBooking}/>
        </Tab.Navigator>

    )
}

export default TabNav;