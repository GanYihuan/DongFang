import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';


export default class dongFang extends Component {
  render() {
    return (
        <View style={styles.flex}>
          <Header/>
          <List title='aaaaaaaaaaaaaaa'/>
          <List title='bbbbbbbbbbbbbbb'/>
          <List title='ccccccccccccccc'/>
          <List title='ddddddddddddddd'/>
          <ImportantNews
              news={[
                '11111111111111',
                '22222222222222',
                '33333333333333',
                '44444444444444'
              ]}
          >
          </ImportantNews>
        </View>
    );
  }
}


class Header extends Component {
  render() {
    return (
        <View style={styles.flex2}>
          <Text style={styles.font}>
            <Text style={styles.font_1}>网易</Text>
            <Text style={styles.font_2}>新闻</Text>
            <Text>有态度"</Text>
          </Text>
        </View>
    );
  }
}


class List extends Component {
  render() {
    return (
        <View style={styles.list_item}>
          <Text style={styles.list_item_font}>{this.props.title}</Text>
        </View>
    );
  }
}


class ImportantNews extends Component {
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
}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  list_item: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  list_item_font: {
    fontSize: 16,
  },
  news_item: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 40,
  },
  news_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CD1D1C',
    marginLeft: 10,
    marginTop: 15,
  },
  flex2: {
    marginTop: 25,
    height: 50,
    borderBottomWidth: 3 / PixelRatio.get(),
    borderBottomColor: '#EF2D36',
    alignItems: 'center',
  },
  font: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  font_1: {
    color: '#CD1D1C',
  },
  font_2: {
    color: '#FFF',
    backgroundColor: '#CD1D1C',
  },
});


AppRegistry.registerComponent('dongFang', () => dongFang);
