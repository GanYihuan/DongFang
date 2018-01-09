# TabNavigator
## 类似底部导航栏，用来在同一屏幕下切换不同界面
## bug! at first, click bottom button "我", "undefined is not an object(evaluation 'params.user')"


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    Button
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';


class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: '首页',
    drawerIcon: ({tintColor}) => (
        <Image
            source={require('./app/img/icon_tabbar_mine_selected.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    )
  };

  render() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={this._skip.bind(this)}>点击跳转</Text>
        </View>
    );
  }

  _skip() {
    this.props.navigation.navigate("Mine", {info: 'HomePage传值'});
  }
}


class MinePage extends Component {
  static navigationOptions = {
    drawerLabel: '我',
    drawerIcon: ({ tintColor }) => (
        <Image
            source={require('./app/img/icon_tabbar_mine_selected.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
  };

  render() {
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text onPress={this._skip.bind(this)}>
            返回上一界面 {this.props.navigation.state.info}
          </Text>
        </View>
    );
  }

  _skip() {
    this.props.navigation.navigate("Home");
  }
}


class TabBarItem extends Component {
  render() {
    return (
        <Image
            style={{tintColor:this.props.tintColor,width:25,height:25}}
            source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
        />
    )
  }
}


const Tab = TabNavigator({
      Home: {
        screen: HomePage,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: '首页',
          tabBarIcon: ({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require('./app/img/icon_tabbar_mine_selected.png')}
                  selectedImage={require('./app/img/icon_tabbar_mine_selected.png')}
              />
          ),
        })
      },
      Mine: {
        screen: MinePage,
        navigationOptions: ({navigation}) => ({
          tabBarLabel: '我',
          tabBarIcon: ({focused,tintColor}) => (
              <TabBarItem
                  tintColor={tintColor}
                  focused={focused}
                  normalImage={require('./app/img/icon_tabbar_merchant_selected.png')}
                  selectedImage={require('./app/img/icon_tabbar_merchant_selected.png')}
              />
          )
        })
      }
    }, {
      animationEnabled: false, // 切换页面时是否有动画效果
      tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
      swipeEnabled: false, // 是否可以左右滑动切换tab
      backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
      tabBarComponent: TabBarBottom,
      lazy: true, // 是否根据需要懒惰呈现标签，而不是提前制作，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐改成true哦。
      initialRouteName: 'Home', // 设置默认的页面组件
      tabBarOptions: {
        activeTintColor: '#ff8500', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片未选中颜色
        showLabel: true, // 是否显示label，默认开启。
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        upperCaseLabel: false, // 是否使标签大写，默认为true。
        inactiveBackgroundColor: '#E8E5F8', // label和icon的背景色 不活跃状态下（未选中）。
        indicatorStyle: {
          height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
        style: {
          // TabBar 背景色
          backgroundColor: '#fff'
        },
        labelStyle: {
          fontSize: 10, // 文字大小
        }
      }
    }
);


const Navigator = StackNavigator(
    {
      Tab: {
        screen: Tab,
        navigationOptions: {
          header: null
        }
      },
    },
    {
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: '#333',
        showIcon: true,
        swipeEnabled: false,
        animationEnabled: false,
      },
      mode: 'card'
    }
);


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
  }
});


// if you are using create-react-native-app you don't need this line
AppRegistry.registerComponent('dongFang', () => dongFang);