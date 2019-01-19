/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';
import {
  Spinner
} from 'native-base';

import {AuthScreen, TabsAplikasi} from './NavigationAplikasi';
import axios from 'axios';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import RouterComponent from './RouterComponent';

import Container from './modules/Container'
import firebase from 'firebase';
export default class App extends Component {

  constructor(props) {
    super(props);
    axios.defaults.baseURL = 'http://rikat.itsinergi.id';
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));   
    
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
