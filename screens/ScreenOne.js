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
import { SCREENONE, SCREENTWO } from '../routes';

export default class ScreenOne extends Component {
  render() {
    return (
      <Screen>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            Add more screen components in the screens directory
            and register them in index.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Button
            title="Push"
            onPress={() => Navigator.push(SCREENONE)}
          />
          <Button
            title="Present"
            onPress={() => Navigator.present(SCREENONE)}
          />
          <Button
            title="Pop"
            onPress={() => Navigator.pop()}
          />
          <Button
            title="Dismiss"
            onPress={() => Navigator.dismiss()}
          />
          <Button
            title="Screen two"
            onPress={() => Navigator.push(SCREENTWO, {id: 1}, {transitionGroup: "123"})}
          />
          <SharedElementGroup id="123">
            <SharedElement
              type="poster"
              typeId="123"
            >
              <Image source={{uri: 'https://randomuser.me/api/portraits/men/83.jpg'}} style={{width: 50, height: 50}} />
            </SharedElement>
          </SharedElementGroup>
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
