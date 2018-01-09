import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import NavigationBar from "./NavigationBar";


export default class Girl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
  }

  renderButton(image) {
    return <TouchableOpacity
      onPress={() => {
        this.props.navigator.pop()
      }}
    >
      <Image style={{width: 22, height: 22}} source={image}></Image>
    </TouchableOpacity>
  }

  render() {
    return (
        <View style={styles.container}>
          <NavigationBar
              title={'Girl'}
              statusBar={{
                backgroundColor: '#0ff'
              }}
              leftButton={
                this.renderButton(require('./res/images/icon_camera_back_normal.png'))
              }
              rightButton={
                this.renderButton(require('./res/images/icon_shop_search.png'))
              }
          />
          <Text style={styles.text}>I am a Girl</Text>
          <Text style={styles.text}>Boy give me a -> {this.props.word}</Text>
          <Text
              style={styles.text}
              onPress={() => {
                this.props.onCallBack('one punch');
                this.props.navigator.pop();
              }}
          >
            give boy one punch
          </Text>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  text: {
    fontSize: 20
  }
});