#
## StackNavigator
```
    const {params} = this.props.navigation.state;
    
    
    
```


```
// 传参数 
    const {navigate} = this.props.navigation;

    if (navigate) {
      navigate('Chat', {
        author: that.state.author,
        id: that.state.id,
        // 从ChatScreen获取user
        getUser: function (user) {
          that.setState({
            user: user
          })
        }
      })
    }
```


```
// 转换为string对象
{JSON.stringify(this.state.user)}
```


```
// _表示这个方法不会自己调用,需要其他方式调用
_pressButton() {
    // 进入其他函数用this时,要用that来确定作用域
    const that = this;
    // navigate required!
    const {navigate} = this.props.navigation;

    if (navigate) {
      navigate('Chat', {
        author: that.state.author,
        id: that.state.id,
        // 从Chat获取user
        getUser: function (user) {
          that.setState({
            user: user
          })
        }
      })
    }
  }
```
