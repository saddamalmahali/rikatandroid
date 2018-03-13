import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    ToastAndroid,
    ActivityIndicator
} from 'react-native';

import Logo from './Logo';
import Form from './Form';
import Register from './Register';
import {connect} from 'react-redux';
import {loginAplikasi} from '../../actions'

class Login extends Component {

    constructor(props){
        super(props);
    }

    componentWillMount(){
        // ToastAndroid.show("Login Mount", ToastAndroid.SHORT);
    }

    _loginAplikasi(){
        const {username, password} = this.props;
        this.props.loginAplikasi(username, password);
    }

    _renderButton(){
        if(this.props.isLoading){
            return <ActivityIndicator size="large" color="#00ff00" />
        }else{
            return (
                <TouchableOpacity style={style.button}  onPress={this._loginAplikasi.bind(this)}>                    
                    <Text style={style.buttonText} >Login Aplikasi</Text>                    
                </TouchableOpacity>
            );
        }
    }

    _renderError()
    {
        if(this.props.error){
            return(
                <View style={{backgroundColor: '#0984e3'}}>
                    <Text style={style.containerError}>{this.props.error}</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <View style={style.container}>
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    {this._renderError()}
                    <Form />
                    {this._renderButton()}
                    <View style={style.signupCont}>
                        <Text style={style.signupText}>Tidak mempunyai akun? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={style.signupButton}>Daftar</Text>
                        </TouchableOpacity>
                    </View>                    
                </KeyboardAvoidingView>
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
    signupCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 16
    },
    signupButton: {
        color:'#ffffff',
        fontSize: 16,
        fontWeight: '500'
    },
    button:{
        width: 300,
        backgroundColor: '#00b686',
        borderRadius: 25,
        marginVertical: 16,
        paddingVertical: 12
    },
    buttonText:{
        fontSize: 16,
        fontWeight: '500',
        color: "#ffffff",
        textAlign: "center",
    },

});
const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        password: state.auth.password,
        user: state.auth.user,
        isLoading: state.auth.isLoading,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, {loginAplikasi})(Login);