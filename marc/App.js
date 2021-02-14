import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/header/Header'

import StartPage from "./components/StartPage/StartPage"
import SignUpPage from "./components/SignUp/SignUpPage"
import WelcomePage from "./components/Welcome/WelcomePage"
import AddDancePage from "./components/Welcome/AddDancePage"
import DanceList from "./components/Welcome/DanceList"
import DancePressed from "./components/Welcome/DancePressed"




const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartPage" component={StartPage} options={{headerTitle : props => <Header text="Login"/>}}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{headerTitle : props => <Header text="Sign up"/>}}/>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerTitle : props => <Header text="Welcome"/>}}/>
        <Stack.Screen name="AddDancePage" component={AddDancePage} options={{headerTitle : props => <Header text="Add dance move"/>}}/>
        <Stack.Screen name="DanceList" component={DanceList} options={{headerTitle : props => <Header text="List of dance moves"/>}}/>
        <Stack.Screen name="DancePressed" component={DancePressed} options={{headerTitle : props => <Header text="Edit or delete"/>}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


