# StackNavigator
## 用来跳转页面和传递参数


import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
} from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';


class HomeScreen extends Component {
  //static navigationOptions = {
  //  title: 'Welcome',
  //};

  render() {
    // 跳转使用 
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>Hello, Chat App!</Text>
          <Button
              title="Chat with Lucy"
              // 跳转到Chat,传参数user: 'Lucy'
              onPress={() => navigate('Chat', { user: 'Lucy' })}
              //onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
          />
        </View>

    );
  }
}


class ChatScreen extends Component {
  //static navigationOptions = {
  //  title: 'Chat with Lucy',
  //};

  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    // 使用参数
    const { params } = this.props.navigation.state;
    return (
        <View>
          <Text>Chat with {params.user}</Text>
        </View>
    );
    //  <Text>Chat with {this.props.navigation.state.params.user}</Text>
  }
}


const Navigator = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Welcome Home'
        }
      },
      Chat: {
        screen: ChatScreen,
        navigationOptions: {
          title: 'Chat with Lucy'
        }
      }
    }
);


export default class dongFang extends Component {
  render() {
    return (
        <Navigator/>
    )
  }
}


// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('dongFang', () => dongFang);