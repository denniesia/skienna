import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoutinesScreen from "../screens/routines/RoutinesScreen";
import AddRoutineScreen from "../screens/routines/AddRoutineScreen";

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

           

        </Stack.Navigator>
    );
};