import React from 'react'
import {createSwitchNavigator} from 'react-navigation'
import AppStack from "./src/components/AppStack"
import AuthLoading from "./src/components/AuthLoading"
import AuthStack from "./src/components/AuthStack"

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading'
    }
)