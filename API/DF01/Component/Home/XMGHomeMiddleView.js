import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import CommonView from './XMGMiddleCommonView';
import TopMiddleData from '../../LocalData/HomeTopMiddleLeft.json';

let {width} = Dimensions.get('window');

export default class HomeMiddleView extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this.renderLeftView()}
          <View>
            {this.renderRightView()}
          </View>
        </View>
    );
  }

  renderLeftView() {
    let data = TopMiddleData.dataLeft[0];
    return (
        <TouchableOpacity
            onPress={() => {
              alert('leftclicked')
            }}
        >
          <View style={styles.leftViewStyle}>
            <Image
                style={styles.leftImgStyle}
                source={{uri: data.img1}}
            />
            <Image
                style={styles.leftImgStyle}
                source={{uri: data.img2}}
            />
            <Text style={{color: 'gray'}}>{data.title}</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text style={{color: '#00f', marginRight: 5}}>{data.price}</Text>
              <Text style={{color: '#f00', backgroundColor: '#ff0'}}>{data.sale}</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
  }

  renderRightView() {
    let ItemArr = [];
    let rightData = TopMiddleData.dataRight;
    for (let i = 0; i < rightData.length; i++) {
      let data = rightData[i];
      ItemArr.push(
          <CommonView
              key={i}
              title={data.title}
              subTitle={data.subTitle}
              rightImage={data.rightImage}
              titleColor={data.titleColor}
              callBackClickCell={null}
          />
      )
    }
    return ItemArr;
  }
}


const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row'
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },

  leftViewStyle: {
    width: width * 0.5,
    height: 119,
    backgroundColor: '#fff',
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  leftImgStyle: {
    width: 120,
    height: 30,
    //  内容模式 ?
    resizeMode: 'contain'
  }
});

// 输出组件类
//module.exports = HomeMiddleView;
