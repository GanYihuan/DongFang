#
## Image
```
resizeMode
决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。
cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白
stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸。仅iOS可用。
center: 居中不拉伸。

<Image
    style={styles.img}
    resizeMode="contain"
    source={{uri: this.state.imgs[this.state.count]}}
/>
``` 


## bind this
```
<TouchableOpacity onPress={this.goPreview.bind(this)}>

  goPreview() {
  // 发生了this传递,所以要bind(this)
    let count = this.state.count;
    count--;
    if (count >= 0) {
      this.setState({
        count: count,
      });
    }
  }
```
