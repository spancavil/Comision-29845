import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigatorLogged from './Tabs/UserLogged'

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigatorLogged/>
    </NavigationContainer>
  )
}

export default MainNavigator