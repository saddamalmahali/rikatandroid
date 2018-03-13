import React, {Component} from 'react';
import { Text, Container, Header, Content, Card, CardItem, Button, Body} from 'native-base';
import {View,Image} from 'react-native';

export default class SuksesTambah extends Component{

    constructor(props){
        super(props);
    }

    _onPress(){
        const {navigation} = this.props;
        navigation.navigate('screen5');
    }
    render(){
        return (
            <Content>
                <Card>                    
                    <CardItem>
                        <Body>
                            <View style={{marginTop: 10, marginBottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                                <Image 
                                    source={require('../../../images/success.png')} 
                                    style={{width: 200, height: 200}} 
                                    />
                            </View>
                            <Text style={{flex:1, fontWeight: 'bold', fontSize: 40, alignItems: 'center', alignContent: 'center'}}>Laporan Dikirim!</Text>
                            <Text style={{flex:1, flexDirection: 'column'}}>Terima Kasih atas partisipasi anda dalam melaporkan via Rikat APP, kami akan segera menindak lanjuti laporan anda.</Text>
                            <Button block success onPress={this._onPress.bind(this)} >
                                <Text>Kembali Ke Dasboard</Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}