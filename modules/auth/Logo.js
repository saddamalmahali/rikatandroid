import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';

export default class Logo extends Component{
    render(){
        return (
            <View style={style.container}>
                <Image source={require('../../images/logo_rikat.png')} style={{width:180, height:130}} />
                <Text style={style.subtitleLogo}>Selamat Datang di Aplikasi RIKAT</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        fontSize: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    subtitleLogo: {
        marginVertical: 14,
        fontSize: 18,
        color: "rgba(255,255,255,0.7)"
    }

});