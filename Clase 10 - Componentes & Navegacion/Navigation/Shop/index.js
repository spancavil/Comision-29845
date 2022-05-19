import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../../Screens/CategoriesScreen';
import ProductsScreen from '../../Screens/ProductsScreen';
import DetailScreen from '../../Screens/DetailScreen';
import { colors } from '../../Styles/colors';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories"
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
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={
            {
              title: "Categorías"
            }
          }
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ route }) => ({
            title: route.params.categoryTitle
          })
          }
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: "Detalle"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;

const styles = StyleSheet.create({})