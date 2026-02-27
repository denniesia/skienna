import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodayScreen from "../screens/TodayScreen";
import RoutineDetails from "../screens/routines/RoutineDetailsScreen";
import ProductDetailsScreen from "../screens/products/ProductDetailsScreen";
import EditProductScreen from "../screens/products/EditProductScreen";


export default function TodayNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Today" component={TodayScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Routine Details" component={RoutineDetails} options={{
                headerShown: true,
                headerTintColor: '#F39EB6',
                headerTitleStyle: { fontSize: 20, },
                headerBackVisible: true,
                headerBackButtonDisplayMode: 'minimal'
            }} />

            <Stack.Screen
                name="Product Details"
                component={ProductDetailsScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: { fontSize: 20 },
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
            <Stack.Screen
                name="Product Edit"
                component={EditProductScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: { fontSize: 20 },
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />

        </Stack.Navigator>
    );
};