import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import HomeScreen from '../screens/HomeScreen'
import MapScreen from '../screens/MapScreen'
import StatView from '../screens/StatView'


const TabNav = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="list" size={35} color="purple" />
        },
    },
    MapScreen: {
        screen: MapScreen,
        navigationOptions: {
            tabBarLabel: 'Map',
            tabBarIcon: () => <Icon name="navigation" size={35} color="purple" />
        },
    },
    // StatView: {
    //     screen: StatView,
    //     navigationOptions: {
    //         tabBarLabel: 'Stats',
    //         tabBarIcon: () => <Icon name="map" size={35} color="purple" />
    //     },
    // }
})

export default TabNav
