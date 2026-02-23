import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";
import { useAuth } from "../context/auth/useAuth";
import { ActivityIndicator } from "react-native";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
    const { isAuthenticated, isLoading } = useAuth();

    // if (isLoading) {
    //     return (
    //          <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
    //     )
    // }

    return (
     
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated 
                ? (<Stack.Screen name="App" component={AppNavigator} />) 
                : (<Stack.Screen name="Auth" component={AuthNavigator} />)
            }
        </Stack.Navigator>

    );
}