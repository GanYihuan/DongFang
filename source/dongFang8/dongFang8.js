import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  ProgressBarAndroid,
  View
} from 'react-native';


class dongFang1 extends Component {
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
              selectedValue={this.state.language}
              onValueChange={(lang) => this.setState({language: lang})}
              mode="dialog"
              style={{color: '#f00'}}
          >
            <Picker.Item label="Java" value="java"/>
            <Picker.Item label="JavaScript" value="js"/>
            <Picker.Item label="C" value="c"/>
            <Picker.Item label="PHP开发" value="php"/>
          </Picker>
          <Text>{this.state.language}</Text>
          <ProgressBarAndroid styleAttr="LargeInverse" />
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
