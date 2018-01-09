import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu.js';


const uri_image_menu = 'http://image18-c.poco.cn/mypoco/myphoto/20160605/09/17351665220160605093956066.png';


export default class dongFang1 extends Component {
  // state = {
  //     isOpen: false,
  //     selectedItem: 'About',
  // };
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;
    return (
        <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}
        >
          <View style={styles.container}>
            <Text style={[styles.instructions, {color: '#f00'}]}>
              当前选中的菜单是: {this.state.selectedItem}
            </Text>
          </View>
          <Button style={styles.button} onPress={() => this.toggle()}>
            <Image source={{uri: uri_image_menu, width: 32, height: 32,}}/>
          </Button>
        </SideMenu>
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({
      isOpen: isOpen
    });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }
}


class Button extends Component {
  render() {
    return (
        <TouchableOpacity
            onPress={this.handlePress.bind(this)}
            style={this.props.style}
        >
          <Text>{this.props.children}</Text>
        </TouchableOpacity>
    );
  }

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }
}


const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// alert(AppRegistry.runApplication);
AppRegistry.registerComponent('dongFang1', () => dongFang1);
