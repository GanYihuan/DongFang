import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,   // 判断当前运行的系统 ios or android
  Navigator
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/XMGHome'; // 4
import Shop from '../Shop/XMGShop'; // 1
import Mine from '../Mine/XMGMine'; // 3
import More from '../More/XMGMore'; // 2


export default class Main extends Component {
  constructor() {
    super();
    // 初始化函数(变量是可以改变的,充当状态机的角色)
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return (
        <TabNavigator>
          {/*title, iconName, selectedIconName, selectedTab, componentName, component, badgeText*/}
          {this.renderTabBarItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'home', '首页', Home)}
          {this.renderTabBarItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'shop', '商家', Shop, '10')}
          {this.renderTabBarItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'mine', '我的', Mine)}
          {this.renderTabBarItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'more', '更多', More)}
        </TabNavigator>
    );
  }

  // 每一个TabBarItem
  renderTabBarItem(title, iconName, selectedIconName, selectedTab, componentName, component, badgeText) {
    return (
        <TabNavigator.Item
            title={title}  // transform variable add the {}
            renderIcon={() =>
                <Image style={styles.iconStyle} source={{uri: iconName}}/>
            } // icon
            renderSelectedIcon={() =>
                <Image style={styles.iconStyle} source={{uri: selectedIconName}}/>
            }   // selectedIcon
            onPress={() => {
              this.setState({
                selectedTab: selectedTab
              })
            }}  // click and then change 'selectedTab' value
            selected={this.state.selectedTab === selectedTab} // selected tab
            selectedTitleStyle={styles.selectedTitleStyle} // selected tab style
            badgeText={badgeText} // badge
        >
          <Navigator
              initialRoute={{
                name: componentName,
                component: component
              }} // jump to target page
              configureScene={() => {
                return Navigator.SceneConfigs.PushFromRight; // switch interface animate
              }}
              renderScene={(route, navigator) => {
                let Component = route.component; // create a component
                return <Component {...route.passProps} navigator={navigator}/>;  // init <Navigator> tag can use this
              }}
          />
        </TabNavigator.Item>
    )
  }
}


const styles = StyleSheet.create({
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25
  },
  selectedTitleStyle: {
    color: '#f00'
  }
});

// 输出组件类
//module.exports = Main;
