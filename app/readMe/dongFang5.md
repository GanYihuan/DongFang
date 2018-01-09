#
## keyboardType
```
<TextInput
  keyboardType="web-search"
  placeholder="请输入关键词"
  value={this.state.value}
  onChangeText={this.getValue.bind(this)}
/>
```


## numberOfLines
## this.hide.bind(this, this.state.value)
```
<Text
  style={styles.item}
  onPress={this.hide.bind(this, this.state.value + '加东方QQ')}
  numberOfLines={1}
>
```
 
 
## 控制状态
```
constructor(props) {
    super(props);
    this.setState({
        show: false,
        value: null
    });
}
...
{
    this.state.show
        ?
        <View>
            <Text
                style={styles.item}
                onPress={this.hide.bind(this, this.state.value)}
                numberOfLines={1}
            >
                {this.state.value} a
            </Text>
        </View>
        : null;
}
...
hide(val) {
    this.setState({
        show: false,
        value: val,
    });
}
```