import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import NavigationBar from "../../common/NavigationBar";
import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao';
import ViewUtils from '../../util/ViewUtils';
import ArrayUtils from '../../util/ArrayUtils';
import SortableListView from 'react-native-sortable-listview'


export default class SortKeyPage extends Component {
  constructor(props) {
    super(props);
    // 数据库读取的全部数据
    this.dataArray = [];
    // 排序之前生成的数组
    this.originalCheckedArray = [];
    // 排序之后生成的数组
    this.sortResultArray = [];
    this.state = {
      checkedArray: []
    }
  }

  componentDidMount() {
    // 标识FLAG_LANGUAGE
    this.languageDao = new LanguageDao(this.props.flag);
    this.loadData();
  }

  loadData() {
    this.languageDao
        .fetch()
        .then(result => {
          this.getCheckedItems(result);
        })
        .catch(err => {

        })
  }

  getCheckedItems(result) {
    this.dataArray = result;
    let checkedArray = [];
    for (let i = 0, len = result.length; i < len; i++) {
      let data = result[i];
      if (data.checked) {
        checkedArray.push(data);
      }
    }
    this.setState({
      checkedArray: checkedArray
    });
    this.originalCheckedArray = ArrayUtils.clone(checkedArray);
  }

  onBack() {
    if (ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray)) {
      this.props.navigator.pop();
      return;
    }
    Alert.alert(
        '提示',
        '是否保存修改？',
        [
          {
            text: 'No',
            onPress: () => {
              this.props.navigator.pop();
            }
          },
          {
            text: 'Yes',
            onPress: () => {
              this.onSave(true);
            }
          }
        ]
    )
  }

  onSave(isChecked) {
    if (!isChecked && ArrayUtils.isEqual(this.originalCheckedArray, this.state.checkedArray)) {
      this.props.navigator.pop();
      return;
    }
    // 不相等
    this.getSortResult();
    this.languageDao.save(this.sortResultArray);
    this.props.navigator.pop();
  }

  getSortResult() {
    this.sortResultArray = ArrayUtils.clone(this.dataArray);
    for (let i = 0, l = this.originalCheckedArray.length; i < l; i++) {
      // 排序之前生成的数组
      let item = this.originalCheckedArray[i];
      let index = this.dataArray.indexOf(item);
      this.sortResultArray.splice(index, 1, this.state.checkedArray);
    }
  }

  render() {
    let rightButton =
        <TouchableOpacity
            onPress={() => this.onSave()}
        >
          <View style={{margin: 10}}>
            <Text style={styles.title}>Save</Text>
          </View>
        </TouchableOpacity>
    let title = this.props.flag === FLAG_LANGUAGE.flag_language ? 'sortLanguarge' : 'sortTab';
    let navigationBar =
        <NavigationBar
            title={title}
            backgroundColor="#6495ED"
            leftButton={ViewUtils.getLeftButton(() => this.onBack())}
            rightButton={rightButton}
        />

    return (
        <View style={styles.container}>
          {navigationBar}
          <SortableListView
              style={{flex: 1}}
              data={this.state.checkedArray}
              order={Object.keys(this.state.checkedArray)}
              onRowMoved={e => {
                this.state.checkedArray.splice(e.to, 0, this.state.checkedArray.splice(e.from, 1)[0])
                this.forceUpdate()
              }}
              renderRow={row => <SortCell data={row}/>}
          />
        </View>
    )
  }
}


class SortCell extends Component {
  render() {
    return (
        <TouchableHighlight
            underlayColor={'#eee'}
            delayLongPress={500}
            style={styles.item}
            {...this.props.sortHandlers}
        >
          <View style={styles.row}>
            <Image
                style={styles.image}
                source={require('./img/icon_mine_setting.png')}
            />
            <Text>{this.props.data.name}</Text>
          </View>
        </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 25,
    backgroundColor: '#F8F8F8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 20,
    color: '#fff'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    tintColor: '#2196F3',
    width: 16,
    height: 16,
    marginRight: 10
  }
})