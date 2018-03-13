import React from 'react';
import {ToastAndroid} from 'react-native';
import {TabBarBottom, TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import About from './modules/dasboard/About';
import News from './modules/dasboard/News';
import Info from './modules/dasboard/Info';
import User from './modules/user/User';
import Header from './modules/common/Header';

export const DasboardTab = StackNavigator(
    {
        dasboard: {
            screen: Info
        },
        tambahPeristiwa: {
            screen: News
        }
    }
);


export const AboutTab = StackNavigator(
    {
        awal: {
            screen: About
        },
    },
    {
        lazy: false
    });

export const UserTab = StackNavigator(
    {
        user: {
            screen: User
        }
    }
)

export const Tabs =  TabNavigator(
    {
        Dasboard: {
            screen: DasboardTab,
            navigationOptions: {
                tabBarIcon: ({tintColor})=> <Icon name="ios-book-outline" size={32} color={tintColor} />
            }
        },
        Tentang:{
            screen: AboutTab,
            navigationOptions: {
                tabBarIcon: ({tintColor})=> <Icon name="ios-bulb-outline" size={32} color={tintColor} />
            }
        },
        User:{
            screen: UserTab,
            navigationOptions: {
                tabBarIcon: ({tintColor})=> <Icon name="ios-person-outline" size={32} color={tintColor} />
            }
        }
    },    
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        lazy: false,
        initialRouteName: "Dasboard",
    }
)
