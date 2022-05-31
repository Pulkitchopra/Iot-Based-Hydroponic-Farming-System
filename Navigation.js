import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import SignUpScreen from './screens/SignUpScreen'
import WelcomeScreen from './WelcomeScreen'
import HomeScreen from './home/HomeScreen'
import Header from './home/Header'
import Values from './home/Values'
import Tabs from './home/Tabs'
import AddSystem from './home/AddSystem'


const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false,
}

const SignedInStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName='HomeScreen'
        screenOptions={screenOptions}>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='Header' component={Header} />
        <Stack.Screen name='Values' component={Values} />
        <Stack.Screen name='Tabs' component={Tabs} />
        <Stack.Screen name='AddSystem' component={AddSystem} />
       
      </Stack.Navigator>
    </NavigationContainer>

  )
}

 const SignedOutStack = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName='WelcomeScreen'
        screenOptions={screenOptions}
      >
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
export {SignedInStack , SignedOutStack}
