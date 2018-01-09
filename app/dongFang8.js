import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Picker,
  //ProgressBarAndroid,
    ActivityIndicator,
} from 'react-native';


class dongFang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null
    };
  }

  render() {
    return (
        <View style={[styles.flex, {marginTop: 45}]}>
          <Text>Picker组件,ProgressBarAndroid组件</Text>
          <Picker
              mode="dialog"
              selectedValue={this.state.language}
              onValueChange={(e) => this.setState({language: e})}
          >
            <Picker.Item label="Java" value="java"/>
            <Picker.Item label="JavaScript" value="js"/>
            <Picker.Item label="C" value="c"/>
            <Picker.Item label="PHP开发" value="php"/>
          </Picker>
          <Text>{this.state.language}</Text>
          <ActivityIndicator styleAttr="LargeInverse" />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});


AppRegistry.registerComponent('dongFang', () => dongFang);
