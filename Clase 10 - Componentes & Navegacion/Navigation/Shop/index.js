import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import ProductsScreen from '../../Screens/ProductsScreen';
import DetailScreen from '../../Screens/DetailScreen';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories"
            screenOptions={{
                headerShown: false
            }}
        >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;

const styles = StyleSheet.create({})