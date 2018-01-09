/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './Component/Main/main';


class dongFang1 extends Component {
  render() {
    return (
        <Main/>
    );
  }
}


AppRegistry.registerComponent('dongFang1', () => dongFang1);
