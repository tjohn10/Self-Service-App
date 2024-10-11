import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/More/MoreScreen";

const Stack = createNativeStackNavigator()

export default function MoreStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center'
        }}>
            <Stack.Screen name="More" component={MoreScreen} />
        </Stack.Navigator>
    )
}
