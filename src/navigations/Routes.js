import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import TabNav from "./TabNav";

export default function Routes() {
    const isLogin = false;
    return (
        <NavigationContainer>
            {isLogin ? <TabNav/> : <AuthStack/> } 
        </NavigationContainer>
    );
}

