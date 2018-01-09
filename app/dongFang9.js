import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
} from 'react-native';


class dongFang extends Component {
  render() {
    /*
     抽屉界面
     */
    let navigationView = (
        <View style={{flex: 1, backgroundColor: '#ff0'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是抽屉!</Text>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            // 指定抽屉的宽度，也就是从屏幕边缘拖进的视图的宽度。
            drawerWidth={200}
            // 指定抽屉可以从屏幕的哪一边滑入。
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            // 此方法用于渲染一个可以从屏幕一边拖入的导航视图。
            renderNavigationView={() => navigationView}
        >
          <View style={[styles.flex,{alignItems: 'center'}]}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>React Native World!</Text>
          </View>
        </DrawerLayoutAndroid>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});


AppRegistry.registerComponent('dongFang', () =>dongFang);
