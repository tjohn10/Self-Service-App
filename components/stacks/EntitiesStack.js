import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Image} from "react-native";
import avatar from "../../assets/gamer.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import AllServicesScreens from "../screens/services/AllServicesScreens";
import AllEntitiesScreen from "../screens/Entities/AllEntitiesScreen";

const Stack = createNativeStackNavigator()
export default function EntitiesStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <Image
                    style={{width: 30, height: 30}}
                    source={avatar} />
            ),
            headerRight: () =>(
                <Ionicons
                    name="notifications"
                    color="#09893E" size={30}
                    onPress={() => navigation.navigate("")}
                />
            ),
        }}>
            <Stack.Screen name="All" component={AllEntitiesScreen} options={{
                headerTitle: 'Entities'
            }}/>
        </Stack.Navigator>
    )
}
