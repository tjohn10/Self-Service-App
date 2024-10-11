import React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import HomeScreen from "../screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import favorite from '../../assets/icons/star.png'
import bill from '../../assets/icons/bill.png'
import agency from '../../assets/icons/government.png'
import {Dimensions, Image} from "react-native";
import BillsScreen from "../screens/services/BillsScreen";

const Tab = createMaterialTopTabNavigator()
export default function ServicesTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: true,
                tabBarStyle:{
                    height: 90,
                    width: Dimensions.get('screen').width - 60,
                    backgroundColor: 'inherit'
                },
                tabBarContentContainerStyle: {
                    height: 80,

                },
                tabBarIconStyle:{
                    backgroundColor: '#fff',
                    width: 40,
                    height: 40
                },
                tabBarLabelStyle:{
                    fontSize: 10,
                    fontWeight: '600',
                    textTransform: 'none',
                    marginBottom: 0
                }
            }}
        >
            <Tab.Screen name="Favourites" component={HomeScreen} options={{
                tabBarIcon: ({color}) => (
                    <Image style={{width: 40, height: 40}} source={favorite}/>
                )
            }}/>
            <Tab.Screen
                name="Bills"
                component={BillsScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Image style={{width: 40, height: 40}} source={bill}/>
                    )
                }}
            />
            <Tab.Screen
                name="Agency"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Image style={{width: 40, height: 40}} source={agency}/>
                    )
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name=""*/}
            {/*    component={HomeScreen}*/}
            {/*/>*/}
        </Tab.Navigator>
    )
}
