import React from 'react';
import {View, Text, Image} from 'react-native';
import Dasboard from '../dasboard/Dasboard';

const Header = ()=>{
    const {viewStyle} = styles;
    return (
        
            <Image source={require('../../images/logo_rikat.png')} style={{width: 90,  height:60, alignItems: 'center', justifyContent: 'center',}} />
        
        
    );
};

const styles = {
    viewStyle:{
        backgroundColor: '#0984e3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 18
    }
};

export default Header;