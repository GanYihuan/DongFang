import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import DfyTabBar from './app/Component/DfyTabBar';


// node_modules\react-native-scrollable-tab-view\DefaultTabBar，
// ScrollableTabBar，index里面的ViewPropTypes改成了View.propTypes
class dongFang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabNames: ['主页', '分类', '秒杀', '购物车', '我的'],
      tabIconNames: ['md-home', 'md-grid', 'md-time', 'md-cart', 'md-contact'],
    };
  }

  // tabIconNames: ['ios-home', 'ios-grid', 'ios-time', 'ios-cart', 'ios-contact'],
  render() {
    let tabNames = this.state.tabNames;
    let tabIconNames = this.state.tabIconNames;
    return (
        <ScrollableTabView
            // renderTabBar={() => <ScrollableTabBar/>}
            renderTabBar={() =>
                <DfyTabBar
                    tabNames={tabNames}
                    tabIconNames={tabIconNames}
                />
            }
            tabBarPosition='bottom'
            onChangeTab={(obj) => {
              console.log('被选中的tab下标：' + obj.i);
            }}
            onScroll={(position) => {
              console.log('滑动时的位置：' + position);
            }}
            locked={false}
            initialPage={3}
            prerenderingSiblingsNumber={1}
        >
          <View tabLabel="ReactNative" style={styles.center}>
            <Text>内容：ReactNative</Text>
            <IconFont.Button name="facebook" backgroundColor="#3b5998" size={20}>
              Login with Facebook
            </IconFont.Button>
            <Icon name="md-alarm" size={50}></Icon>
            <IconFont.Button name="twitter" backgroundColor="#3b5998" size={20}>
              Follow me on Twitter
            </IconFont.Button>
          </View>
          <View tabLabel="东方耀" style={styles.center}>
            <Text>内容：东方耀</Text>
          </View>
          <View tabLabel="手把手教" style={styles.center}>
            <Text>内容：手把手教</Text>
          </View>
          <View tabLabel="实战开发" style={styles.center}>
            <Text>内容：实战开发</Text>
          </View>
          <View tabLabel="给力项目" style={styles.center}>
            <Text>内容：给力项目</Text>
          </View>
        </ScrollableTabView>
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
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


AppRegistry.registerComponent('dongFang', () => dongFang);
