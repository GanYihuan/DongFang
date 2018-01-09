import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');

export default class HeaderView extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this.renderTopView()}
          {this.renderBottomView()}
        </View>
    );
  }

  renderTopView() {
    return (
        <View style={styles.topViewStyle}>
          <Image
              style={styles.leftIconStyle}
              source={{uri: 'see'}}
          />
          <View style={styles.centerViewStyle}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: '400'}}>小码哥电商</Text>
            <Image
                style={{width: 17, height: 17}}
                source={{uri: 'avatar_vip'}}
            />
          </View>
          {/*--右边的箭头--*/}
          <Image
              source={{uri: 'icon_cell_rightArrow'}}
              style={{width: 8, height: 13, marginRight: 8}}
          />
        </View>
    )
  }

  renderBottomView() {
    return (
        <View style={styles.bottomViewStyle}>
          {this.renderBottomItem()}
        </View>
    )
  }

  renderBottomItem() {
    let itemArr = [];
    let data = [{'number': '100', 'title': '码哥券'}, {'number': '12', 'title': '评价'}, {'number': '50', 'title': '收藏'}];
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      itemArr.push(
          <TouchableOpacity key={i}>
            <View style={styles.bottomInnerViewStyle}>
              <Text style={{color: '#fff'}}>{item.number}</Text>
              <Text style={{color: '#fff'}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
      );
    }
    return itemArr;
  }
}


const styles = StyleSheet.create({
  container: {
    // 吸顶效果(1)
    height: Platform.OS === 'ios' ? 400 : 200,
    backgroundColor: 'rgba(255,96,0,1.0)'
  },

  topViewStyle: {
    flexDirection: 'row',
    // 设置侧轴的对齐方式
    alignItems: 'center',
    // 设置主轴的对齐方式
    justifyContent: 'space-around',
    // 吸顶效果(2)
    marginTop: Platform.OS === 'ios' ? 280 : 80
  },

  leftIconStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.2)'
  },

  centerViewStyle: {
    flexDirection: 'row',
    width: width * 0.72
  },

  bottomViewStyle: {
    flexDirection: 'row',
    // 绝对定位
    position: 'absolute',
    bottom: 0
  },

  bottomInnerViewStyle: {
    width: (width / 3) + 1,
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: 'white'
  }
});

// 输出组件类
//module.exports = HeaderView;
