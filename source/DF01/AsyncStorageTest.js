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
import Toast, {DURATION} from 'react-native-easy-toast';


const KEY = 'text';


export default class AsyncStorageTest extends Component {
  constructor(props) {
    super(props);
  }

  onSave() {
    AsyncStorage.setItem(KEY, this.text, (error) => {
      if (!error) {
        this.toast.show('save success', DURATION.LENGTH_LONG);
      } else {
        this.toast.show('save fail', DURATION.LENGTH_LONG);
      }
    })
  }

  onRemove() {
    AsyncStorage.removeItem(KEY, (error) => {
      if (!error) {
        this.toast.show('remove success', DURATION.LENGTH_LONG);
      } else {
        this.toast.show('remove fail', DURATION.LENGTH_LONG);
      }
    })
  }

  onFetch() {
    AsyncStorage.getItem(KEY, (error, result) => {
      if (!error) {
        if (result !== '') {
          this.toast.show('get content it is: ' + result);
        } else {
          this.toast.show('key not exist');
        }
      } else {
        this.toast.show('get fail');
      }
    })
  }

  render() {
    return (
        <View style={styles.container}>
          <NavigationBar
              title="AsyncStorageTest"
              style={{backgroundColor: '#6495ED'}}
          />
          <TextInput
              style={{height: 40, borderWidth: 1, margin: 10}}
              onChangeText={text => this.text = text}
          />
          <View style={{flexDirection: 'row'}}>
            <Text
                style={styles.tips}
                onPress={() => this.onSave()}
            >
              Save
            </Text>
            <Text
                style={styles.tips}
                onPress={() => this.onRemove()}
            >
              Remove
            </Text>
            <Text
                style={styles.tips}
                onPress={() => this.onFetch()}
            >
              Get
            </Text>
          </View>
          <Toast ref={toast => this.toast = toast}/>
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


