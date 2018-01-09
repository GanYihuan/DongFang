import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Main from './XMGMain';


export default class Launch extends Component {
  render() {
    return (
        <Image
            style={styles.launchImageStyle}
            source={{uri: 'LaunchImage'}}
        />
    );
  }

  // 复杂的操作:定时器\网络请求
  componentDidMount(){
    setTimeout(()=> {
      this.props.navigator.replace({
        component: Main
      });
    }, 1000);
  }
}


const styles = StyleSheet.create({
  launchImageStyle: {
    flex: 1
  }
});

// 输出组件类
//module.exports = Launch;
