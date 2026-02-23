import { createContext, useEffect, useState } from "react";
import { authService } from "../../services";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";

export const AuthContext = createContext({
    isLoading: false,
    isAuthenticated: false,
    error: null,
    user: null,
    
    login: async (email, password) => { },
    register: async (email, password, name) => { },
    
    logout: () => { },
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);


   const login = async (email, password) => {
        try {
            setIsLoading(true);
            const loggedInUser = await authService.login(email, password);
            setUser(loggedInUser);
        } catch (err) {
            setError(err.message || "Login failed");
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        await auth.signOut();
        setUser(null);
    };

    const register = async(email, password, name) => {
        try {
            setIsLoading(true);
            const user = await authService.register(email, password, name);
            setUser(user);
        } catch (err) {
            setError(err.message || 'An error occurred during registration');
        } finally {
            setIsLoading(false);
        }
    }


    const contextValue = {
        user,
        isAuthenticated: !!user,
        isLoading,
        error,
        login,
        logout,
        register,
    };


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};