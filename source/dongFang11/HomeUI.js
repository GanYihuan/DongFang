import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';


export default class HomeUI extends Component {
  goBack() {
    const {navigate} = this.props.navigation;
    // const {navigator} = this.props;
    if (navigate) {
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:了
      // navigator.pop();
      navigate('Home');
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome} onPress={this.goBack.bind(this)}>
            Welcome to React Native! GanYihuan
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Press xxxx to reload,{'\n'}
            shake for dev menu
          </Text>
        </View>
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

