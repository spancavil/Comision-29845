import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import CategoriesScreen from '../../../Screens/CategoriesScreen';
import ProductsScreen from '../../../Screens/ProductsScreen';
import DetailScreen from '../../../Screens/DetailScreen';
import { colors } from '../../../Styles/colors';
import Header from '../../../Components/Header';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
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
          // headerTransparent: true,
          // header: () => {
          //   return <Header/>
          // }
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
            title: route.params.categoryTitle,
            headerStyle: {
              backgroundColor: route.params.categoryTitle === "Ropa" ? colors.regularBlue :
                route.params.categoryTitle === "Electrónica" ? "black" :
                  colors.darkBlue
            }
          })
          }
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.productTitle,
            headerTintColor: 'red',
          })
          }
        />
      </Stack.Navigator>
  )
}

export default ShopNavigator;

const styles = StyleSheet.create({})