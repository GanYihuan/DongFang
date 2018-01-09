import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Navigator
} from 'react-native';
import WelcomePage from './WelcomePage';


function setup() {
  class Root extends Component {
    render() {
      return (
          <Navigator
              initialRoute={{component: WelcomePage}}
              //配置场景
              // configureScene={(route) => {
              //   //这个是页面之间跳转时候的动画，具体有哪些？可以看这个目录下，有源代码的: node_modules/react-native/Libraries/CustomComponents/Navigator/NavigatorSceneConfigs.js
              //   return Navigator.SceneConfigs.VerticalDownSwipeJump;
              // }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator}/>
              }}
          />
      )
    }
  }

  return <Root/>
}


module.exports = setup;