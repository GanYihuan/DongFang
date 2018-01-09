import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../Home/home';
import Shop from '../Shop/shop';
import Mine from '../Mine/mine';
import More from '../More/more';


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }

  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
              title="首页"
              renderIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={require('../../img/icon_tabbar_homepage.png')}
                      // source={{uri: 'icon_tabbar_homepage.png'}}
                  />
              }
              renderSelectedIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={require('../../img/icon_tabbar_homepage_selected.png')}
                      // source={{uri: 'icon_tabbar_homepage_selected.png'}}
                  />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.setState({
                  selectedTab: 'home'
                })
              }}
          >
            <Home/>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="商家"
              renderIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={{uri: 'icon_tabbar_merchant_normal.png'}}
                  />
              }
              renderSelectedIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={{uri: 'icon_tabbar_merchant_selected.png'}}
                  />
              }
              selected={this.state.selectedTab === 'shop'}
              onPress={() => this.setState({selectedTab: 'shop'})}
          >
            <Shop/>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="我的"
              renderIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={{uri: 'icon_tabbar_mine.png'}}
                  />
              }
              renderSelectedIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={{uri: 'icon_tabbar_mine_selected.png'}}
                  />
              }
              selected={this.state.selectedTab === 'mine'}
              onPress={() => this.setState({selectedTab: 'mine'})}
          >
            <Mine/>
          </TabNavigator.Item>
          <TabNavigator.Item
              title="更多"
              renderIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={{uri: 'icon_tabbar_merchant_normal.png'}}
                  />
              }
              renderSelectedIcon={() =>
                  <Image
                      style={styles.iconStyle}
                      source={{uri: 'icon_tabbar_merchant_selected.png'}}
                  />
              }
              selected={this.state.selectedTab === 'more'}
              onPress={() => this.setState({selectedTab: 'more'})}
          >
            <More/>
          </TabNavigator.Item>
        </TabNavigator>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  iconStyle: {
    width: Platform.OS === 'ios' ? 30 : 25,
    height: Platform.OS === 'ios' ? 30 : 25
  }
});