import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import CommonCell from './XMGCommonCell';

export default class More extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this._renderNavBar()}
          <ScrollView>
            <View style={styles.singleItem}>
              <CommonCell title="扫一扫"/>
            </View>
            <View style={styles.singleItem}>
              <CommonCell title="省流量模式" isSwitch={true}/>
              <CommonCell title="消息提醒"/>
              <CommonCell title="邀请好友使用码团"/>
              <CommonCell title="清空缓存" rightTitle="1.99M"/>
            </View>
            <View style={styles.singleItem}>
              <CommonCell title="问卷调查"/>
              <CommonCell title="支付帮助"/>
              <CommonCell title="网络诊断"/>
              <CommonCell title="关于码团"/>
              <CommonCell title="我要应聘"/>
            </View>
            <View style={styles.singleItem}>
              <CommonCell title="精品应用"/>
            </View>
          </ScrollView>
        </View>
    );
  }

  _renderNavBar() {
    return (
        <View style={styles.navOutViewStyle}>
          <Text style={styles.moreStyle}>更多</Text>
          <TouchableOpacity
              style={styles.rightViewStyle}
              onPress={() => {
                alert('setting!')
              }}
          >
            <Image
                style={styles.navImageStyle}
                source={{uri: 'icon_mine_setting'}}
            />
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  navImageStyle: {
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24
  },

  rightViewStyle: {
    position: 'absolute',
    right: 10,
    bottom: Platform.OS === 'ios' ? 15 : 13
  },

  navOutViewStyle: {
    // 设置主轴的方向
    flexDirection: 'row',
    // 设置主轴的对齐方式 横轴
    justifyContent: 'center',
    // 设置侧轴的对齐方式  纵轴
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)'
  },

  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },

  welcome: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center'
  },

  singleItem: {
    marginTop: 20
  },

  moreStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

// 输出组件类
//module.exports = More;
