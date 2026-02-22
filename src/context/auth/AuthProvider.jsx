import { createContext, useState } from "react";
import { authService } from "../../services";

export const AuthContext = createContext();

export  function AuthProvider({ children }) {
    const [auth, setAuth] = useState({
        user: null,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (email, password) => {
        try {
            setIsLoading(true);
            const user = await authService.login(email, password);
            setAuth({
                id: user.uid,
                email: user.email,
            });
        } catch (err) {
            setError(err.message || 'An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    }

    const contextValue = {
        isAuthenticated: !!auth.user,
        isLoading,
        error,
        login,
        logout: () => setUser(null),
    };


 return (
    <AuthContext.Provider value={{}}>
        {children}
    </AuthContext.Provider>
    );
};