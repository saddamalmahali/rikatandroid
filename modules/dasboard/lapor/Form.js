import { 
        Form, 
        Item, 
        Content, 
        Label, 
        Input, 
        View, 
        Card, 
        CardItem, 
        Body, 
        Text, 
        Button, 
        Icon, 
        Spinner
    } from 'native-base';
import React, {Component} from 'react';
import {
        KeyboardAvoidingView, 
        Picker, 
        CameraRoll, 
        PermissionsAndroid, 
        ToastAndroid, 
        Image,
        ScrollView,
        Alert
    } from 'react-native';
import {connect} from 'react-redux';
import {
        judulChanged,
        locationChanged,
        tanggalChanged,
        kategoriChanged,
        deskripsiChanged,
        imageChanged,
        renderErrorMessage
    } from '../../../actions/lapor';
import {onLoad} from '../../../actions/common';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
// import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
class FormLapor extends Component{

    constructor(props){
        super(props);
        
    }

    _clearChanged = ()=>{
        this.props.judulChanged('');
        this.props.onLocationChanged(null);
        this.props.tanggalChanged('');
        this.props.kategoriChanged('');
        this.props.deskripsiChanged('');
        this.props.imageChanged(null);
    }

    renderPickerKategori() {
        if(this.props.dataKategori){
            return this.props.dataKategori.map(kategori=>
                <Picker.Item key={kategori.id} value={kategori.id} label={kategori.nama} />
            )
        }
        
    }

    onValueChange(data) {
        this.props.onSelectedItem(data);
    }

    renderLocation = ()=>{
        const SCREEN_HEIGHT = 200;
        const SCREEN_WIDTH = 300;
        const ASPECT_RATIO = SCREEN_WIDTH/SCREEN_HEIGHT;
        const LATTITUDE_DELTA = 0.0922;
        const LONGTITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO;

        let location = this.props.location;

        if(location){
            
            const dataLokasi = {
                latitude: this.props.location.coords.latitude,
                longitude: this.props.location.coords.longitude,
                latitudeDelta: LATTITUDE_DELTA,
                longitudeDelta: LONGTITUDE_DELTA
            };
            const latLang = {
                latitude: this.props.location.coords.latitude,
                longitude: this.props.location.coords.longitude,
            };

            // this.onLocationChanged.bind(dataLokasi);

            return (
                <MapView
                    initialRegion={{
                    latitude: this.props.location.coords.latitude,
                    longitude: this.props.location.coords.longitude,
                    latitudeDelta: LATTITUDE_DELTA,
                    longitudeDelta: LONGTITUDE_DELTA,
                    }}
                    style={{margin: 0,padding:0, width: 300, height: 200}}
                >
                    <Marker 
                        image={require('../../../images/lapor.png')}
                        coordinate={latLang}
                    />
                </MapView>
            );
        }else{
            return (
                <Spinner color='green' />
            );
        }

    }

    renderError(){
        if(this.props.error){
            return (<Text>Latitude: {this.state.error.message}</Text>)
        }
    }

