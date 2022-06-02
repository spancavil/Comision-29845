import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../../../Styles/colors';
import LoginScreen from '../../../Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.darkBlue
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: "Koulen",
            fontSize: 28,
          },
          headerTitleAlign: "center",
          // headerTransparent: true,
          // header: () => {
          //   return <Header/>
          // }
        }}
      >
        <Stack.Screen
          name= "auth"
          component={LoginScreen}
          options={{
            title: "Auth"
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default AuthStack;

const styles = StyleSheet.create({})