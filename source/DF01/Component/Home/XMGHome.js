import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  ScrollView,
  Dimensions
} from 'react-native';
import HomeDetail from './XMGHomeDetail';
import TopView from './XMGTopView';
import MiddleView from './XMGHomeMiddleView';
import MiddleBottomView from './XMGMiddleBottomView';
import ShopCenter from './XMGShopCenter';
import ShopCenterDetail from './XMGShopCenterDetail';
import GeustYouLike from './XMGGuestYouLike';

let {width} = Dimensions.get('window');

export default class Home extends Component {
  render() {
    return (
        <View style={styles.container}>
          {/*广州*/}
          {this.renderNavBar()}
          <ScrollView>
            {/*美食*/}
            <TopView/>
            {/*名店*/}
            <MiddleView/>
            {/*1元*/}
            <MiddleBottomView
                // access child give me the function (3)
                popToTopHome={(data) => {
                  this.pushToDetail(data)
                }}
            />
            {/*购物中心*/}
            <ShopCenter
                // (ShopCenter) give father a function (3)
                popToHomeView={(url) => this.pushToShopCenterDetail(url)}
            />
            {/*猜你喜欢*/}
            <GeustYouLike/>
          </ScrollView>
        </View>
    );
  }

  // 首页的导航条
  renderNavBar() {
    return (
        <View style={styles.navBarStyle}>
          <TouchableOpacity
              onPress={() => {
                this.pushToDetail()
              }}
          >
            <Text style={{color: '#fff'}}>广州</Text>
          </TouchableOpacity>
          <TextInput
              style={styles.topInputStyle}
              placeholder="输入商家, 品类, 商圈"
          />
          <View style={styles.rightNavViewStyle}>
            <TouchableOpacity
                onPress={() => {
                  alert('click 1')
                }}
            >
              <Image
                  source={{uri: 'icon_homepage_message'}}
                  style={styles.navRightImgStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                  alert('click 2')
                }}
            >
              <Image
                  source={{uri: 'icon_homepage_scan'}}
                  style={styles.navRightImgStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
    )
  }

  // 跳转到二级界面
  pushToDetail() {
    this.props.navigator.push({
      title: '详情页',
      component: HomeDetail // 要跳转的版块
    });
  }

  // 跳转到购物中心详情页
  pushToShopCenterDetail(url) {
    this.props.navigator.push({
      component: ShopCenterDetail, // 要跳转的版块
      passProps: {'url': this.dealWithUrl(url)} // pass children some data
    });
  }

  // 处理url
  dealWithUrl(url) {
    return url.replace('imeituan://www.meituan.com/web/?url=', '');
  }
}


const styles = StyleSheet.create({
  navBarStyle: { // 导航条样式
    height: Platform.OS === 'ios' ? 64 : 44,
    backgroundColor: 'rgba(255,96,0,1.0)',
    // 设置主轴的方向
    flexDirection: 'row',
    // 垂直居中 ---> 设置侧轴的对齐方式
    alignItems: 'center',
    // 设置主轴的对齐方式
    justifyContent: 'space-around'
  },

  rightNavViewStyle: {
    flexDirection: 'row',
    // backgroundColor:'blue',
    height: 64,
    // 设置侧轴的对齐方式
    alignItems: 'center'
  },

  topInputStyle: { // 设置输入框
    width: width * 0.71,
    height: Platform.OS === 'ios' ? 35 : 30,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'ios' ? 18 : 0,
    // 设置圆角
    borderRadius: 17,
    // 内左边距
    paddingLeft: 10
  },

  navRightImgStyle: { // 设置图片的大小
    width: Platform.OS === 'ios' ? 28 : 24,
    height: Platform.OS === 'ios' ? 28 : 24
  },

  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

// 输出组件类
//module.exports = Home;
