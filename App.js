import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {

  [currentScreen,setCurrentScreen]=useState('Login')
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
      name="Login"
      component={currentScreen == 'Login' ? Login : Home} // Вибір компонента в залежності від поточного екрану
      options={{ headerShown: false }}
    /> 
    {props=><Login setCurrentScreen={setCurrentScreen}/>}
             </Stack.Navigator>
    </NavigationContainer>
  );
}
export const  onLoginSuccess = () => {
  setCurrentScreen('Home'); 
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
