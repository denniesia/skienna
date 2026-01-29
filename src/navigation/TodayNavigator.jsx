import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodayScreen from "../screens/TodayScreen";

export default function TodayNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Today" component={TodayScreen}  />
        </Stack.Navigator>
    );
};