import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";


export default function ProductNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Products" component={ProductsScreen}  />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}  />
        </Stack.Navigator>
    );
};