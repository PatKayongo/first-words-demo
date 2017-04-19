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
import ImageView from './app/image-view';

export default class FirstWords extends Component {
  static navigationOptions = {
    title: 'WOOHOO!'
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: 'goat', image: require('./app/images/goat.png'), backgroundColor: '#F27C7E', textColour: 'white' },
        { name: 'ball', image: require('./app/images/ball.png'), backgroundColor: '#ACC158', textColour: 'white' },
        { name: 'tree', image: require('./app/images/tree.png'), backgroundColor: '#EBB749', textColour: 'white' },
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Kids!
        </Text>
        <Text style={styles.instructions}>
          Welcome to your new adventures in words!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigate('Image', { items: this.state.items, index: 0 } )} >
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstWordsApp = StackNavigator({
  Home: { screen: FirstWords },
  Image: { screen: ImageView }
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
