
import React from 'react'
import { View, Text } from 'react-native'
import { BottomTabNavigator } from './presentation/navigators/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'


export const Main = () => {
    return (

        <NavigationContainer>
            <BottomTabNavigator></BottomTabNavigator>
        </NavigationContainer>


    )
}
