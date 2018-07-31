import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import HomeStack from './HomeStack'
import Ionicons from "react-native-vector-icons/Ionicons"
import Logo from '../assets/images/logo.png'
import SubmitProductPage from "./SubmitProductStack"

const iconMap = {
    Home: 'ios-home',
    Submit: 'ios-paper-plane'
}

export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Submit: SubmitProductPage
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state
                const iconName = iconMap[routeName] || 'ios-information'

                if (routeName === 'Home') {
                    return <Image
                        style={{width: 20, height: 20}}
                        source={Logo}/>
                }

                return <Ionicons name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#da552f',
            inactiveTintColor: '#999',
        },
    }
)