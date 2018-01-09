import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View,
  Dimensions
} from 'react-native';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class dongFang1 extends Component {
  constructor(props) {
    // 这一句不能省略，照抄即可
    super(props);
  }

  render() {
    return (
        <View style={styles.flex}>
          <Text>Ganyihuan</Text>
          <WebView
              style={{height: height, width: width}}
              source={{uri: 'http://www.baidu.com'}}
              injectedJavaScript={"alert('我是东方耀')"}
          >
            {/* injectedJavaScript注入js */}
          </WebView>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});


AppRegistry.registerComponent('dongFang1', () => dongFang1);
