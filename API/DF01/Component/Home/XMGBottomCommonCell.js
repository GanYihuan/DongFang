/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var BottomCommonCell = React.createClass({
  getDefaultProps() {
    return {
      leftIcon: '',
      leftTitle: '',
      rightTitle: ''
    }
  },

  render() {
    return (
        <TouchableOpacity onPress={() => {alert('click me!')}}>
          <View style={styles.container}>
            {/*left*/}
            <View style={styles.leftViewStyle}>
              <Image source={{uri: this.props.leftIcon}} style={{width: 23, height: 23, marginRight: 5}}/>
              <Text style={{fontSize: 17}}>{this.props.leftTitle}</Text>
            </View>
            {/*right*/}
            <View style={styles.rightViewStyle}>
              <Text style={{color: '#999'}}>{this.props.rightTitle}</Text>
              <Image style={{width:8, height:13, marginRight:8, marginLeft: 5}} source={{uri: 'icon_cell_rightArrow'}}/>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
});


const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5
  },

  leftViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8
  },

  rightViewStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

// 输出组件类
module.exports = BottomCommonCell;
