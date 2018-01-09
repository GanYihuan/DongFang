import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Navigator,
    ScrollView,
    Text,
    View
} from 'react-native';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'HomeScreen Gan',
      id: 1,
      user: null
    };
  }

  render() {
    // parmas required! 传参数
    const {params} = this.props.navigation.state;

    if (this.state.user) {
      return (
          <View>
            <Text style={styles.list_item}>
              用户信息: {JSON.stringify(this.state.user)}
            </Text>
          </View>
      );
    } else {
      return (
          <ScrollView style={styles.flex}>
            <Text
                style={styles.list_item}
                onPress={this._pressButton.bind(this)}
            >
              ☆ 豪华邮轮济州岛1日游
            </Text>
            <Text
                style={styles.list_item}
                onPress={this._pressButton.bind(this)}
            >
              ☆ 豪华邮轮台湾3日游
            </Text>
            <Text
                style={styles.list_item}
                onPress={this._pressButton.bind(this)}
            >
              ☆ 豪华邮轮地中海8日游
            </Text>
          </ScrollView>
      );
    }
  }

  // _表示这个方法不会自己调用,需要其他方式调用
  _pressButton() {
    // 进入其他函数用this时,要用that来确定作用域
    const that = this;
    // navigate required!
    const {navigate} = this.props.navigation;

    if (navigate) {
      navigate('Chat', {
        author: that.state.author,
        id: that.state.id,
        // 从ChatScreen获取user
        getUser: function (user) {
          that.setState({
            user: user
          })
        }
      })
    }
  }
}


const USER_MODELS = {
  1: {name: 'mot', age: 23},
  2: {name: '晴明大大', age: 25}
};


class ChatScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
        <ScrollView>
          <Text
              style={styles.list_item}
              onPress={this._pressButton.bind(this)}
          >
            ChatScreen Page author it is -> {params.author}
          </Text>
        </ScrollView>
    );
  }

  componentDidMount() {
    this.setState({
      author: this.props.author,
      id: this.props.id
    });
  }

  _pressButton() {
    const that = this;
    const {navigate} = this.props.navigation;

    if (this.props.getUser) {
      let user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
    if (navigate) {
      navigate('Home');
    }
  }
}


//导航注册
const dongFang = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      header: null
    }
  }
});


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list_item: {
    height: 40,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
});


AppRegistry.registerComponent('dongFang', () => dongFang);
