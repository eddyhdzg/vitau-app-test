import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ButtonsPage, OthersPage} from "pages";
import { AuthParamList } from "./AuthParamList";
import { View, ActivityIndicator } from "react-native";

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

export const Routes: React.FC<RoutesProps> = ({}) => {
    const [loading,setLoading] = useState(true);
    if(loading){
        return (
            <View>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Buttons"
                headerMode="none"
             > 
                <Stack.Screen name="Buttons" component={ButtonsPage} />
                <Stack.Screen name="Others" component={OthersPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}