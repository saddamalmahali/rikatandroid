import React, {Component} from 'react';
import {connect} from 'react-redux';
import { usernameChanged, passwordChanged } from '../../actions';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

class Form extends Component{
    
    _onUsernameChange(text) {
        this.props.usernameChanged(text);
    }
    
    _onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }

    render(){
        return (
            <View style={style.container}>
                <TextInput 
                    ref = {component => this.username=component}
                    placeholder="Username..." 
                    onChangeText={this._onUsernameChange.bind(this)}
                    autoFocus={true}
                    onFocus={this._clearUsername}
                    style={style.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="#ffffff"
                    value={this.props.username}
                    />
                <TextInput 
                    ref = {component => this.password=component}
                    placeholder="Password..." 
                    onChangeText= {this._onPasswordChanged.bind(this)}
                    secureTextEntry={true}
                    style={style.inputBox}
                    onFocus={this.clearPassword}
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
            username: state.auth.username,
            password: state.auth.password,
            isLoading: state.auth.isLoading,
            error: state.auth.error
        }
}

export default connect(mapStateToProps, {
    usernameChanged, 
    passwordChanged})(Form);