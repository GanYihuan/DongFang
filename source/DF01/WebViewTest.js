import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
  TextInput,
  DeviceEventEmitter // 向首页发出通知
} from 'react-native';
import NavigationBar from "./js/common/NavigationBar";


const URL = 'http://www.imooc.com';


export default class WebViewTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: URL,
      title: '',
      canGoBack: false
    }
  }

  goBack() {
    if (this.state.canGoBack) {
      this.webView.goBack();
    } else {
      DeviceEventEmitter.emit('showToast', '到顶了');
    }
  }

  go() {
    this.setState({
      url: this.text
    });
  }

  onNavigationStateChange(e) {
    this.setState({
      canGoBack: e.canGoBack,
      title: e.title
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <NavigationBar
              title='WebView'
              style={{backgroundColor: '#6495ED'}}
          />
          <View style={styles.row}>
            <Text
                style={styles.tips}
                onPress={() => {
                  this.goBack()
                }}
            >
              Return
            </Text>
            <TextInput
                style={styles.input}
                defaultValue={URL}
                onChangeText={text => this.text = text}
            />
            <Text
                style={styles.tips}
                onPress={() => {
                  this.go()
                }}
            >
              Go
            </Text>
          </View>
          <WebView
              ref={webView => this.webView = webView}
              source={{uri: this.state.url}}
              onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
          />
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  text: {
    fontSize: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    margin: 2
  },
  tips: {
    fontSize: 20
  }
});