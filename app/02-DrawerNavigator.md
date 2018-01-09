# DrawerNavigator
## 侧滑菜单导航栏，用于轻松设置带抽屉导航的屏幕
## bug! at first, click bottom button "我", "undefined is not an object(evaluation 'params.user')"


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';


class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: '首页',
    drawerIcon: ({tintColor}) => (
        <Image
            style={[styles.icon, {tintColor: tintColor}]}
            source={require('./app/img/icon_tabbar_mine.png')}
        />
    )
  };

  render() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={this._skip.bind(this)}>(HomeScreen)点击跳转</Text>
        </View>
    );
  }

  _skip() {
    this.props.navigation.navigate("Mine", {info:'HomePage传值'});
  }
}



class MineScreen extends Component {
  static navigationOptions = {
    drawerLabel: '我',
    drawerIcon: ({ tintColor }) => (
        <Image
            style={[styles.icon, {tintColor: tintColor}]}
            source={require('./app/img/icon_tabbar_mine_selected.png')}
        />
    ),
  };

  render() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={this._skip.bind(this)}>
            (MineScreen)返回上一界面 {this.props.navigation.state.params.info}
          </Text>
        </View>
    );
  }

  _skip() {
    this.props.navigation.navigate("Home");
  }
}


const Navigator = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Mine: {
    screen: MineScreen
  },
});


export default class dongFang extends Component {
  render() {
    return (
        <Navigator/>
    );
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50
  },
  container: {
    flex: 1,
  },
});


// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('dongFang', () => dongFang);