    _handleButtonPress = () => {
        console.log("Ambil Foto");
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            this.setState({ photos: r.edges });
          })
          .catch((err) => {
             //Error Loading Images
          });
    };

    renderImage()
    {
        if(this.props.gambar){
            let {gambar} = this.props;

            return (<Image source={gambar} style={{width:300, height: 300, marginBottom: 10, marginTop: 10}} />)
        }
    }


    onJudulChanged = (text)=>{
        this.props.judulChanged(text);
    }

    onLocationChanged = (location)=>{        
        this.props.onLocationChanged(location);
    }

    onTanggalChanged = (date)=>{
        this.props.tanggalChanged(date);
    }

    onKategoriChanged = (kategori)=>{
        this.props.kategoriChanged(kategori);
    }

    onDeskripsiChanged = (text)=>{
        this.props.deskripsiChanged(text);
    }

    onGambarChanged = (data)=>{
        this.props.imageChanged(data);
    }

    render() {
        var options = {
            title: 'Select Avatar',
            customButtons: [
              {name: 'fb', title: 'Choose Photo from Facebook'},
            ],
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
        };
        
        
        if(this.props.isLoading){
            return (
                <Spinner color='green' />
            );
        }        

        return (
            <Content style={{margin: 10, padding: 0}}>
                <Card style={{padding: 0, margin: 0}}>
                    <CardItem style={{padding: 0, margin: 0}}>
                        <Content style={{padding: 0, margin: 0}}>
                            <KeyboardAvoidingView behavior="padding">
                                
                                <Form style={{padding: 0, margin: 0}}>
                                    <Item rounded>
                                        <Input  
                                            ref={componen => this.props._judul = componen}
                                            multiline={true}
                                            value={this.props.judul}
                                            placeholder="Masukan Judul Kejadian"
                                            onChangeText={this.onJudulChanged.bind(this)} 
                                            style={{fontSize: 23, fontWeight:'bold', alignItems: 'center', justifyContent: 'center'}}
                                            />
                                    </Item>
                                    <View style={{marginTop: 10, marginBottom: 10, padding: 0}}>
                                        {this.renderLocation()}
                                    </View>
                                    
                                    <Label style={{marginLeft:5,}}>Pilih Kategori</Label>
                                    <Picker
                                        mode="dropdown"
                                        selectedValue={this.props.kategori}
                                        onValueChange={this.onKategoriChanged.bind(this)}
                                        style={{
                                            marginTop: 10,
                                            marginBottom: 10,
                                        }}
                                        >
                                            {this.renderPickerKategori()}
                                    </Picker>
                                    
                                    <DatePicker
                                        style={{width: 300}}
                                        date={this.props.tanggal}
                                        mode="date"
                                        placeholder="Pilih Tanggal"
                                        format="DD-MM-YYYY"
                                        confirmBtnText="Pilih"
                                        cancelBtnText="Batal"
                                        onDateChange={this.onTanggalChanged.bind(this)}
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        }}
                                        // onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                    
                                    <Item floatingLabel>
                                        <Label>Deskripsi</Label>
                                        <Input 
                                                multiline={true} 
                                                ref={component=>this.props._deskripsi = component}
                                                value={this.props.deskripsi}
                                                onChangeText={this.onDeskripsiChanged.bind(this)}
                                                style={{height: 100}} 
                                            />
                                    </Item>
                                    <View style={{marginTop:15, flexDirection:'column'}}>
                                        {this.renderImage()}
                                        <Button onPress={() => {
                                            ImagePicker.showImagePicker(options, (response) => {
                                                console.log('Response = ', response);
                                            
                                                if (response.didCancel) {
                                                    console.log('User cancelled image picker');
                                                }
                                                else if (response.error) {
                                                    console.log('ImagePicker Error: ', response.error);
                                                }
                                                else if (response.customButton) {
                                                    console.log('User tapped custom button: ', response.customButton);
                                                }
                                                else {

                                                ImageResizer.createResizedImage(response.uri, 300, 300, 'JPEG', 70)
                                                .then(({uri}) => {
                                                    let source2 = {uri: uri};
                                                    this.onGambarChanged(source2);
                                                }).catch((err) => {
                                                    console.log(err);
                                                    return Alert.alert('Unable to resize the photo',
                                                    'Check the console for full the error message');
                                                });
                                                let source = { uri: response.uri };
                                                
                                                // this.onGambarChanged(source);
                                                this.setState({
                                                    avatarSource: source
                                                });
                                                }
                                            });
                                        }} iconLeft block info>
                                            <Icon name='camera' />
                                            <Text>Ambil Foto</Text>
                                        </Button>
                                    </View>  
                                </Form>
                            </KeyboardAvoidingView>
                        </Content>
                    </CardItem>
                </Card>           
            </Content>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
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

export default connect(mapStateToProps, 
                        {
                            judulChanged, 
                            onLoad, 
                            locationChanged, 
                            tanggalChanged,
                            kategoriChanged,
                            deskripsiChanged,
                            imageChanged,
                            renderErrorMessage
                        })(FormLapor); 