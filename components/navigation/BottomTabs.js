import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "../stacks/HomeStack";
import ServicesStack from "../stacks/ServicesStack";
import MoreStack from "../stacks/MoreStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import MyABSSINStack from "../stacks/MyABSSINStack";
import {Image} from "react-native";
import agency from "../../assets/icons/government.png";
import React from "react";
import EntitiesStack from "../stacks/EntitiesStack";

const Tab = createBottomTabNavigator();

export default function BottomTabs(){
    return(
        <Tab.Navigator>

            <Tab.Screen
                name="Services"
                component={ServicesStack}
                options={{
                    tabBarLabel: 'Services',
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Ionicons name="albums-outline" color="#09893E" size={24}/>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={MyABSSINStack}
                options={{
                    tabBarLabel: 'My ABSSIN',
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Ionicons name="apps" color="#09893E" size={24}/>
                    )
                }}
            />
            {/*<Tab.Screen*/}
            {/*    name="Entities"*/}
            {/*    component={EntitiesStack}*/}
            {/*    options={{*/}
            {/*        tabBarLabel: 'Entities',*/}
            {/*        headerShown: false,*/}
            {/*        tabBarIcon: ({color}) => (*/}
            {/*            <Image style={{width: 24, height: 24}} source={agency}/>*/}
            {/*        )*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<Tab.Screen name="Services" component={ServicesStack} />*/}
            <Tab.Screen
                name="More"
                component={MoreStack}
                options={{
                    tabBarLabel: 'Support',
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <Ionicons name="chatbubble-ellipses" color="#09893E" size={24}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}
