import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodayNavigator from "./TodayNavigator";
import ProductsScreen from "../screens/ProductsScreen";
import RoutinesScreen from "../screens/RoutinesScreen";
import ProfileScreen from "../screens/ProfileScreen";

export default function RootNavigator() {
    const Tabs = createBottomTabNavigator();

    return (
      
        <Tabs.Navigator>
            <Tabs.Screen name="Today" component={TodayNavigator}/>
            <Tabs.Screen name="Products" component={ProductsScreen}/>
            <Tabs.Screen name="Routines" component={RoutinesScreen}/>
            <Tabs.Screen name="Profile" component={ProfileScreen}/>
        </Tabs.Navigator>

        );
};