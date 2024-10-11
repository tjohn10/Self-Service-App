import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "../screens/Auth/LoginScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen";
import ForgotAbssinScreen from "../screens/Auth/ForgotAbssinScreen";

const Stack = createNativeStackNavigator()

export default function AuthStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forgot Pass" component={ForgotPasswordScreen} />
            <Stack.Screen name="Retrieve Abssin" component={ForgotAbssinScreen} />
        </Stack.Navigator>
    )
}
