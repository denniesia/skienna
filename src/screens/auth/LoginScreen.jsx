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
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/auth/useAuth';
import { validateLoginCredentials } from '../../utils/validateLoginCredentials';
import { styles } from '../../../styles';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { login, error, isLoading, clearError } = useAuth();
    const navigation = useNavigation();

    const handleLogin = async () => {
        setErrors({});
        clearError();
        const { isValid, errors } = validateLoginCredentials({ password, email })

        if (!isValid) {
            setErrors(errors);
            return;
        }
        await login(email, password);

    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={curStyles.container}>
                <KeyboardAwareScrollView
                    contentContainerStyle={styles.scroll}
                    enableOnAndroid
                    extraScrollHeight={20}
                >
                    <Image
                        source={require("../../../assets/skienna_logo.png")}
                        style={curStyles.image}
                        resizeMode="cover"
                    />

                    <View style={curStyles.card}>
                        <Text style={curStyles.title}>Welcome Back </Text>

                        {error && (
                            <View style={styles.errorBanner}>
                                <Ionicons name="alert-circle" size={18} color="#DC2626" />
                                <Text style={styles.errorBannerText}>
                                    {error}
                                </Text>
                            </View>
                        )}

                        <View style={curStyles.inputContainer}>
                            <Text style={curStyles.label}>Email</Text>
                            <TextInput
                                placeholder="you@email.com"
                                placeholderTextColor="#aaa"
                                style={curStyles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                            {errors.email &&
                                <View style={styles.errorBanner}>
                                    <Ionicons name="alert-circle" size={20} color="#ef4444" />
                                    <Text style={styles.errorBannerText}>{errors.email}</Text>
                                </View>
                            }
                        </View>

                        <View style={curStyles.inputContainer}>
                            <Text style={curStyles.label}>Password</Text>
                            <TextInput
                                placeholder="••••••••"
                                placeholderTextColor="#aaa"
                                secureTextEntry
                                style={curStyles.input}
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

                        <TouchableOpacity style={curStyles.loginBtn} onPress={handleLogin}>
                            <Text style={curStyles.loginText}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}
                        >
                            <Text style={curStyles.registerText}>
                                Don't have an account? Sign up
                            </Text>
                        </TouchableOpacity>
                        <View style={curStyles.demoInfo}>
                            <Text style={curStyles.demoTitle}>Demo Account:</Text>
                            <Text style={curStyles.demoText}>demo@example.com / password1</Text>
                        </View>
                    </View>


                </KeyboardAwareScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

const curStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
    demoInfo: {
        marginTop: 40,
        padding: 16,
        backgroundColor: '#f8fafc',
        borderRadius: 12,
        alignItems: 'center',
    },
    demoTitle: {
        fontSize: 12,
        color: "#F39EB6",
        fontWeight: '600',
        marginBottom: 4,
    },
    demoText: {
        fontSize: 13,
        color:  "#F39EB6",
    },

});


export default LoginScreen;