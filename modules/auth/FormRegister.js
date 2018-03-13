import React, {Component} from 'react';
import {connect} from 'react-redux';
import { usernameChanged, passwordChanged, emailChanged, namaLengkapChanged } from '../../actions/register';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    ToastAndroid
} from 'react-native';

import ValidationComponent  from 'react-native-form-validator';

class FormRegister extends ValidationComponent{
    constructor(props){
        super(props);
        this.state = {
            nama_lengkap: '',
            email: '',
            password: '',
            username: '',
            isLoading: false,
            pesanError: null
        }
    }
    _onUsernameChange(username) {
        // this.setState({username});
        this.props.usernameChanged(username);
        ToastAndroid.show("Username : "+this.props.username, ToastAndroid.SHORT);
    }
    
    _onPasswordChanged(password) {
        this.props.passwordChanged(password);
    }

    _onNamaLengkapChanged(nama_lengkap){
        this.props.namaLengkapChanged(nama_lengkap);
    }

    _onEmailChanged(email){
        this.props.emailChanged(email);
    }


    render(){
        return (
            <View style={style.container}>
                <TextInput 
                    ref = {component => this.nama_lengkap = component}
                    placeholder="Nama Lengkap" 
                    onChangeText={this._onNamaLengkapChanged.bind(this)}
                    autoFocus={true}
                    style={style.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#ffffff"
                    value={this.props.nama_lengkap}
                    />
                <TextInput 
                    ref = {component => this.username = component}
                    placeholder="Username" 
                    onChangeText={this._onUsernameChange.bind(this)}
                    autoFocus={true}
                    style={style.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#ffffff"
                    value={this.props.username}
                    />
                <TextInput 
                    ref = {component => this.email = component}
                    placeholder="Email" 
                    onChangeText= {this._onEmailChanged.bind(this)}
                    style={style.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#ffffff"
                    value={this.props.email}
                    />
                <TextInput 
                    ref = {component => this.password = component}
                    placeholder="Password" 
                    onChangeText= {this._onPasswordChanged.bind(this)}
                    secureTextEntry={true}
                    style={style.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#ffffff"
                    value={this.props.password}
                    />
                
                                
            </View>
        );
    }
    
}

const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    inputBox: {
        width: 300,       
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 18,
        paddingVertical: 10,
        fontSize: 20,
        marginBottom: 10
    },
    containerError: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }

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

export default connect(mapStateToProps, {
    usernameChanged, 
    passwordChanged, 
    namaLengkapChanged,
    emailChanged
})(FormRegister);