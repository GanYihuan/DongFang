import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import CommonCell from './XMGBottomCommonCell';
import Home_D5 from '../../LocalData/XMG_Home_D5.json';

export default class ShopCenter extends Component {
  static defaultProps = {
    // (ShopCenter) give father a function (2)
    popToHomeView: null
  };

  render() {
    return (
        <View style={styles.container}>
          <CommonCell
              leftIcon="gw"
              leftTitle="购物中心"
              rightTitle={Home_D5.tips}
          />
          <ScrollView
              style={styles.scrollViewStyle}
              horizontal={true} // 横向
              showsHorizontalScrollIndicator={false}
          >
            {this.renderAllItem()}
          </ScrollView>
        </View>
    );
  }

  renderAllItem() {
    let itemArr = [];
    let showData = Home_D5.data;
    for (let i = 0; i < showData.length; i++) {
      let data = showData[i];
      itemArr.push(
          <ShopCenterItem
              key={i}
              shopImage={data.img}
              shopSale={data.showtext.text}
              shopName={data.name}
              detailurl={data.detailurl}
              // (ShopCenterItem) give father a function (3)
              popToShopCenter={(url) => this.popToHome(url)}
          />
      )
    }
    return itemArr;
  }

  popToHome(url) {
    if (this.props.popToHomeView === null) {
      return;
    }
    // (ShopCenter) give father a function (1)
    this.props.popToHomeView(url);
  }
}

// 每一个商场
class ShopCenterItem extends Component {
  static defaultProps = {
    shopImage: '',
    shopSale: '',
    shopName: '',
    detailurl: '',
    // (ShopCenterItem) give father a function (2)
    popToShopCenter: null
  };

  render() {
    return (
        <TouchableOpacity onPress={() => this.clickItem(this.props.detailurl)}>
          <View style={styles.itemViewStyle}>
            <Image source={{uri: this.props.shopImage}} style={styles.imageStyle}/>
            <Text style={styles.showSaleStyle}>{this.props.shopSale}</Text>
            <Text style={styles.showNameStyle}>{this.props.shopName}</Text>
          </View>
        </TouchableOpacity>
    )
  }

  clickItem(url) {
    if (this.props.detailurl === null) {
      return;
    }
    // (ShopCenterItem) give father a function (1)
    this.props.popToShopCenter(url);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    marginTop: 15
  },

  imageStyle: {
    width: 120,
    height: 100,
    borderRadius: 8
  },

  scrollViewStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10
  },

  itemViewStyle: {
    margin: 8
  },

  showSaleStyle: {
    position: 'absolute',
    left: 0,
    bottom: 30,
    backgroundColor: '#f00',
    color: '#fff',
    padding: 3
  },

  showNameStyle: {
    textAlign: 'center',
    marginTop: 5
  }
});

// 输出组件类
//module.exports = ShopCenter;
