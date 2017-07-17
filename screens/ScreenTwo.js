import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import Navigator, { SharedElement, SharedElementGroup } from 'native-navigation';
import Screen from '../components/Screen';
import { SCREENONE } from '../routes';

export default class ScreenOne extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Second screen!
          </Text>
          <SharedElement
            type="poster"
            typeId="123"
            >
            <Image source={{uri: 'https://randomuser.me/api/portraits/men/83.jpg'}} style={{width: 150, height: 150}} />
          </SharedElement>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
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
