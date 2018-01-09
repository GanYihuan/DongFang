
#59、手把手教React Native实战之通用Tab组件react-native-scrollable-tab-view初探

既然是通用就适配android&IOS

开源项目地址：https://github.com/skv-headless/react-native-scrollable-tab-view

当前项目目录：npm i react-native-scrollable-tab-view --save --force

导入：import ScrollableTabView from 'react-native-scrollable-tab-view';

属性介绍：

1.renderTabBar renderTabBar={() => <DefaultTabBar/>}

TabBar的样式，系统提供了两种默认的，分别是DefaultTabBar和ScrollableTabBar，也可以自定义

每个被包含的子视图需要使用tabLabel属性，表示对应Tab显示的文字

DefaultTabBar：Tab会平分在水平方向的空间

ScrollableTabBar：Tab可以超过屏幕范围，滚动可以显示


2.tabBarPosition 位置默认为'top'

tabBarPosition='top' ['top','bottom','overlayTop','overlayBottom']

3.onChangeTab

Tab切换之后会触发此方法，包含一个参数（Object类型），这个对象有两个参数
i：被选中的Tab的下标（从0开始）
ref：被选中的Tab对象（基本用不到）

4.onScroll

视图正在滑动的时候触发此方法，包含一个Float类型的数字，范围是[0, tab数量-1]

5.locked

表示手指是否能拖动视图，默认为false（表示可以拖动）。设为true的话，我们只能“点击”Tab来切换视图。locked={false}

6.initialPage 初始化时被选中的Tab下标，默认是0（即第一页）

7.page(Integer) 设置选中指定的Tab 作者打算废除

8.children(ReactComponents) 表示所有子视图的数组

9.tabBarUnderlineColor(String) 

设置DefaultTabBar和ScrollableTabBarTab选中时下方横线的颜色

10.tabBarBackgroundColor(String)

设置整个Tab这一栏的背景颜色

11.tabBarActiveTextColor(String)

设置选中Tab的文字颜色

12.tabBarInactiveTextColor(String)

设置未选中Tab的文字颜色

13.tabBarTextStyle(Object)

设置Tab文字的样式，比如字号、字体等

14.style (View.propTypes.style)  系统View都拥有的属性

15.contentProps(Object)  react-native-scrollable-tab-view的实现，其实在Android平台底层用的是ViewPagerAndroid，iOS平台用的是ScrollView。这个属性的意义是：比如我们设置了某个属性，最后这个属性会被应用在ScrollView/ViewPagerAndroid，这样会覆盖库里面默认的，通常官方不建议我们去使用。

16.scrollWithoutAnimation(Bool，默认为false) 

设置“点击”Tab时，视图切换是否有动画，默认为false（即：有动画效果）这个属性的设置对滑动视图切换的动画效果没有影响，仅仅对“点击”Tab效果有作用

17.prerenderingSiblingsNumber(Integer，默认为0)

预渲染附件视图的个数 为0只渲染当前页



##59、配套视频(下载地址)：http://www.reactnative.vip/thread-289-1-1.html