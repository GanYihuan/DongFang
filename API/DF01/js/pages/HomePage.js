/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator,
  DeviceEventEmitter
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage';
import AsyncStorageTest from '../../AsyncStorageTest';
import MyPage from './my/MyPage';
import Toast, {DURATION} from 'react-native-easy-toast';
import WebViewTest from '../../WebViewTest';
import TrendingPage from './TrendingPage';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'MyPage',
    };
  }

  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('showToast', (text) => {
      this.toast.show(text, DURATION.LENGTH_LONG);
    })
  }

  componentWillUpMount() {
    this.listener && this.listener.remove();
  }

  _renderTab(Component, selectedTab, title, renderIcon, renderSelectedIcon) {
    return (
        <TabNavigator.Item
            title={title}
            badgeText="1"
            selectedTitleStyle={{color: '#2196F3'}}
            selected={this.state.selectedTab === selectedTab}
            renderIcon={() =>
                <Image
                    style={styles.img}
                    source={renderIcon}
                />
            }
            renderSelectedIcon={() =>
                <Image
                    style={[styles.img, {tintColor: '#2196F3'}]}
                    source={renderSelectedIcon}
                />
            }
            onPress={() => this.setState({selectedTab: selectedTab})}
        >
          {/* {...this.props} => 验证属性 包括navigator */}
          <Component {...this.props}/>
        </TabNavigator.Item>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <TabNavigator
              tabBarStyle={{height: 60}}
          >
            {this._renderTab(PopularPage, 'PopularPage', 'PopularPage', require('../../res/images/icon_tabbar_homepage.png'), require('../../res/images/icon_tabbar_homepage.png'))}
            {this._renderTab(TrendingPage, 'TrendingPage', 'TrendingPage', require('../../res/images/icon_tabbar_mine.png'), require('../../res/images/icon_tabbar_mine_selected.png'))}
            {this._renderTab(MyPage, 'MyPage', 'MyPage', require('../../res/images/icon_tabbar_merchant_normal.png'), require('../../res/images/icon_tabbar_merchant_selected.png'))}
            {this._renderTab(WebViewTest, 'WebViewTest', 'WebViewTest', require('../../res/images/icon_tabbar_misc.png'), require('../../res/images/icon_tabbar_misc_selected.png'))}
            {this._renderTab(AsyncStorageTest, 'AsyncStorageTest', 'AsyncStorageTest', require('../../res/images/icon_tabbar_misc.png'), require('../../res/images/icon_tabbar_misc_selected.png'))}
          </TabNavigator>
          <Toast ref={toast => this.toast = toast}/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  flex: {
    flex: 1,
  },
  img: {
    width: 36,
    height: 32,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

