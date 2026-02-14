import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodayNavigator from "./TodayNavigator";

import RoutinesScreen from "../screens/routines/RoutinesScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Ionicons from '@expo/vector-icons/Ionicons';
import ProductNavigator from "./ProductNavigator";
import RoutineNavigator from "./RoutineNavigator";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
      
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#E68BBE',
                tabBarInactiveTintColor: '#aaa',
                headerShown: false
            }}
        >
            <Tabs.Screen 
                name="Today" 
                component={TodayNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="today-outline" size={size} color={color} />,
                   
                }}
               
            />
            <Tabs.Screen 
                name="Products"
                component={ProductNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="cube-outline" size={size} color={color} />,

                }}
            />
            <Tabs.Screen 
                name="Routines" 
                component={RoutineNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />,
                }}
            />
            <Tabs.Screen 
                name="Profile" 
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
                }}
            />
        </Tabs.Navigator>

        );
};