import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutinesScreen from "../screens/routines/RoutinesScreen";
import AddRoutineScreen from "../screens/routines/AddRoutineScreen";
import RoutineDetailsScreen from "../screens/routines/RoutineDetailsScreen";
import EditRoutineScreen from "../screens/routines/EditRoutineScreen";
import ProductDetailsScreen from "../screens/products/ProductDetailsScreen";
import EditProductScreen from "../screens/products/EditProductScreen";

export default function RoutineNavigator() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Routine Stack Screen"
                component={RoutinesScreen}
            />
            <Stack.Screen
                name="Add Routine"
                component={AddRoutineScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: { fontSize: 20 },
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
            <Stack.Screen
                name="Routine Details"
                component={RoutineDetailsScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: { fontSize: 20 },
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
            <Stack.Screen
                name="Routine Edit"
                component={EditRoutineScreen}
                options={{
                    headerShown: true,
                    headerTintColor: '#F39EB6',
                    headerTitleStyle: { fontSize: 20 },
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />

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