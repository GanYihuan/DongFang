import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import MiddleData from './MiddleData.json';


export default class MineMiddleView extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this.renderAllItem()}
        </View>
    );
  }

  renderAllItem() {
    let itemArr = [];
    for (let i = 0; i < MiddleData.length; i++) {
      let data = MiddleData[i];
      itemArr.push(
          <InnerView
              key={i}
              title={data.title}
              iconName={data.iconName}
          />
      );
    }
    return itemArr;
  }
}


class InnerView extends Component {
  static defaultProps = {
    iconName: '',
    title: ''
  };

  render() {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              alert('0')
            }}
        >
          <View style={styles.innerViewStyle}>
            <Image
                style={{width: 40, height: 30, marginBottom: 3}}
                source={{uri: this.props.iconName}}
            />
            <Text style={{color: '#666'}}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    // 设置主轴的方向
    flexDirection: 'row',
    // 设置侧轴的对齐方式
    alignItems: 'center',
    // 设置主轴的对齐方式
    justifyContent: 'space-around',
    backgroundColor: 'white'
  },

  innerViewStyle: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// 输出组件类
//module.exports = MineMiddleView;
