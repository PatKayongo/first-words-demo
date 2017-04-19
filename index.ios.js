
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
    title: 'Avuxeni!'
  };

  constructor(props) {
    super(props);

    this.state = {
      items: [
        { name: 'mbuti', image: require('./app/images/goat.png'), backgroundColor: '#F27C7E', textColour: 'white' },
        { name: 'bolo', image: require('./app/images/ball.png'), backgroundColor: '#ACC158', textColour: 'white' },
        { name: 'nsinya', image: require('./app/images/tree.png'), backgroundColor: '#EBB749', textColour: 'white' },
      ]
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Avuxeni Vana!
        </Text>
        <Text style={styles.instructions}>
          Welcome to your new adventures in words!
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => navigate('Image', { items: this.state.items, index: 0 } )} >
          <Text style={styles.buttonText}>sungula</Text>
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
    backgroundColor: '#EBE994',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#F27C7E',
    marginBottom: 5,
    fontSize: 20
  },
  button: {
    backgroundColor: '#669D89',
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 30
  }
});

AppRegistry.registerComponent('FirstWords', () => FirstWordsApp);
