import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {AuthScreen, TabsAplikasi} from '../NavigationAplikasi'; 


class Container extends Component {
    _renderScreen(){
        if(this.props.user){
            return (
                <TabsAplikasi />                
            );
        }else{
            return (
                <AuthScreen />              
            );
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                {this._renderScreen()}
            </View>
        );        
    }
}

const style = StyleSheet.create({
    container : {
      backgroundColor: "#0984e3",
      flex: 1,
      alignItems: 'center',
    },
    
});

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        isLoading: state.auth.isLoading,
    }
}

export default connect(mapStateToProps, {})(Container);