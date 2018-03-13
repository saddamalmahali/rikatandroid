import React from 'react';
import {View, Text} from 'react-native';

export const Judul = ()=>{
    return (
            <View style={styles.containerHeader}>
                <Text style={{alignItems: 'center', fontSize: 30, paddingTop:10}}>Laporkan Kejadian!</Text>
            </View>
    )
}

const styles = {
    containerHeader: {
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Judul;