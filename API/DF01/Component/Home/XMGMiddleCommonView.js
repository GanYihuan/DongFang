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

let {width} = Dimensions.get('window');

export default class CommonView extends Component {
  static defaultProps = {
    title: '',
    subTitle: '',
    rightImage: '',
    titleColor: '',
    // 下级界面URL路径
    tplurl: '',
    // give father a func (2)
    callBackClickCell: null
  };

  render() {
    return (
        <TouchableOpacity
            onPress={() => this.clickCell(this.props.tplurl)}
        >
          <View style={styles.container}>
            <View>
              <Text style={[{color: this.props.titleColor}, styles.titleStyle]}>{this.props.title}</Text>
              <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
            </View>
            {/*resizeMode: 'contain' 完全展示图片*/}
            <Image
                source={{uri: this.props.rightImage}}
                style={{width: 64, height: 43, resizeMode: 'contain'}}
            />
          </View>
        </TouchableOpacity>
    );
  }

  clickCell(data) {
    if (this.props.callBackClickCell === null) {
      return
    }
    // give father a func (1)
    this.props.callBackClickCell(data);
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: width * 0.5 - 1,
    height: 59,
    marginBottom: 1,
    marginRight: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  titleStyle: {
    fontSize: 10,
    fontWeight: 'bold'
  },

  subTitleStyle: {
    color: 'gray'
  }
});

// 输出组件类
//module.exports = CommonView;
