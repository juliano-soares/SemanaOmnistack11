import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Datail from './pages/datail';
import Incidents from "./pages/incidents";
const AppStack = createStackNavigator();

export default function Routes() {
    return  (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={Incidents}/>
                <AppStack.Screen name="Detail" component={Datail}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}