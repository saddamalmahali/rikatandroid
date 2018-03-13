import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Content, 
    View, 
    Text, 
    Spinner, 
    Form, 
    Input,
    Label,
    Item, 
    Picker, 
    Button,
    Thumbnail
} from 'native-base';
import {
    KeyboardAvoidingView,
    ToastAndroid
} from 'react-native';
import {onLogout} from './actions/action';
import Judul from '../dasboard/lapor/header';
import FormLapor from '../dasboard/lapor/Form';
import styles from './styles';

class User extends Component {
    _renderNameProfile(){

        if(this.props.user){
            
            return (
                <Text note style={styles.profileUser}>{this.props.user.user.name}</Text>
            )
        }else{
            return (<Text note style={styles.profileUser}>
                CEO, GeekyAnts
            </Text>)
        }
    }

    _onLogout(){
        const {navigation} = this.props;
        this.props.onLogout(navigation);
    }

    renderComponent() {
        if (this.props.isLoading) {
            return (
                    <Spinner color='green' />
            );
        }
        return (
            <Container>
                <View style={styles.profileInfoContainer}>
                    <View style={{ alignSelf: "center" }}>
                        <Thumbnail  large
                            source={require("../../images/blank-profile.png")}
                            
                        />
                    </View>
                    <View style={styles.profileInfo}>
                        {this._renderNameProfile()}
                    </View>
                </View>
                <Content style={{backgroundColor: '#fff', padding: 10}}>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input disabled={true}
                                value={this.props.user.user.email}
                            />
                        </Item>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input disabled={true}
                                value={this.props.user.user.username} 
                                />
                        </Item>
                        <Item stackedLabel>
                            <Label>Alamat</Label>
                            <Input disabled={true}
                                multiline={true} 
                                style={{height:100}}   
                                />
                        </Item>
                    </Form>
                    <View>
                        <Button primary block onPress={this._onLogout.bind(this)}>
                            <Text>Logout</Text>
                        </Button>
                    </View>
                </Content>
            </Container>     
        )
    }

    render(){
        return (
            
            <Container>
                    {this.renderComponent()}
            </Container>
            
           
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        isLoading: state.news.isLoading,
        user: state.auth.user
    }
}

export default connect(mapStateToProps, {onLogout})(User);