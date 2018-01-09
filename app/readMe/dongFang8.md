#
## ActivityIndicator
取代 ProgressBarAndroid
```
<Picker
  mode="dialog"
  //默认选中的值。可以是字符串或整数。
  selectedValue={this.state.language}
  //某一项被选中时执行此回调。调用时带有如下参数：
  onValueChange={(e) => this.setState({language: e})}
>
    <Picker.Item label="Java" value="java"/>
    <Picker.Item label="JavaScript" value="js"/>
    <Picker.Item label="C" value="c"/>
    <Picker.Item label="PHP开发" value="php"/>
</Picker>
<Text>{this.state.language}</Text>
<ActivityIndicator styleAttr="LargeInverse" />
```