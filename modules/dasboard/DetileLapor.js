import React, {Component} from 'react';
import { ToastAndroid, Alert, Animated, Text,Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, BackHandler, I18nManager} from 'react-native';
import { Container,  Spinner, Button,Right,Left,ListItem,Content,Body, Header} from 'native-base';
import PropTypes from 'prop-types';
import { View} from 'react-native-animatable';
import styles from './lapor/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Images} from '../Themes/';
import axios from 'axios';

class DetileLapor extends Component{

    constructor(props){
        super(props);
        this.state = {
            uriImage: null
        }
    }

    componentWillMount(){
        // return (<Image style={styles.postDescImage} source={{uri: 'http://sigemas.itsinergi.id/api/storage/get/'+id}} />);
        var url = 'http://rikat.itsinergi.id/api/storage/get/'+this.props.id_lapor;
        this.setState({uriImage: url});
        // fetch(url)
        //     .then(response=>this.setState({uriImage:response.data}))
        //     .catch(error=>Alert.alert("Error : "+error));
        // axios.get(url).then(response=>this.setState({uriImage:response.data}));
    }

    _renderImage(id){
        if(this.state.uriImage){
            return (<Image style={styles.postDescImage} source={{uri: this.state.uriImage}} />);
        }else{
            return (<Spinner size='large' />);
        }
        
    }

    render(){
        // ToastAndroid.show("Data Detile : "+JSON.stringify(this.props), ToastAndroid.SHORT);
        // return (
        //     <Card>
        //         <CardItem>
        //             <Body>
        //                 <View>
        //                     <Text style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flex:1, fontWeight:"bold", fontSize: 20}} key={this.props.judul}>{this.props.judul}</Text>
        //                     <Text style={{flexDirection:'row'}} key={this.props.judul}>{this.props.laporan}</Text>
        //                     <Text style={{flexDirection:'row'}} key={this.props.judul}>{this.props.waktu}</Text>
        //                 </View>
        //             </Body>
        //         </CardItem>
        //     </Card>
        // );
        var url = 'http://rikat.itsinergi.id/api/storage/get/'+this.props.id_lapor;
        return (            
            <View style={ styles.rowBg}>
                <View style={styles.rowHeaderView}>
                    <View style={styles.rowHeaderNameView}>
                        <Text style={styles.rowNameTxt}>{this.props.judul}</Text>
                        <Text style={styles.rowTimeTxt}>{this.props.laporan}</Text>
                    </View>
                </View>
                <Animated.Image
                        style={styles.postDescImage }
                        source={{uri: url}}
                    />
                {/* {
                (item.postImage == '') ? null :
                <Image style={styles.postDescImage} source={item.postImage}></Image>
                } */}
                <View style={styles.descriptionView}>
                    <Text style={styles.rowDescTxt}>{this.props.deskripsi}</Text>
                </View>
                <View style={styles.dividerHorizontal}/>
                {/* <View style={styles.likeCommentShareView}>
                    <View style={styles.likeView}>
                        <TouchableOpacity onPress={()=>alert("Like")}>
                        <FontAwesome name="heart" size={18} color="#d4d4d4" />
                        </TouchableOpacity>
                        <Text style={styles.likeCommentShareText}>Like</Text>
                        <Right><View style={styles.dividerVertical}/></Right>
                    </View>
                    <View style={styles.commentView}>
                        <TouchableOpacity onPress={()=>alert("Comment")}>
                        <Image style={styles.likeCommentShareImage} source={Images.comments}/>
                        </TouchableOpacity>
                        <Text style={styles.likeCommentShareText}>Comment</Text>
                        <Right><View style={styles.dividerVertical}/></Right>
                    </View>
                    <View style={styles.shareView}>
                        <TouchableOpacity onPress={()=>alert("Share")}>
                        <MaterialIcons name="share" size={18} color="#d4d4d4" />
                        </TouchableOpacity>
                        <Text style={styles.likeCommentShareText}>Share</Text>
                    </View>
                </View> */}
            </View>                      
        );
    }
}

DetileLapor.propTypes  = {
    judul: PropTypes.string,
    laporan: PropTypes.string,
    waktu: PropTypes.string,
    deskripsi: PropTypes.string,
    id_lapor: PropTypes.number
};

export default DetileLapor;

// const DetileLapor = (props)=>{
//     ToastAndroid.show("Data Detile : "+JSON.stringify(props), ToastAndroid.SHORT);
//     return (
//             <Card>
//                 <CardItem>
//                     <Body>
//                         <View>
//                             <Text style={{flexDirection:'row', justifyContent:'center', alignItems:'center', flex:1, fontWeight:"bold", fontSize: 20}}>{props.item.judul}</Text>
//                             <Text style={{flexDirection:'row'}}>{props.item.laporan}</Text>
//                             <Text style={{flexDirection:'row'}}>{props.item.waktu}</Text>
//                         </View>
//                     </Body>
//                 </CardItem>
//             </Card>
//         );
// }

// export default DetileLapor;