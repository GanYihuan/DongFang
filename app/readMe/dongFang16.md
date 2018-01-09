#
## fetch
```
  componentDidMount() {
    this.fetchData();
  }

fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true
          });
        })
        .done();
    //调用了done() —— 这样可以抛出异常而不是简单忽略
```


## ListView
```
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }
  
  
  <ListView
      style={styles.listView}
      contentContainerStyle={styles.list}
      dataSource={this.state.dataSource}
      renderRow={this.renderMovie}
  />
```




