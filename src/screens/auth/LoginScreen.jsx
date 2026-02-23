import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    Image

} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/auth/useAuth';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useAuth();
    const navigation = useNavigation();

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }

        await login(email, password)

    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.scroll}
                    enableOnAndroid
                    extraScrollHeight={20}
                >
                    <Image
                        source={require("../../../assets/skienna_logo.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />

                    <View style={styles.card}>
                        <Text style={styles.title}>Welcome Back </Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="you@email.com"
                                placeholderTextColor="#aaa"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                style={styles.input}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}
                        >
                            <Text style={styles.registerText}>
                                Don't have an account? Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>


                </KeyboardAwareScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
    },
    image: {
        width: "160%",
        height: '140',
        alignSelf: "center",
        marginLeft: -20,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20,


        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
    },
    title: {
        fontSize: 26,
        fontWeight: "700",
        color: "#FE71A4",
        textAlign: "center",
        marginBottom: 25,
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        color: "#FF69B4",
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: "#F2BED1",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
    },
    loginBtn: {
        backgroundColor: "#F39EB6",
        padding: 14,
        borderRadius: 12,
        marginTop: 10,
    },
    loginText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
    },
    registerText: {
        textAlign: "center",
        marginTop: 18,
        color: "#f376b4",
        fontWeight: "600",
    },
});


export default LoginScreen;