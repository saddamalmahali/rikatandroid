import React, {Component} from 'react';
import {Content, Container} from 'native-base';
import {ToastAndroid, Text, StyleSheet} from 'react-native';
import { View} from 'react-native-animatable';
import DetileLapor from './DetileLapor';
import {connect} from 'react-redux';
import styles from './lapor/styles';
class ListLapor extends Component{
    
    constructor(props){
        super(props);
        var data_lapor = [
            {
                judul: 'Coba 1',
                laporan: 'Saddam Almahali',
                waktu: '03-03-2018'
            },
            {
                judul: 'Coba 2',
                laporan: 'Saddam Almahali',
                waktu: '03-03-2018'
            },
            {
                judul: 'Coba 3',
                laporan: 'Saddam Almahali',
                waktu: '03-03-2018'
            }
        ];
        this.state = {
            data2 : data_lapor
        }
    }

    _renderDetile(){
        if(this.props.dataLapor){
            return this.props.dataLapor.map(item=><DetileLapor  
                                                        id_lapor={item.id}
                                                        key={item.judul} 
                                                        judul={item.judul}
                                                        deskripsi={item.deskripsi} 
                                                        laporan={item.laporan} 
                                                        waktu={item.waktu} />);
        }else{
            return (
                <View style={styles2.containerNull}>
                    <Text>Tidak Terdapat Data</Text>
                </View>
            );
        }        
    }

    render(){
        return (
            
                    <View style={styles.rowMainView} animation="bounceInDown" duration={1100} >
                        {this._renderDetile()}
                    </View>

        );
    }
}

const styles2 = {
    containerNull: {
        flex: 1,
        margin: 10,
        
    }
};

const mapStateToProps = (state)=>{
    return {
        isLoading: state.common.isLoading,
        dataLapor: state.lapor.dataLapor
    }
}

export default connect(mapStateToProps, {})(ListLapor);