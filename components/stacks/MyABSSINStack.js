import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import AllMyABSSINScreen from "../screens/abssin/AllMyABSSINScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Image} from "react-native";
import avatar from "../../assets/gamer.png";
import VehicleInformation from "../screens/abssin/VehicleInformationScreen";

const Stack = createNativeStackNavigator()

export default function MyABSSINStack({navigation}){
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
            ),
        }}>
            <Stack.Screen name="All" component={AllMyABSSINScreen} options={{
                headerTitle: 'My ABSSIN'
            }}/>
            <Stack.Screen name="Vehicle" component={VehicleInformation} options={{
                headerTitle: 'Vehicle Registration'
            }}/>
        </Stack.Navigator>
    )
}
