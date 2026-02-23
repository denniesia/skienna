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

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { register, isLoading, error, clearError } = useAuth();

    const handleRegister = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }

        await register(email, password, name)
        navigation.navigate('Today')
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
                        <Text style={styles.title}>Create Account</Text>

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                placeholder="Rebecca"
                                placeholderTextColor="#aaa"
                                style={styles.input}
                                value={name}
                                onChangeText={setName}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="you@email.com"
                                placeholderTextColor="#aaa"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
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

                        <View style={styles.inputContainer}>
                            <Text style={styles.label}>Confirm Password</Text>
                            <TextInput
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                style={styles.input}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </View>

                        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
                            <Text style={styles.loginText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={styles.registerText}>
                                Already have an account? Login
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


export default RegisterScreen;