import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Home_D4 from '../../LocalData/XMG_Home_D4.json';
import CommonView from './XMGMiddleCommonView';

class BottomView extends Component {
  static defaultProps = {
    // give father a function (2)
    popToTopHome: null
  };

  renderBottomItem() {
    var itemArr = [];
    var dataArr = Home_D4.data;
    for (var i = 0; i < dataArr.length; i++) {
      var itemData = dataArr[i];
      itemArr.push(
          <CommonView
              key={i}
              title={itemData.maintitle}
              subTitle={itemData.deputytitle}
              rightImage={this.dealWithImgUrl(itemData.imageurl)}
              titleColor={itemData.typeface_color}
              tplurl={itemData.tplurl}
              // give father a func (3),
              // ask child give me a callBackClickCell carry data,
              // then use popToTopView handle
              callBackClickCell={(data) => this.popToTopView(data)}
          />
      )
    }

    return itemArr;
  }

  // 继续往父级界面传数据
  popToTopView(data) {
    // give father a function (1)
    this.props.popToTopHome(data);
  }

  dealWithImgUrl(url) {
    if (url.search('w.h') == -1) {
      // search norgthing
      return url;
    } else {
      return url.replace('w.h', '120.90');
    }
  }

  render() {
    return (
        <View style={styles.container}>
          {/*top*/}
          <View style={styles.topViewStyle}></View>
          {/*bottom*/}
          <View style={styles.bottomViewStyle}>
            {this.renderBottomItem()}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },

  topViewStyle: {},

  bottomViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

// 输出组件类
module.exports = BottomView;
