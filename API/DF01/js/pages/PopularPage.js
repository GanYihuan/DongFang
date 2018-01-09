import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ListView,
  RefreshControl,
  DeviceEventEmitter
} from 'react-native';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';

import DataRepository, {FLAG_STORAGE} from '../../js/expand/dao/DataRepository';
import NavigationBar from '../common/NavigationBar';
import RepositoryCell from '../common/RepositoryCell';
import LanguageDao, {FLAG_LANGUAGE} from '../expand/dao/LanguageDao';
import RepositoryDetail from './RepositoryDetail';
import ProjectModel from '../model/ProjectModel';


const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';


export default class PopularPage extends Component {
  constructor(props) {
    super(props);
    this.languageDao = new LanguageDao(FLAG_LANGUAGE.flag_key);
    this.state = {
      languages: []
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
                  <PopularTab
                      key={i}
                      tabLabel={lan.name}
                      {...this.props}
                  >
                    Java
                  </PopularTab>
                  : null;
            })
          }
        </ScrollableTabView>
        : null

    return (
        <View style={styles.container}>
          <NavigationBar
              title="PopularPage"
              statusBar={{backgroundColor: '#2196F3'}}
          />
          {content}
        </View>
    );
  }
}


class PopularTab extends Component {
  constructor(props) {
    super(props);
    this.dataRepository = new DataRepository(FLAG_STORAGE.flag_popular);
    this.state = {
      result: '',
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      isLoading: false
    }
  }

  componentDidMount() {
    this.loadData();
  }

  /**
   * refresh item,isFavorite state
   */
  flushFavoriteState() {
    let projectModels = [];
    let items = this.items;
    for (let i = 0, len = items.length; i < len; i++) {
      projectModels.push(new ProjectModel(items[i], false));
    }
    this.updateState({
      isLoading: false,
      dataSource: this.getDataSource(projectModels)
    });
  }

  getDataSource(data) {
    return this.state.dataSource.cloneWithRows(data);
  }

  /**
   * this.setState({}) encapsulation
   * @param dic
   */
  updateState(dic) {
    if (!this) return;
    this.setState(dic);
  }

  loadData() {
    this.setState({
      isLoading: true
    });
    let url = this.getFetchUrl(this.props.tabLabel);
    this.dataRepository
        .fetchRepository(url)
        .then(result => {
          this.items = result && result.items ? result.items : result ? result : [];
          this.flushFavoriteState();
          if (result && result.update_date && !this.dataRepository.checkdate(result.update_date)) {
            DeviceEventEmitter.emit('showToast', '数据过时');
            return this.dataRepository.fetchNetRepository(url);
          } else {
            DeviceEventEmitter.emit('showToast', '显示缓存数据');
          }
        })
        .then((items) => {
          if (!items || items.length === 0) return;
          this.items = items;
          this.flushFavoriteState();
        })
        .catch(err => {
          console.log(err);
          this.updateState({
            isLoading: false
          });
        });
  }

  getFetchUrl(key) {
    return URL + key + QUERY_STR;
  }

  onSelect(item) {
    this.props.navigator.push({
      component: RepositoryDetail,
      params: {
        item: item,
        ...this.props
      }
    });
  }

  onFavorite(item, isFavorite) {

  }

  renderRow(projectModel) {
    return <RepositoryCell
        key={projectModel.item.id}
        projectModel={projectModel}
        onSelect={() => this.onSelect(projectModel)}
        onFavorite={(item, isFavorite) => this.onFavorite(item, isFavorite)}
    />
  }

  render() {
    return <View style={styles.container}>
      <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => this.renderRow(data)}
          refreshControl={
            <RefreshControl
                refreshing={this.state.isLoading}
                onRefresh={() => this.loadData()}
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

