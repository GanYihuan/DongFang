import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  Image,
  Dimensions
} from 'react-native';
import TopMenu from '../../LocalData/TopMenu.json';
import TopListView from './XMGTopListView';

let {width} = Dimensions.get('window');

export default class TopView extends Component {
  constructor() {
    super();
    this.state = {
      activePage: 0
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <ScrollView
              horizontal={true} // 水平排列
              pagingEnabled={true}  // 自动分页
              showsHorizontalScrollIndicator={false}  // 隐藏水平滚动条
              onMomentumScrollEnd={this.onScrollAnimationEnd.bind(this)}  // 一帧滚动结束callback,(e):ScrollView
          >
            {this.renderScrollItem()}
          </ScrollView>
          {/*页码部分*/}
          <View style={styles.indicatorViewStyle}>
            {this.renderIndicator()}
          </View>
        </View>
    );
  }

  // 当一帧滚动结束的时候调用
  onScrollAnimationEnd(e) {
    // 求出当前的页码  e.nativeEvent.contentOffset.x : 滑动的路径长度
    let offsetX = e.nativeEvent.contentOffset.x;
    let currentPage = Math.floor(offsetX / width);
    // 更新状态机
    this.setState({
      activePage: currentPage
    });
  }

  renderScrollItem() {
    let itemArr = [];
    let dataArr = TopMenu.data;
    for (let i = 0; i < dataArr.length; i++) {
      itemArr.push(
          <TopListView
              key={i}
              dataArr={dataArr[i]}  // dataArr => children getDefaultProps
          />
      );
    }
    return itemArr;
  }

  renderIndicator() {
    let indicatorArr = [];
    let style;
    for (let i = 0; i < 2; i++) {
      style = (i === this.state.activePage) ? {color: '#f00'} : {color: '#ccc'};
      indicatorArr.push(
          <Text
              key={i}
              style={[{fontSize: 25}, style]}
          >
            &bull;
          </Text>
      );
    }
    return indicatorArr;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },

  indicatorViewStyle: {
    // 改变主轴的方向
    flexDirection: 'row',
    // 水平居中
    justifyContent: 'center'
  }
});

// 输出组件类
//module.exports = TopView;
