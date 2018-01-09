import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    PixelRatio
} from 'react-native';


class Box extends Component {
  render() {
    return (
        <View style={[styles.box, styles[this.props.width], styles[this.props.height]]}>
          <View style={[styles.top, styles.height50, styles[this.props.classBg]]}>
            <Text>top</Text>
          </View>
          <View style={[styles[this.props.childName]]}>
            <View style={[styles.left, styles[this.props.classBg]]}>
              <Text>left</Text>
            </View>
            {this.props.children}
            <View style={[styles.right, styles[this.props.classBg]]}>
              <Text>right</Text>
            </View>
          </View>
          <View style={[styles.bottom, styles.height50, styles[this.props.classBg]]}>
            <Text>bottom</Text>
          </View>
          <View style={[styles.label]}>
            <Text>{this.props.boxName}</Text>
          </View>
        </View>
    )
  }
}


class MargginBox extends Component {
  render() {
    return (
        <View style={[styles.margginBox]}>
          {/* this.props : childName */}
          <Box
              childName="borderBox"
              height="height400"
              width="width400"
              boxName="margin"
              classBg="bgred"
          >
            {this.props.children}
          </Box>
        </View>
    )
  }
}


class BorderBox extends Component {
  render() {
    return (
        <Box
            childName="paddingBox"
            height="height300"
            width="width300"
            boxName="border"
            classBg="bggreen"
        >
          {this.props.children}
        </Box>
    )
  }
}


class PaddingBox extends Component {
  render() {
    return (
        <Box
            childName="elementBox"
            height="height200"
            width="width200"
            boxName="padding"
            classBg="bgyellow"
        >
          {this.props.children}
        </Box>
    )
  }
}


class ElementBox extends Component {
  render() {
    return (
        <View style={[styles.box, styles.height100]}>
          <View style={[styles.measureBox]}>
            <View style={[styles.right]}>
              <Text>height</Text>
            </View>
          </View>
          <View style={[styles.bottom, styles.height50]}>
            <Text>width</Text>
          </View>
          <View style={[styles.label]}>
            <Text>element</Text>
          </View>
          <View style={[styles.widthdashed]}></View>
          <View style={[styles.heightdashed]}></View>
        </View>
    )
  }
}


export default class dongFang extends Component {
  render() {
    return (
        <MargginBox>
          <BorderBox>
            <PaddingBox>
              <ElementBox></ElementBox>
            </PaddingBox>
          </BorderBox>
        </MargginBox>
    )
  }
}


const styles = StyleSheet.create({
  height50: {
    height: 50,
  },
  height400: {
    height: 400,
  },
  height300: {
    height: 300,
  },
  height200: {
    height: 200,
  },
  height100: {
    height: 100,
  },
  width400: {
    width: 400,
  },
  width300: {
    width: 300,
  },
  width200: {
    width: 200,
  },
  width100: {
    width: 100,
  },
  bgred: {
    backgroundColor: '#AF597A',
  },
  bggreen: {
    backgroundColor: '#94BEAA',
  },
  bgyellow: {
    backgroundColor: '#767878',
  },
  box: {
    flex: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 2,
    backgroundColor: '#FDC72F',
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    width: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  right: {
    width: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heightdashed: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 20,
    borderLeftWidth: 1,
    borderLeftColor: '#FDC72F',
  },
  widthdashed: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 25,
    borderTopWidth: 1,
    borderTopColor: '#FDC72F',
  },
  yellow: {
    color: '#767878',
    fontWeight: '900',
  },
  white: {
    color: 'white',
    fontWeight: '900',
  },
  margginBox: {
    position: 'absolute',
    top: 100,
    paddingLeft: 6,
    paddingRight: 6,
  },
  borderBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  paddingBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  elementBox: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  measureBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});


AppRegistry.registerComponent('dongFang', () => dongFang);
