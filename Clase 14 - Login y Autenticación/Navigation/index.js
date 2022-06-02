import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigatorLogged from './Tabs/UserLogged'
import LoginScreen from '../Screens/LoginScreen'
import AuthStack from './Stacks/Auth'
import { useSelector } from 'react-redux'

const MainNavigator = () => {

  const {user} = useSelector(state => state.auth.value)

  console.log(user);

  return (
    <NavigationContainer>
      {false ?
        <TabNavigatorLogged />
        :
        <AuthStack />
      }
    </NavigationContainer>
  )
}

export default MainNavigator