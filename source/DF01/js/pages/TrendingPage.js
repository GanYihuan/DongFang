import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  RefreshControl,
  DeviceEventEmitter,
  TouchableOpacity,
  Image
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

import DataRepository, {FLAG_STORAGE} from '../../js/expand/dao/DataRepository';
import NavigationBar from '../common/NavigationBar';
import TrendingCell from '../common/TrendingCell';
import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao';
import RepositoryDetail from './RepositoryDetail';
import TimeSpan from '../model/TimeSpan';
import Popover from '../common/Popover';


const timeSpanTextArray = [
  // TimeSpan (showText, searchText)
  new TimeSpan('today', 'since=daily'),
  new TimeSpan('weekly', 'since=weekly'),
  new TimeSpan('monthly', 'since=monthly')
]
const API_URL = 'https://github.com/trending/';


export default class TrendingPage extends Component {
  constructor(props) {
    super(props);
    this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_language);
    this.state = {
      languages: [],
      timeSpan: timeSpanTextArray[0]
    }
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.languageDao
        .fetch()
        .then(result => {
          this.setState({
            languages: result
          })
        })
        .catch(err => {
          console.log(err);
        })
  }

  showPopover() {
    this.refs.button.measure((ox, oy, width, height, px, py) => {
      this.setState({
        isVisible: true,
        buttonRect: {x: px, y: py, width: width, height: height}
      });
    });
  }

  renderTitleView() {
    return (
        <View>
          <TouchableOpacity
              ref="button"
              onPress={() => {
                this.showPopover()
              }}
          >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 20, color: '#fff', fontWeight: '400'}}>trending</Text>
              <Image
                  style={{width: 12, height: 12, marginLeft: 5}}
                  source={require('../../res/images/icon_camera_finish_disabled.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
    )
  }

  closePopover() {
    this.setState({
      isVisible: false
    })
  }

  /**
   * children use setState
   * @param dic
   */
  updateState(dic) {
    if(!this) return;
    this.setState(dic);
  }

  onSelectTimeSpan(timeSpan) {
    this.setState({
      timeSpan: timeSpan,
      isVisible: false
    })
  }

  render() {
    let content = this.state.languages.length > 0
        ?
        <ScrollableTabView
            tabBarBackgroundColor="#2196F3"
            tabBarInactiveTextColor="mintcream"
            tabBarActiveTextColor="#fff"
            tabBarUnderlineStyle={{backgroundColor: '#e7e7e7', height: 2}}
            renderTabBar={() => <ScrollableTabBar/>}
        >
          {
            this.state.languages.map((result, i, arr) => {
              let lan = arr[i];
              return lan.checked
                  ?
                  <TrendingTab
                      key={i}
                      tabLabel={lan.name}
                      timeSpan={this.state.timeSpan}
                      {...this.props}
                  >
                    Java
                  </TrendingTab>
                  : null;
            })
          }
        </ScrollableTabView>
        : null;
    let navigationBar =
        <NavigationBar
            titleView={this.renderTitleView()}
            statusBar={{backgroundColor: '#2196F3'}}
        />
    let timeSpanView =
        <Popover
            isVisible={this.state.isVisible}
            fromRect={this.state.buttonRect}
            placement="bottom"
            contentStyle={{backgroundColor: '#343434', opacity: 0.6}}
            onClose={() => this.closePopover()}
        >
          {
            timeSpanTextArray.map((result, i, arr) => {
              return (
                  <TouchableOpacity
                      key={i}
                      underlayColor="transparent"
                      onPress={() => this.onSelectTimeSpan(arr[i])}
                  >
                    <Text style={{fontSize: 20, color: '#fff', fontWeight: '400', padding: 8}}>
                      {arr[i].showText}
                    </Text>
                  </TouchableOpacity>
              )
            })
          }
        </Popover>

    return (
        <View style={styles.container}>
          {navigationBar}
          {content}
          {timeSpanView}
        </View>
    );
  }
}


class TrendingTab extends Component {
  constructor(props) {
    super(props);
    this.dataRepository = new DataRepository(FLAG_STORAGE.flag_trending);
    this.state = {
      result: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      isLoading: false
    }
  }

  componentDidMount() {
    this.loadData(this.props.timeSpan, true);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timeSpan !== this.props.timeSpan) {
      this.loadData(nextProps.timeSpan);
    }
  }

  onRefresh() {
    this.loadData(this.props.timeSpan);
  }

  loadData(timeSpan, isRefresh) {
    this.setState({
      isLoading: true
    })
    let url = this.getFetchUrl(timeSpan, this.props.tabLabel);
    this.dataRepository
        .fetchRepository(url)
        .then(result => {
          let items = result && result.items ? result.items : result ? result : [];
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items),
            isLoading: false
          });
          if (result && result.update_date && !this.dataRepository.checkdate(result.update_date)) {
            DeviceEventEmitter.emit('showToast', '数据过时');
            return this.dataRepository.fetchNetRepository(url);
          } else {
            DeviceEventEmitter.emit('showToast', '显示缓存数据');
          }
        })
        .then(result => {
          if (!items || items.length === 0) return;
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(items)
          });
          DeviceEventEmitter.emit('showToast', '显示网络数据');
        })
        .catch(err => {
          console.log(err);
          this.setState({
            isLoading: false
          })
        })
  }

  getFetchUrl(timeSpan, category) {
    return API_URL + category + timeSpan.searchText;
  }

  onSelect(item) {
    this.props.navigator.push({
      component: RepositoryDetail,
      params: {
        item: item,
        ...this.props
      }
    })
  }

  renderRow(data) {
    return <TrendingCell
        key={data.id}
        onSelect={() => this.onSelect(data)}
        data={data}
    />
  }

  render() {
    return <View>
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => this.renderRow(data)}
          refreshControl={
            <RefreshControl
                refreshing={this.state.isLoading}
                onRefresh={() => this.onRefresh()}
                colors={['#2196F3']}
                tintColor={['#2196F3']}
                titleColor={['#2196F3']}
                title={'Loading...'}
            />
          }
      />
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tips: {
    fontSize: 20
  }
});

