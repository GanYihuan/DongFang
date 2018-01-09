import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


export default class ViewUtils {
  static getLeftButton(callBack) {
    return (
        <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}
        >
          <Image
              style={{width: 26, height: 26, tintColor: '#ff0'}}
              source={require('../../res/images/icon_camera_back_normal.png')}
          />
        </TouchableOpacity>
    )
  }

  static getRightButton(str, callBack) {
    return (
        <TouchableOpacity
            style={{padding: 8}}
            onPress={callBack}
        >
          <Text style={{color: '#fff', fontSize: 15}}>{str}</Text>
        </TouchableOpacity>
    )
  }
}

