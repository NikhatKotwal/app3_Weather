import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Country from "../screens/Country";
import Weather from "../screens/Weather";

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}

                />
                <Stack.Screen
                    name="Country"
                    component={Country}

                />
                <Stack.Screen
                    name="Weather"
                    component={Weather}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;