import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutinesScreen from "../screens/routines/RoutinesScreen";
import AddRoutineScreen from "../screens/routines/AddRoutineScreen";
import RoutineDetailsScreen from "../screens/routines/RoutineDetailsScreen";
import EditRoutineScreen from "../screens/routines/EditRoutineScreen";

export default function RoutineNavigator({navigation}) {
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
                    headerTitleStyle: {fontSize: 20},
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
                    headerTitleStyle: {fontSize: 20},
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
                    headerTitleStyle: {fontSize: 20},
                    headerBackVisible: true,
                    headerBackButtonDisplayMode: 'minimal'
                }}
            />
        </Stack.Navigator>
    );
};