#
## ActionSheetIOS
```
ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['拨打电话', '发送邮件', '发送短信', '取消'],
          cancelButtonIndex: 3,
          destructiveButtonIndex: 0,
          title: '做何操作?',
          message: '要想清楚',
        },
        function (index) {
          alert(index);
        }
    );
    
    
ActionSheetIOS.showShareActionSheetWithOptions(
        {
          message: '东方耀论坛',
          url: 'http://www.reactnative.vip/'
        },
        function (err) {
          alert(err);
        },
        function (suc) {
          alert(suc);
        }
    );    
```


