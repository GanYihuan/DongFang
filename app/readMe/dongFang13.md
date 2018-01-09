#
## Dimensions
```
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
```


## WebView
```
    <WebView
          style={{height: height, width: width}}
          source={{uri: 'http://www.baidu.com'}}
          injectedJavaScript={"alert('我是东方耀')"}
      >
        {/* injectedJavaScript注入js */}
      </WebView>
```
