import React, {Component} from 'react';
import {
    Image, 
    TouchableHighlight, 
    View, 
    ToastAndroid,
    ScrollView,
    RefreshControl
} from 'react-native';

import {
    getKategori, 
    onSelectedItem, 
    getLocation
} from '../info/actions';

import {loadData} from '../../actions/lapor';

import {connect} from 'react-redux';
import {
    Container, 
    Header, 
    Body, 
    Icon, 
    Card, 
    CardItem, 
    Left, 
    Button, 
    Content, 
    Thumbnail, 
    Text, 
    Footer, 
    FooterTab, 
    Spinner
} from 'native-base';

import ListLapor from './ListLapor';

class Info extends Component{
    constructor(props){
        super(props);
        const token = this.props.token;
        const headers = {
            'Authorization': 'Bearer '+token,
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        };
        this.state = { 
            loading: true, 
            isRefreshing: false, 
            navigation: null,
            headers: headers 
        };
    }

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
            headerTitle:"Laporan Terkini",
            headerLeft: null,
            headerRight: (
                <View style={{marginRight: 10}}>
                    <Button style={{height: 30}} onPress={params.aksiTambah}>
                        <Text>TAMBAH</Text>
                    </Button>
                </View>
            ),
        };
    };

    componentWillMount()
    {
        // this.props.loadData()
        const {navigation} = this.props;
        this.setState(navigation);
        this.props.navigation.setParams({ aksiTambah: this._onTambahKlik });
        
            
        
        this.props.loadData(this.state.headers);
        setTimeout(()=>{
            this.setState({ loading: false });
            ToastAndroid.show("Componen Info Render", ToastAndroid.SHORT);
        }, 1000);
        
    }

    _onTambahKlik = ()=>{
        this.props.navigation.navigate('screen2');
    }

    onTambahPress()
    {
        
        
    }

    _onRefresh(){
        this.setState({
            isRefreshing: true
        });
        setTimeout(()=>{
            this.props.loadData(this.state.headers);
            this.setState({
                isRefreshing: false
            })
        }, 2000);
    }

    _renderData(){
        if(this.state.isRefreshing){
            return (<Spinner size='large' />)
        }else{
            return (
                <ListLapor />
            );
        }
    }

    _renderError(){
        if(this.props.dataLapor){
            return (
                <ScrollView>
                    <Text>{JSON.stringify(this.props.dataLapor)}</Text>
                </ScrollView>
            )
        }
    }

    render(){
        if (this.state.loading) {
            return (
                <Content>
                    <Spinner color='green' />
                </Content>
            );
        }
        return ( 
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        />}  
                    style={{flex:1, backgroundColor: '#f3f3f3'}}>
                
                {this._renderData()}
            </ScrollView>    
            
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        isLoading: state.news.isLoading,
        dataKategori: state.news.dataKategori,
        selected: state.news.selected,
        position: state.news.position,
        dataLapor: state.lapor.dataLapor
    }
}
const styles = {
    
};

export default connect(mapStateToProps, { getKategori, onSelectedItem, getLocation, loadData})(Info);