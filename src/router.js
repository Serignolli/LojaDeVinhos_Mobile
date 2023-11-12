import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import Detail from "./pages/Detail/detail";
import Home from "./pages/Home";
import Harvest from "./pages/specific/harvest";
import Nationality from "./pages/specific/nationality";

const stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen
                name="Home"
                component={Home}
                option={{headerShows: false}}
                />
                <stack.Screen
                name="Detail"
                component={Detail}
                option={{headerShows: false}}
                />
                <stack.Screen
                name="Nationality"
                component={Nationality}
                option={{headerShows: false}}
                />
                <stack.Screen
                name="Harvest"
                component={Harvest}
                option={{headerShows: false}}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;