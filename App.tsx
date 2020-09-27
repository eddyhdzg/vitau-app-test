import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { ThemeProvider } from "theme";
import { ButtonsPage, OthersPage } from "pages";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
     initialRouteName="Home"
     headerMode="none"
    > 
      <Stack.Screen name="Home" component={ButtonsPage} />
      <Stack.Screen name="Others" component={OthersPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
       {/*  <ButtonsPage /> */}
       {/* <OthersPage/> */}
          <NavigationContainer>
             <MyStack />
          </NavigationContainer>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}



