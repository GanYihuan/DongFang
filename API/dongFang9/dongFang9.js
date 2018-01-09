import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  DrawerLayoutAndroid,
  View
} from 'react-native';


class dongFang1 extends Component {
  render() {
    let navigationView = (
        <View style={{flex: 1, backgroundColor: '#ff0'}}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>我是抽屉!</Text>
        </View>
    );

    return (
        <DrawerLayoutAndroid
            drawerWidth={200}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}
        >
          <View style={{flex: 1, alignItems: 'center'}}>
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


AppRegistry.registerComponent('dongFang1', () =>dongFang1);
