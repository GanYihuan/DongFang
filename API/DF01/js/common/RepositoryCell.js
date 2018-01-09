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


export default class RepositoryCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFaverite: this.props.projectModel.isFavorite,
      favoriteIcon: this.props.projectModel.isFavorite
          ? require('../../res/images/star36_on@3x.png')
          : require('../../res/images/star36_off@3x.png')
    }
  }

  setFavoriteState(isFavorite) {
    this.setState({
      isFavorite: isFavorite,
      favoriteIcon: isFavorite
          ? require('../../res/images/star36_on@3x.png')
          : require('../../res/images/star36_off@3x.png')
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setFavoriteState(nextProps.projectModel.isFavorite);
  }

  onPressFavorite() {
    this.setFavoriteState(!this.state.isFavorite);
    this.props.onFavorite(this.props.projectModel.item, !this.state.isFavorite);
  }

  render() {
    let item = this.props.projectModel.item
        ? this.props.projectModel.item
        : this.props.projectModel;
    let favoriteButton = <TouchableOpacity
        onPress={() => this.onPressFavorite()}
    >
      <Image
          style={{width: 22, height: 22}}
          source={this.state.favoriteIcon}
      />
    </TouchableOpacity>

    return (
        <TouchableOpacity
            style={[styles.container, styles.cell_container]}
            onPress={this.props.onSelect}
        >
          <View style={{margin: 10}}>
            <Text style={styles.title}>{item.full_name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Author:</Text>
                <Image
                    style={[{height: 22, width: 22}, {tintColor: '#2196F3'}]}
                    source={{uri: item.owner.avatar_url}}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Stars:</Text>
                <Text>{item.stargazers_count}</Text>
              </View>
              {favoriteButton}
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

