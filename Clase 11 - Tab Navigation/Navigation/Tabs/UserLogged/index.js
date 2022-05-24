import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../Styles/colors'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ShopNavigator from '../../Stacks/Shop'
import CartStack from '../../Stacks/Cart'

const BottomTabs = createBottomTabNavigator()

const TabNavigatorLogged = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
        name = "ShopTab"
        component={ShopNavigator}
      />
      <BottomTabs.Screen
        name = "CartTab"
        component={CartStack}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigatorLogged

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: colors.shadowTab,
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})