/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import HTMLView from 'react-native-htmlview';


export default class TrendingCell extends Component {
  render() {
    let data = this.props.data;
    let description =
        '<p>' +
        'data.description' +
        '</p>';

    return (
        <TouchableOpacity
            style={[styles.container, styles.cell_container]}
            onPress={this.props.onSelect}
        >
          <View style={{margin: 10}}>
            <Text style={styles.title}>{data.fullName}</Text>
            <HTMLView
                value={description}
                stylesheet={{
                  // p标签样式
                  p: styles.description,
                  a: styles.description
                }}
                onLinkPress={(url) => {
                  // when click the link
                }}
            />
            <Text style={styles.description}>{data.meta}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.description}>Build by:</Text>
                {
                  data.contributors.map((result, i, arr) => {
                    return (
                        <Image
                            key={i}
                            style={{height: 22, width: 22}}
                            source={{uri: arr[i]}}
                        />
                    )
                  })
                }
              </View>
              <Image
                  style={{width: 22, height: 22}}
                  source={require('../../res/images/icon_tabbar_mine_selected.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 14,
    marginBottom: 2,
    color: '#212121'
  },
  description: {
    fontSize: 14,
    marginBottom: 2,
    color: '#757575',
    borderRadius: 2
  },
  cell_container: {
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 4,
    borderWidth: 0.5,
    shadowColor: '#ccc',
    shadowOpacity: 0.4,
    shadowRadius: 1,
    shadowOffset: {width: 0.5, height: 0.5}
  }
});

