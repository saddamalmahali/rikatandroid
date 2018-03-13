import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import {
    Container,
    Content, 
    Button, 
    View,
    Text,
    Spinner, 
    Item, 
    Picker
} from 'native-base';
import {
    KeyboardAvoidingView, 
    ToastAndroid, 
    Alert
} from 'react-native';
import FormLapor from './lapor/Form';
import {
    getKategori, 
    onSelectedItem, 
    getLocation
} from '../info/actions';
import {onLoad} from '../../actions/common';
import Judul from './lapor/header';
import {
    judulChanged,
    locationChanged,
    tanggalChanged,
    kategoriChanged,
    deskripsiChanged,
    imageChanged,
    resetStateLapor
} from '../../actions/lapor';

import axios from 'axios';
class News extends Component {

    constructor(props){
        super(props);
        this._clearChanged();
        // this.loadData = this.loadData.bind(this);
    }

    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
    
        return {
            headerTitle:"Laporkan Kejadian",  
            headerRight: (
                <View style={{marginRight: 10}}>
                    <Button style={{height: 30}} onPress={params.aksiTambah} danger>
                        <Text>Simpan</Text>
                    </Button>
                </View>
            ),
        };
    };

    

    componentWillMount(){
        // this.props.navigation.setParams({
        //     loadData:this.loadData
        // })
        // this._clearChanged();
        this.props.navigation.setParams({ aksiTambah: this.onSubmitFormLapor });    
        this._loadData();    
    }

    _loadData(){        
        const {token} = this.props.user;
        const headers = {
            Authorization: 'Bearer '+token,
            Accept: 'application/json'
        };

        this.props.getKategori(headers);
        this.props.getLocation();
    }

    _clearChanged = ()=>{
        this.props.judulChanged('');
        this.props.locationChanged(null);
        this.props.tanggalChanged('');
        this.props.kategoriChanged('');
        this.props.deskripsiChanged('');
        this.props.imageChanged(null);
    }

    onSubmitFormLapor = ()=>{
        
        this.props.onLoad(true);
        const {judul, tanggal, kategori, deskripsi, location, gambar} = this.props;
        // const {gambar} = this.state;
        if(judul !== '' || tanggal !== '' || kategori !== '' || deskripsi !== '' || gambar !== null){
            
            const token = this.props.token;
            
            const headers = {
                'Authorization': 'Bearer '+token,
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            };

            const files ={ 
                uri : gambar.uri,
                type: 'jpg/png',
                name: 'file1.jpg'                 
            };

            

            const fd = new FormData();
            fd.append("gambar", files);
            fd.append("judul", judul);
            fd.append("location", JSON.stringify(location));
            
            fd.append("tanggal", tanggal);
            fd.append("kategori", kategori);
            fd.append("deskripsi", deskripsi);
            fd.append("id_user", this.props.user.id)

            axios.post('/api/v1/transactions/lapor',fd, {'headers': headers})
                .then(response => {
                    this.setState({
                            suksesServer: response,
                            errorServer: null
                        });
                    this.props.onLoad(false);
                    ToastAndroid.show("Laporan Berhasil dikirim!", ToastAndroid.SHORT);
                    this.props.navigation.navigate("screen1");
                }).catch(error =>{
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        this.setState({
                            errorServer: error.response.data
                        });
                        Alert.alert(error.response.data);
                      } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        this.setState({
                            errorServer: error.request
                        });
                        
                      } else {
                        // Something happened in setting up the request that triggered an Error
                        
                        this.setState({
                            errorServer: error.message
                        });
                      }
                      this.props.onLoad(false);
                    
                });
        }else{            
            const error = {
                status: 'error',
                message: 'Harap Semua Kolom Tidak Boleh Ada yang Kosong!'
            };
            this.props.onLoad(false); 
            this.props.renderErrorMessage(error);       
                
        }
    }
    
    _renderComponent() {
        if (this.props.isLoading) {
            return (
                    <Spinner color='green' />
            );
        }
        return (
            <Content style={{flexDirection: 'column', flex: 1}}>
                <FormLapor />         
            </Content>            
        )
    }

    

    render(){
        
        return (
            <Container>
                {this._renderComponent()}
            </Container>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        position: state.news.position,
        isLoading: state.news.isLoading,
        dataKategori: state.news.dataKategori,
        selected: state.news.selected,
        token: state.auth.user.token,
        user: state.auth.user.user,
        location: state.news.location,
        loadingSubmit: state.common.isLoading,
        judul: state.lapor.judul,
        tanggal: state.lapor.tanggal,
        kategori: state.lapor.kategori,
        deskripsi: state.lapor.deskripsi,
        gambar: state.lapor.image,
        pesanError: state.lapor.errors
    }
}

export default connect(mapStateToProps, { 
    getKategori, 
    onSelectedItem, 
    getLocation, 
    onLoad,
    judulChanged, 
    locationChanged, 
    tanggalChanged,
    kategoriChanged,
    deskripsiChanged,
    imageChanged,
})(News);