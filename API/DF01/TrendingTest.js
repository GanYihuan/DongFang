import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TextInput
} from 'react-native';
import NavigationBar from "./js/common/NavigationBar";
import GitHubTrending from 'GitHubTrending';


const URL = 'https://github.com/trending/';


export default class TrendingTest extends Component {
  constructor(props) {
    super(props);
    this.trending = new GitHubTrending();
    this.state = {
      result: ''
    }
  }

  onLoad() {
    let url = URL + this.text;
    this.trending.fetchTrending(url)
        .then(result => {
          this.setState({
            result: JSON.stringify(result)
          })
        })
        .catch(error => {
          this.setState({
            result: JSON.stringify(error)
          })
        })
  }

  render() {
    return (
        <View style={styles.container}>
          <NavigationBar
              title="TrendingTest"
              style={{backgroundColor: '#6495ED'}}
          />
          <TextInput
              style={{height: 40, borderWidth: 1, margin: 10}}
              onChangeText={text => this.text = text}
          />
          <View style={{flexDirection: 'row'}}>
            <Text
                style={styles.tips}
                onPress={() => this.onLoad()}
            >
              Load
            </Text>
            <Text style={{flex: 1}}>{this.state.result}</Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  tips: {
    padding: 10,
    fontSize: 20
  }
});


