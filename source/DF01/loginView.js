import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import ImageData from './imgData.json';


let {width} = Dimensions.get('window');


export default class loginView extends Component {
  render() {
    return (
        <View style={styles.container}>
          {this._renderImage(0)}
          <TextInput
              style={styles.textInputStyle}
              placeholder={'UserName'}
              // value={'default text'}
          />
          <TextInput
              style={styles.textInputStyle}
              placeholder={'Password'}
              password={true}
              keyboardType={'number-pad'}
              multiline={true}
              clearButtonMode={'always'}
          />
          <View style={styles.loginBtnStyle}>
            <Text style={{color: '#fff'}}>Login</Text>
          </View>
          <View style={styles.settingStyle}>
            <Text>Can't Login</Text>
            <Text>New User</Text>
          </View>
          <View style={styles.otherLoginStyle}>
            <Text>Other Login: </Text>
            {this._renderImage(1)}
            {this._renderImage(2)}
            {this._renderImage(3)}
          </View>
        </View>
    );
  }

  _renderImage(index) {
    let allImage = [];
    let imgsArr = ImageData.data;
    let imgItem = imgsArr[index];
    let styleType = (index === 0) ? styles.imgheader : styles.imgfooter

    allImage.push(
        <Image
            style={styleType}
            key={index}
            source={{uri: imgItem.img}}
        />
    );
    return allImage;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    // 设置侧轴的对齐方式 ,默认为横向
    alignItems: 'center'
  },
  iconStyle: {
    marginTop: 50,
    marginBottom: 30,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    width: 80,
    height: 80
  },
  otherImageStyle: {
    marginLeft: 8,
    borderRadius: 25,
    width: 50,
    height: 50
  },
  textInputStyle: {
    marginBottom: 1,
    height: 38,
    // 内容居中
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  loginBtnStyle: {
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 8,
    height: 35,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00f'
  },
  settingStyle: {
    // 设置主轴的方向
    flexDirection: 'row',
    // backgroundColor:'red',
    width: width * 0.9,
    // 主轴的对齐方式
    justifyContent: 'space-between'
  },
  otherLoginStyle: {
    // backgroundColor:'red',
    // 设置主轴的方向
    flexDirection: 'row',
    // 设置侧轴的对齐方式
    alignItems: 'center',
    // 绝对定位
    position: 'absolute',
    bottom: 10,
    left: 20
  },
  imgheader: {
    marginTop: 50,
    marginBottom: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff'
  },
  imgfooter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 8
  }
});

// export default replace below code!
// module.exports = loginView;
