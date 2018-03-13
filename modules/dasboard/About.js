import React, {Component} from 'react';
import {
    View, 
    Text, 
    Content, 
    Container,
    Card, 
    CardItem, 
    Body    
} from 'native-base';
import {
    ToastAndroid,
    Image
} from 'react-native';
import {connect} from 'react-redux';
import Logo from '../auth/Logo';
import styles from './styles';
class About extends Component{

    componentWillMount()
    {
        ToastAndroid.show("Menu Info Will Mount", ToastAndroid.SHORT);
    }

    render() {
        return (
            <Container>
                <View style={styles.profileInfoContainer}>
                    <View style={{ alignSelf: "center" }}>
                        <Image source={require('../../images/logo_egemas.png')} style={{width: 150, height:180}}/>
                    </View>
                </View>
                <Content style={{backgroundColor: '#fff', padding: 10}}>
                </Content>
            </Container>
            
        )
    }    
}
const mapStateToProps = (state)=>{
    return {
        isLoading: state.news.isLoading,
        token: state.auth.user.token,
        user: state.auth.user.user,
    }
}
export default connect(mapStateToProps, {})(About);