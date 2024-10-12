import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/More/MoreScreen";
import {Image} from "react-native";
import avatar from "../../assets/gamer.png";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator()

export default function MoreStack({navigation}){
    return(
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <Image
                    style={{width: 30, height: 30}}
                    source={avatar} />
            ),
            headerRight: ({color}) =>(
                <Ionicons
                    name="notifications"
                    color="#09893E" size={30}
                    onPress={() => navigation.navigate("")}
                />
            )
        }}>
            <Stack.Screen name="More" component={MoreScreen} options={{
                headerTitle: 'Support'
            }} />
        </Stack.Navigator>
    )
}
