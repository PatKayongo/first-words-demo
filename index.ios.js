/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class FirstWords extends Component {
  static navigationOptions = {
    title: 'WOOHOO!'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Kids!
        </Text>
        <Text style={styles.instructions}>
          Welcome to your new adventures in words!
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstWordsApp = StackNavigator({
  Home: { screen: FirstWords }
});

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
  button: {
    backgroundColor: 'blue'
    
  },
  buttonText: {
    color: 'white',
    fontSize: 50
  }
});

AppRegistry.registerComponent('FirstWords', () => FirstWordsApp);
