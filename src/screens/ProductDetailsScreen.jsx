import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function ProductDetailsScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView>


                <View>
                    <Text>
                        Products Details Screen
                    </Text>
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
};