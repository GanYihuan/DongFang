import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';


class dongFang1 extends Component {
  render() {
    return (
        <ScrollableTabView
            renderTabBar={() => <ScrollableTabBar/>}
            tabBarPosition='overlayTop'
            onChangeTab={(obj) => {
              console.log('被选中的tab下标：' + obj.i);
            }}
            onScroll={(position) => {
              console.log('滑动时的位置：' + position);
            }}
            locked={false}
            initialPage={3}
            tabBarUnderlineColor={'red'}
            tabBarBackgroundColor={'#FFFF00'}
            tabBarTextStyle={{fontSize: 18}}
            prerenderingSiblingsNumber={1}
        >
          <View tabLabel="React" style={styles.center}>
            <Text>内容：React</Text>
          </View>
          <View tabLabel="ReactJS" style={styles.center}>
            <Text>内容：ReactJS</Text>
          </View>
          <View tabLabel="ReactNative" style={styles.center}>
            <Text>内容：ReactNative</Text>
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


AppRegistry.registerComponent('dongFang1', () => dongFang1);
