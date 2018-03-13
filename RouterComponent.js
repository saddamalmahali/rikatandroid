import React from 'react';
import {Text} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Login from './modules/auth/Login';
import Header from './modules/common/Header';
import Dasboard from './modules/dasboard/Dasboard';
import News from './modules/dasboard/News';
import Info from './modules/dasboard/Info';


const RouterComponent = () => {
    return (
        <Router hideNavBar= {true}>
            <Scene key="root">
                <Scene key="login" component={Login} hideNavBar={true} initial  />
                <Scene key="dasboard" component={Dasboard} hideNavBar={true} />
                {/* <Scene 
                    key="dasboard"
                    swipeEnabled
                    tabs initial>
                            <Scene key="news" component={News} hideNavBar={true} title="News" initial />
                            <Scene key="info" component={Info} hideNavBar={true} title="Info" />
                </Scene> */}
            </Scene>
        </Router>
    );
};

export default RouterComponent;