import React from 'react'
import { AuthProvider } from './AuthProvider';
import { Routes } from 'navigation/index';

interface ProviderNavigationProps {

}

export const ProviderNavigation: React.FC<ProviderNavigationProps> = ({}) => {
        return (
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        );
}