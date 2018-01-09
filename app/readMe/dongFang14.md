#
## ListView
```
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
  
  
  <ListView
        style={styles.listview}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
    />
```


## 如何填数据
```
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
```