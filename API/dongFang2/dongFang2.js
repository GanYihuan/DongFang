import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';


class dongFang1 extends Component {
  render() {
    return (
          <View style={styles.flex}>
            <View style={styles.container}>
              <View style={[styles.item, styles.center]}>
                <Text style={styles.font}>酒店</Text>
              </View>
              <View style={[styles.item, styles.lineLeftRight]}>
                <View style={[styles.center, styles.flex, styles.lineCenter]}>
                  <Text style={styles.font}>海外酒店</Text>
                </View>
                <View style={[styles.center, styles.flex]}>
                  <Text style={styles.font}>特惠酒店</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={[styles.center, styles.flex, styles.lineCenter]}>
                  <Text style={styles.font}>团购</Text>
                </View>
                <View style={[styles.center, styles.flex]}>
                  <Text style={styles.font}>客栈，公寓</Text>
                </View>
              </View>
            </View>
          </View>
    )
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginTop: 200,
    marginLeft: 5,
    marginRight: 5,
    padding: 2,
    height: 84,
    borderRadius: 5,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lineLeftRight: {
    // 最小线宽 1/PixelRatio.get()
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
  lineCenter: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
});


AppRegistry.registerComponent('dongFang1', () => dongFang1);
