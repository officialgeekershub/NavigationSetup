import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import Profile from '../screen/Profile';

const Drawer = createDrawerNavigator();

function HomeNav() {
    return (
        <HomeStack />
    )
}

const DrawerStack  = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='HomePage' component={HomeNav}/>
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}
export default DrawerStack;