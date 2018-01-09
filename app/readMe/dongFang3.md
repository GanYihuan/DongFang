#
## 数组填充数据
```
render() {
    let news = [];
    for (let i in this.props.news) {
      let text = (
          <Text
              key={i}
              style={styles.news_item}
              numberOfLines={2}
              onPress={this.show.bind(this, this.props.news[i])}
          >
            {this.props.news[i]}
          </Text>
      );
      news.push(text);
    }

    return (
        <View style={styles.flex}>
          <Text style={styles.news_title}>今日要闻</Text>
          {news}
        </View>
    );
  }

  show(title) {
    alert(title);
  }
```


