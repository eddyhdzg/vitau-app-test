import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';


type User = {username?:string};

export const AuthContext = React.createContext< {
    user: User,
    login: () => void,
    logout: () => void}
    >({
        user: {},
        login: () => {},
        logout: () => {}
})

interface AuthProviderProps {}


export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User>({});
        return (
            <AuthContext.Provider 
                value={{
                    user,
                    login:() => {
                        const fakeUser = {username: "Pili"};
                        setUser(fakeUser);
                        AsyncStorage.setItem("user", JSON.stringify(fakeUser))
                    },
                    logout: () => {
                        AsyncStorage.removeItem("user")
                    }
                }}
            >
                {children}
            </AuthContext.Provider>
        );
}