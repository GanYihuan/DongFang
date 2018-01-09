#
## SideMenu
```
import SideMenu from 'react-native-side-menu';

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
```


## 组件通信
```
    // 2: onItemSelected 被启动, 调用this.onMenuItemSelected方法
    const menu = <Menu onItemSelected={this.onMenuItemSelected}/>;
    

    export default class Menu extends Component {
      static propTypes = {
        // require
        onItemSelected: React.PropTypes.func.isRequired,
      };
        <Text
            style={styles.item}
            // 1: 触发
            onPress={() => this.props.onItemSelected('关于作者')}
        >
```


## ScrollView
```
        <ScrollView
            style={styles.menu}
            // 当此值为true时，点击状态栏的时候视图会滚动到顶部。默认值为true。
            scrollsToTop={false}
        >
```


## window.width/height
```
const window = Dimensions.get('window');

  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
  }
```