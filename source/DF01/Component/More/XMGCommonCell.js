import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Switch
} from 'react-native';

export default class CommonCell extends Component {
  static defaultProps = {
    title: '',  // 标题
    isSwitch: false, // 是否展示开关
    rightTitle: ''  // 右侧的文本
  };

  constructor() {
    super();
    this.state = {
      isOn: false
    }
  }

  render() {
    return (
        <TouchableOpacity
            onPress={() => {
              alert('click (More)')
            }}
        >
          <View style={styles.container}>
            <Text style={{marginLeft: 8}}>{this.props.title}</Text>
            {this.renderRightView()}
          </View>
        </TouchableOpacity>
    );
  }

  renderRightView() {
    if (this.props.isSwitch) {
      return (
          <Switch
              style={{marginRight: 8}}
              value={this.state.isOn}
              onValueChange={() => {
                this.setState({isOn: !this.state.isOn})
              }}
          />
      )
    } else {
      return (
          <View style={styles.rightView}>
            {this.rightTitle()}
            <Image
                style={styles.imgStyle}
                source={{uri: 'icon_cell_rightArrow'}}
            />
          </View>
      )
    }
  }

  rightTitle() {
    if (this.props.rightTitle.length > 0) {
      return (
          <Text style={{color: '#ccc', marginRight: 3}}>{this.props.rightTitle}</Text>
      )
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // 主轴的对齐方式 横轴
    justifyContent: 'space-between',
    // 纵轴的对齐方式 纵轴
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    height: Platform.OS === 'ios' ? 40 : 30,
    backgroundColor: 'white',
  },

  rightView: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  imgStyle: {
    width: 8,
    height: 13,
    marginRight: 8
  }
});

// 输出组件类
//module.exports = CommonCell;
