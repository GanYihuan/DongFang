import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';

let {width} = Dimensions.get('window');
let cols = 5;
let cellW = Platform.OS === 'ios' ? 74 : 60;
let cellH = 70;
let vMargin = (width - cellW * cols) / (cols + 1);

export default class TopListView extends Component {
  static defaultProps = {
    dataArr: []
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }).cloneWithRows(this.props.dataArr)
    }
  }

  render() {
    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            contentContainerStyle={styles.contentViewStyle}
            scrollEnabled={false} // ban vertical scroll
        />
    );
  }

  renderRow(rowdata) {
    return (
        <TouchableOpacity
            onPress={() => {
              alert('0')
            }}
        >
          <View style={styles.cellStyle}>
            <Image
                style={{width: 52, height: 52}}
                source={{uri: rowdata.image}}
            />
            <Text style={styles.titleStyle}>{rowdata.title}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  contentViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width
  },

  cellStyle: {
    width: cellW,
    height: cellH,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: vMargin
  },

  titleStyle: {
    fontSize: Platform.OS === 'ios' ? 14 : 12,
    color: 'gray'
  }
});

// 输出组件类
//module.exports = TopListView;
