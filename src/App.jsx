import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import RootNavigator from '../src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/auth/AuthProvider';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <AuthProvider>
                <RootNavigator />
            </AuthProvider>
        </NavigationContainer>
    );
}
