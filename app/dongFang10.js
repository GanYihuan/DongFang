import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
} from 'react-native';


class dongFang extends Component {
  render() {
    return (
        <ViewPagerAndroid
            // 初始选中的页的下标。你可以用setPage 函数来翻页，并且用onPageSelected来监听页的变化。
            initialPage={0}
            style={[styles.flex,styles.viewpager]}
        >
          <View style={styles.center}>
            <Text style={[{fontSize:12},{color:'red'}]}>第一个页面</Text>
          </View>
          <View style={styles.center}>
            <Text style={{fontSize:20}}>第二个页面</Text>
          </View>
          <View style={styles.center}>
            <Text style={{fontSize:30}}>第三个页面</Text>
          </View>
        </ViewPagerAndroid>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flexDirection: 'column',
  },
  viewpager: {
    height: 200,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});


AppRegistry.registerComponent('dongFang', () => dongFang);
