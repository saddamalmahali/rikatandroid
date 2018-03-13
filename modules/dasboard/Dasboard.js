import React, {Component} from 'react';
import {Image, KeyboardAvoidingView} from 'react-native';
import {Container, Header, Body, Icon, Card, CardItem, Left, Button, Content, Thumbnail, Text, Footer, FooterTab, View, Spinner} from 'native-base';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Info from './Info';
import News from './News';
import About from './About';
import {STATE_INFO, STATE_NEWS, STATE_ABOUT} from './StateContent';
import {Tabs} from '../../NavigationTab';

export default class Dasboard extends Component{
    state = {
        content: 'info',
        loading: false
    };
    
    render(){
        
        if (this.state.loading) {
            return (
                <Content>
                    <Spinner color='green' />
                </Content>
            );
        }

        return (
            <Container>                
                <Tabs />
            </Container>
        );
        
    }
}

const styles = {
    viewContainer:{        
        height: 65,
        alignItems: 'center',
        justifyContent: 'center',
    }
};