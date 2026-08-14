import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (accessToken: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(() =>
        localStorage.getItem('accessToken')
    );

    const login = (accessToken: string) => {
        localStorage.setItem('accessToken', accessToken);
        setToken(accessToken);
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        // Опціонально: можна також зробити запит на бекенд для видалення httpOnly cookie
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, isAuthenticated: !!token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
