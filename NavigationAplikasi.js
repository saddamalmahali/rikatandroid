import React from 'react';
import {ToastAndroid} from 'react-native';
import {TabBarBottom, TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import About from './modules/dasboard/About';
import News from './modules/dasboard/News';
import SuksesTambah from './modules/dasboard/lapor/SuksesTambah';
import Info from './modules/dasboard/Info';
import User from './modules/user/User';
import Header from './modules/common/Header';
import Login from './modules/auth/Login';
import Register from './modules/auth/Register';
import Detile from './modules/dasboard/lapor/Detile';
export const AuthScreen = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions : {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions : {
            header: null
        }
    }
});

export const DasboardTab = StackNavigator(
    {
        screen1: {
            screen: Info
        },
        screen2: {
            screen: News
        },
        SuksesTambah: {
            screen: SuksesTambah,
            navigationOptions : {
                header: null
            }
        }
    }
);


export const AboutTab = StackNavigator(
    {
        screen3: {
            screen: About,
            navigationOptions : {
                header: null
            }
        },
    },
    {
        lazy: false
    });

export const UserTab = StackNavigator(
    {
        screen4: {
            screen: User,
            navigationOptions : {
                header: null
            }
        }
    }
)

export const TabsAplikasi =  TabNavigator(
    {
        screen5: {
            screen: DasboardTab,
            navigationOptions: {
                tabBarIcon: ({tintColor})=> <Icon name="ios-book-outline" size={32} color={tintColor} />
            }
        },
        screen6:{
            screen: AboutTab,
            navigationOptions: {
                tabBarIcon: ({tintColor})=> <Icon name="ios-bulb-outline" size={32} color={tintColor} />
            }
        },
        screen7:{
            screen: UserTab,
            navigationOptions: {
                tabBarIcon: ({tintColor})=> <Icon name="ios-person-outline" size={32} color={tintColor} />
            }
        }
    },    
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            showLabel: false
        },
        lazy: true,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        initialRouteName: "screen5",
    }
)
