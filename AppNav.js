import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./components/stacks/AuthStack";
import AppStack from "./components/stacks/AppStack";
import {ActivityIndicator, StatusBar, View} from "react-native";
import {AuthContext} from "./context/AuthContext";

export default function AppNav(){
    const {userToken, isLoading} = useContext(AuthContext)

    if (isLoading) {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    return(
        <NavigationContainer>
            <StatusBar style="dark"/>
            {userToken !== null ? <AppStack/> :
                <AuthStack/>
            }
        </NavigationContainer>
    )
}
