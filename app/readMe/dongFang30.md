#
## 路由
```
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
```


## ScrollableTabView
```
        <ScrollableTabView
            renderTabBar={() => <ScrollableTabBar/>}
            tabBarPosition='overlayTop'
            onChangeTab={(obj) => {
              console.log('被选中的tab下标：' + obj.i);
            }}
            onScroll={(position) => {
              console.log('滑动时的位置：' + position);
            }}
            locked={false}
            initialPage={3}
            tabBarUnderlineColor={'#f00'}
            tabBarBackgroundColor={'#0f0'}
            tabBarTextStyle={{fontSize: 18}}
            prerenderingSiblingsNumber={1}
        >
```