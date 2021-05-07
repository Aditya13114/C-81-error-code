import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomSideBarMenu from './CustomSideBarMenu';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator= createDrawerNavigator({
    Home: {
        screen: AppTabNavigator
    },

    Setting: {
        screen: SettingScreen
    },
},
    {
        contentComponent: CustomSideBarMenu
    },
    {
        initialRouteName: 'Home' 
    }



)

