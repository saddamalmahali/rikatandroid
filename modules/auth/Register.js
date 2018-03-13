import React, {Component} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    ActivityIndicator,
    KeyboardAvoidingView,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import {connect} from 'react-redux';
import Logo from './Logo';
import FormRegister from './FormRegister';
import {  } from '../../actions/register';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            pesanError: null
        }
    }

    static navigationOptions = (props) => {
        return {
            header: 'null'
        }
    }

    componentWillMount(){
        ToastAndroid.show("Register Mount", ToastAndroid.SHORT);
    }

    
    _renderButton(){
        if(this.state.isLoading){
            return <ActivityIndicator size="large" color="#00ff00" />
        }else{
            return (
                <TouchableOpacity style={style.button}  onPress={this._registerAplikasi.bind(this)}>                    
                    <Text style={style.buttonText} >Login Aplikasi</Text>                    
                </TouchableOpacity>
            );
        }
    }

    _registerAplikasi(){

    }

    render() {
        return (
            <View style={style.container}>
                <KeyboardAvoidingView behavior="padding" >
                    <Logo />                
                    <FormRegister />
                    {this._renderButton()}
                    <View style={style.signupCont}>
                        <Text style={style.signupText}>Sudah mempunyai akun? </Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={style.signupButton}>Login</Text>
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
        username: state.register.username,
        password: state.register.password,
        nama_lengkap: state.register.nama_lengkap,
        email: state.register.email,
        isLoading: state.common.isLoading,
        error: state.register.error
    }
}

  export default connect(mapStateToProps, {})(Register);