import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { Ionicons } from "@expo/vector-icons";

import { Pressable } from "react-native";
import AddProductScreen from "../screens/AddProductScreen";

export default function ProductNavigator({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Products Stack Screen"
                component={ProductsScreen}
            />
            <Stack.Screen
                name="Product Details"
                component={ProductDetailsScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: {fontSize: 20},
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
            <Stack.Screen
                name="Add Product"
                component={AddProductScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: {fontSize: 20},
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
        </Stack.Navigator>
    );
};