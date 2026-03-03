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

import { useAuth } from '../../context/auth/useAuth';
import { validateRegisterCredentials } from '../../utils/validateRegisterCredentials';
import { styles } from '../../../styles';
import { Ionicons } from '@expo/vector-icons';


const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const { register, isLoading, error, clearError } = useAuth();

    const handleRegister = async () => {
        setErrors({});
        clearError();
        const { isValid, errors } = validateRegisterCredentials({ name, email, password, confirmPassword });
        
        if (!isValid) {
            setErrors(errors);
            return;
        } 

        await register(email, password, name)
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={currStyles.container}>
                <KeyboardAwareScrollView
                    contentContainerStyle={currStyles.scroll}
                    enableOnAndroid
                    extraScrollHeight={40}
                >

                    <Image
                        source={require("../../../assets/skienna_logo.png")}
                        style={currStyles.image}
                        resizeMode="cover"
                    />

                    <View style={currStyles.card}>
                        <Text style={currStyles.title}>Create Account</Text>

                        {error && (
                            <View style={styles.errorBanner}>
                                <Ionicons name="alert-circle" size={18} color="#DC2626" />
                                <Text style={styles.errorBannerText}>
                                    {error}
                                </Text>
                            </View>
                        )}

                        <View style={currStyles.inputContainer}>
                            <Text style={currStyles.label}>Name</Text>
                            <TextInput
                                placeholder="Rebecca"
                                placeholderTextColor="#aaa"
                                style={currStyles.input}
                                value={name}
                                onChangeText={setName}
                            />

                            {errors.name &&
                                <View style={styles.errorBanner}>
                                    <Ionicons name="alert-circle" size={20} color="#ef4444" />
                                    <Text style={styles.errorBannerText}>{errors.name}</Text>
                                </View>
                            }
                        </View>
                        <View style={currStyles.inputContainer}>
                            <Text style={currStyles.label}>Email</Text>
                            <TextInput
                                placeholder="you@email.com"
                                placeholderTextColor="#aaa"
                                style={currStyles.input}
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            {errors.email &&
                                <View style={styles.errorBanner}>
                                    <Ionicons name="alert-circle" size={20} color="#ef4444" />
                                    <Text style={styles.errorBannerText}>{errors.email}</Text>
                                </View>
                            }
                        </View>

                        <View style={currStyles.inputContainer}>
                            <Text style={currStyles.label}>Password</Text>
                            <TextInput
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                style={currStyles.input}
                                value={password}
                                onChangeText={setPassword}
                            />
                            {errors.password &&
                                <View style={styles.errorBanner}>
                                    <Ionicons name="alert-circle" size={20} color="#ef4444" />
                                    <Text style={styles.errorBannerText}>{errors.password}</Text>
                                </View>
                            }
                        </View>

                        <View style={currStyles.inputContainer}>
                            <Text style={currStyles.label}>Confirm Password</Text>
                            <TextInput
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                style={currStyles.input}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                            {errors.confirmPassword &&
                                <View style={styles.errorBanner}>
                                    <Ionicons name="alert-circle" size={20} color="#ef4444" />
                                    <Text style={styles.errorBannerText}>{errors.confirmPassword}</Text>
                                </View>
                            }
                        </View>

                        <TouchableOpacity style={currStyles.registerBtn} onPress={handleRegister}>
                            <Text style={currStyles.registerText1}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={currStyles.registerText}>
                                Already have an account? Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const currStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        padding: 20,
        paddingBottom: 100
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
    registerBtn: {
        backgroundColor: "#F39EB6",
        padding: 14,
        borderRadius: 12,
        marginTop: 10,
    },
    registerText1: {
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