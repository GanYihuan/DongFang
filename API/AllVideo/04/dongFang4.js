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


class dongFang4 extends Component {
  render() {
    let defaultName = 'List';
    let defaultComponent = List;
    return (
        <Navigator
            initialRoute={{name: defaultName, component: defaultComponent}}
            //配置场景
            configureScene={(route) => {
              //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
              return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator}/>
            }}
        />
    );
  }
}


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'dongfangyao',
      id: 1,
      user: null
    };
  }

  render() {
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
              ☆ 豪华邮轮济州岛3日游
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

  _pressButton() {
    const self = this;
    const {navigator} = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if (navigator) {
      navigator.push({
        name: 'Detail',
        component: Detail,
        params: {
          author: this.state.author,
          id: this.state.id,
          //从Detail获取user
          getUser: function (user) {
            self.setState({
              user: user
            })
          }
        }
      })
    }
  }
}


const USER_MODELS = {
  1: {name: 'mot', age: 23},
  2: {name: '晴明大大', age: 25}
};


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      author: this.props.author,
      id: this.props.id
    });
  }

  render() {
    return (
        <ScrollView>
          <Text
              style={styles.list_item}
              onPress={this._pressButton.bind(this)}
          >
            作者是：{this.state.author}
          </Text>
        </ScrollView>
    );
  }

  _pressButton() {
    const {navigator} = this.props;

    if (this.props.getUser) {
      let user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }

    if (navigator) {
      // 很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:List了
      navigator.pop();
    }
  }
}


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


AppRegistry.registerComponent('dongFang4', () => dongFang4);
