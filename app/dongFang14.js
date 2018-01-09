import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    ListView,
    TouchableHighlight,
    RecyclerViewBackedScrollView,
} from 'react-native';
import JSONdata from './app/json/result.json';


export default class dongFang extends Component {
  constructor(props) {
    super(props);
    let getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    };
    let getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    };
    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        getSectionData: getSectionData,
        getRowData: getRowData,
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
      }),
    };
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    //从网络上获取了数据的情况
    //let movie = this.state.movies[0];
    //return this.renderMovie(movie);
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>User List</Text>
          </View>
          <ListView
              style={styles.listview}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              renderSectionHeader={this.renderSectionHeader}
          />
        </View>
    );
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
        <View style={styles.section}>
          <Text style={styles.text}>片头-公司名:{sectionData}</Text>
        </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
        <View style={styles.rowStyle}>
          <Text style={styles.rowText}>{rowData.name.title} {rowData.name.first} {rowData.name.last}-{sectionID}-{rowID}</Text>
        </View>
    );
  }

  renderLoadingView() {
    return (
        <View style={styles.loadingpage}>
          <Text>
            正在网络上获取电影数据……
          </Text>
        </View>
    );
  }

  componentDidMount() {
    //this.fetchData();
    this.fetchData2();
  }

  fetchData2() {
    let responseData = JSONdata;
    // 数据外壳, {}
    let dataBlob = {};
    // 总数据, {results: {target}}
    let organizations = responseData.results;
    // 总数据长度
    let length = organizations.length;
    // 分组ID,
    let sectionIDs = [];
    // 行ID,
    let rowIDs = [];

    let organization;
    let users;
    let userLength;
    let user;
    let i;
    let j;

    for (i = 0; i < organizations.length; i++) {
      // organizations:总数据 -> organizations[i]: 每一组
      organization = organizations[i];
      // 每一组, organization.id充当sectionIDs
      sectionIDs.push(organization.id);
      // 模拟二维数组装内容,行ID
      rowIDs[i] = [];
      // 每一组的users
      users = organization.users;
      // dataBlob: 数据外壳{} -> dataBlob[sectionIDs]: 进入到每个组 -> organizations[i].organization: 每一组的organization
      dataBlob[organization.id] = organization.organization;

      for (j = 0; j < users.length; j++) {
        // rowID:行ID
        user = users[j].user;
        // 二维数组放的都是 md5, 二维数据
        rowIDs[i].push(user.md5);
        // sectionIDs: organization.id,  user.md5: 二维数据
        dataBlob[organization.id + ':' + user.md5] = user;
      }
    }

    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
      loaded: true
    });
  }
}


const styles = StyleSheet.create({
  loadingpage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F51B5',
    flexDirection: 'column',
    paddingTop: 25
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  text: {
    color: 'white',
    paddingHorizontal: 8,
    fontSize: 16
  },
  rowStyle: {
    paddingVertical: 20,
    paddingLeft: 16,
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#E0E0E0',
    borderWidth: 1
  },
  rowText: {
    color: '#212121',
    fontSize: 16
  },
  subText: {
    fontSize: 14,
    color: '#757575'
  },
  section: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 6,
    backgroundColor: '#2196F3'
  }
});


AppRegistry.registerComponent("dongFang", () => dongFang);