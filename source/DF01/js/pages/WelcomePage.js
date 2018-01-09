import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavigationBar from "../common/NavigationBar";
import HomePage from './HomePage';


export default class WelcomePage extends Component {
  render() {
    return (
        <View style={styles.container}>
          <NavigationBar title="Welcome Page"/>
          <Text>welcome</Text>
        </View>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigator.resetTo({
        component: HomePage
      })
    }, 500);
  }

  // cancel timeout or will be Bug!
  componentWillUnMount() {
    this.timer && clearTimeout(this.timer);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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

