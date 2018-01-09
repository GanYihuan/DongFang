import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  Image,
  View,
} from 'react-native';


const window = Dimensions.get('window');
const uri = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/1735166522016060509185507.png';


export default class Menu extends Component {
  static propTypes = {
    // require
    onItemSelected: React.PropTypes.func.isRequired,
  };

  render() {
    return (
        <ScrollView
            style={styles.menu}
            scrollsToTop={false}
        >
          <View style={styles.avatarContainer}>
            <Image
                style={styles.avatar}
                source={{uri: uri}}
            />
            <Text style={styles.name}>东方耀QQ昵称</Text>
          </View>
          <Text
              style={styles.item}
              onPress={() => this.props.onItemSelected('关于作者')}
          >
            关于作者
          </Text>
          <Text
              style={styles.item}
              onPress={() => this.props.onItemSelected('联系东方耀')}
          >
            联系东方耀
          </Text>
        </ScrollView>
    );
  }
};


const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 10,
  },
});