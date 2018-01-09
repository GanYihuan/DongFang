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



          <View style={styles.flex}>
            <View style={styles.container}>
              <View style={[styles.item, styles.center]}>
                <Text style={styles.font}>酒店</Text>
              </View>
              <View style={[styles.item, styles.lineLeftRight]}>
                <View style={[styles.center, styles.flex, styles.lineCenter]}>
                  <Text style={styles.font}>海外酒店</Text>
                </View>
                <View style={[styles.center, styles.flex]}>
                  <Text style={styles.font}>特惠酒店</Text>
                </View>
              </View>
              <View style={styles.item}>
                <View style={[styles.center, styles.flex, styles.lineCenter]}>
                  <Text style={styles.font}>团购</Text>
                </View>
                <View style={[styles.center, styles.flex]}>
                  <Text style={styles.font}>客栈，公寓</Text>
                </View>
              </View>
            </View>
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


class dongFang1 extends Component {
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
    backgroundColor: '#6AC5AC',
  },
  bggreen: {
    backgroundColor: '#414142',
  },
  bgyellow: {
    backgroundColor: '#D64078',
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
    paddingTop: 0,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 0,
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
  right: {
    width: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  left: {
    width: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heightdashed: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    right: 20,
    borderLeftWidth: 1,
    borderLeftColor: '#FDC72F',
  },
  widthdashed: {
    position: 'absolute',
    right: 0,
    bottom: 25,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: '#FDC72F',
  },
  yellow: {
    color: '#FDC72F',
    fontWeight: '900',
  },
  white: {
    color: 'white',
    fontWeight: '900',
  },
  margginBox: {
    position: 'absolute',
    top: 100,
    paddingLeft: 7,
    paddingRight: 7,
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





  flex: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginTop: 200,
    marginLeft: 5,
    marginRight: 5,
    padding: 2,
    height: 84,
    borderRadius: 5,
    backgroundColor: '#FF0067',
  },
  item: {
    flex: 1,
    height: 80,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lineLeftRight: {
    // 最小线宽 1/PixelRatio.get()
    borderLeftWidth: 1 / PixelRatio.get(),
    borderRightWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
  lineCenter: {
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: '#fff',
  },
});


AppRegistry.registerComponent('dongFang1', () => dongFang1);
