import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView,
  TextInput,
  DeviceEventEmitter
} from 'react-native';
import ViewUtils from '../util/ViewUtils';
import NavigationBar from "../common/NavigationBar";


const URL = 'http://www.imooc.com';
const TRENDING_URL = 'http://github.com/';


export default class RepositoryDetail extends Component {
  constructor(props) {
    super(props);
    this.url = this.props.item.html_url
        ? this.props.item.html_url
        : TRENDING_URL + this.props.item.fullName;
    let title = this.props.item.full_name
        ? this.props.item.full_name
        : this.props.item.fullName;
    this.state = {
      url: this.url,
      title: title,
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
    })
  }

  onNavigationStateChange(e) {
    this.setState({
      canGoBack: e.canGoBack,
      url: e.url
    })
  }

  onBack() {
    if (this.state.canGoBack) {
      this.webView.goBack();
    } else {
      this.props.navigator.pop();
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <NavigationBar
              title={this.state.title}
              style={{backgroundColor: '#6495ED'}}
              leftButton={ViewUtils.getLeftButton(() => this.onBack())}
          />
          <WebView
              ref={webView => this.webView = webView}
              source={{uri: this.state.url}}
              onNavigationStateChange={(e) => this.onNavigationStateChange(e)}
              startInLoadingState={true}
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