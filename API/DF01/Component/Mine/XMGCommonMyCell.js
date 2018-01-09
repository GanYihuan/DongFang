import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

export default class MyCell extends Component {
  static defaultProps = {
    leftIconName: '',
    leftTitle: '',
    rightIconName: '',
    rightTitle: ''
  };

  render() {
    return (
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.container}>
            <View style={styles.leftViewStyle}>
              <Image
                  style={styles.leftImgStyle}
                  source={{uri: this.props.leftIconName}}
              />
              <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
            </View>
            <View style={styles.rightViewStyle}>
              {this.rightSubView()}
            </View>
          </View>
        </TouchableOpacity>
    );
  }

  rightSubView() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {this.renderRightContent()}
          <Image
              style={{width: 8, height: 13, marginRight: 8, marginLeft: 5}}
              source={{uri: 'icon_cell_rightArrow'}}
          />
        </View>
    )
  }

  renderRightContent() {
    if (this.props.rightIconName.length === 0) {
      return (
          <Text style={{color: '#E7E7E7'}}>
            {this.props.rightTitle}
          </Text>
      )
    } else {
      return (
          <Image
              style={{width: 24, height: 13}}
              source={{uri: this.props.rightIconName}}
          />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // 主轴的方向
    flexDirection: 'row',
    // 主轴的对齐方式
    justifyContent: 'space-between',
    // 垂直居中
    alignItems: 'center',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    height: Platform.OS === 'ios' ? 40 : 36,
    backgroundColor: 'white'
  },

  leftViewStyle: {
    // 主轴的方向 横
    flexDirection: 'row',
    // 侧轴居中 纵
    alignItems: 'center',
    // 左外边距
    marginLeft: 8
  },

  leftImgStyle: { // 左边的图片
    width: 24,
    height: 24,
    marginRight: 6,
    borderRadius: 12
  },

  leftTitleStyle: {
    fontSize: 16
  }
});

// 输出组件类
//module.exports = MyCell;
