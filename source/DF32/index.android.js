import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// let RNFS = require('react-native-fs');
import RNFS from 'react-native-fs';
let downloadUrl = 'http://www.reactnative.vip/img/reactnative.png';
let downloadUrl_big_file = 'http://www.reactnative.vip/data/dongfang.apk';
let jobId1 = -1, jobId2 = -1;
let testImage1Path = RNFS.PicturesDirectoryPath + '/test-image-11.png';


class dongFang32 extends Component {
  constructor(props) {
    super(props);//这一句不能省略，照抄即可
    this.state = {
      output: '文档目录路径: ' + RNFS.DocumentDirectoryPath,
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.state.output}</Text>
          <Text style={styles.welcome}>
            Welcome to React Native!fs文件管理
          </Text>
          <Text style={{fontSize: 30}} onPress={this.basic}>列出文件</Text>
          <Text style={{fontSize: 30}} onPress={this.createFile}>创建文件</Text>
          <Text style={{fontSize: 30}} onPress={this.delFile}>删除文件</Text>
          <Text style={{fontSize: 30}} onPress={this.printPath}>输出各种路径</Text>
          <Text style={{fontSize: 30}} onPress={this.downloadFile.bind(this, true, downloadUrl_big_file)}>下载文件</Text>
          <Text style={{fontSize: 30}} onPress={this.stopDownload}>停止下载</Text>
          <Text style={{fontSize: 30}} onPress={this.getFileInfo}>获取文件大小信息</Text>
          <Text style={{fontSize: 30}} onPress={this.uploadFile}>上传文件ios</Text>
          <Text style={{fontSize: 30}} onPress={this.stopUpload}>停止上传ios</Text>
        </View>
    );
  }

  downloadFile(background, url) {
    // alert('下载文件'+background+url);
    let progress = data => {
      let percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
      let text = `进度 ${percentage}%`;
      this.setState({output: text});
    };
    let begin = res => {
      jobId1 = res.jobId;
    };
    let progressDivider = 1;

    RNFS.downloadFile({
      fromUrl: url,
      toFile: testImage1Path,
      begin,
      progress,
      background,
      progressDivider
    }).then(res => {
      this.setState({output: JSON.stringify(res)});
    }).catch(err => this.showError(err));
  }

  stopDownload = () => {
    RNFS.stopDownload(jobId1);
  }

  stopUpload = () => {

  }

  getFileInfo = () => {
    return RNFS.getFSInfo().then(info => {
      this.setState({output: JSON.stringify(info)});
    });
  }

  basic = () => {
    //  alert('basic');
    // get a list of files and directories
    RNFS.readDir(RNFS.PicturesDirectoryPath)
        .then((result) => {
          console.log('GOT RESULT', result);
          // stat the first file
          return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
          if (statResult[0].isFile()) {
            // if we have a file, read it
            return RNFS.readFile(statResult[1], 'utf8');
          }
          return 'no file';
        })
        .then((contents) => {
          // log the file contents
          console.log('文件内容-' + contents);
        })
        .catch((err) => {
          console.log('错误：' + err.message);
          console.log(err.message, err.code);
        });
  }

  createFile = () => {
    // create a path you want to write to
    let path = RNFS.PicturesDirectoryPath + '/test.txt';
    // write the file
    RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
        .then((success) => {
          console.log('FILE WRITTEN!目录是-' + path);
        })
        .catch((err) => {
          console.log(err.message);
        });
  }

  delFile = () => {
    // create a path you want to delete
    let path = RNFS.PicturesDirectoryPath + '/test.txt';
    return RNFS.unlink(path)
        .then(() => {
          console.log('FILE DELETED');
        })
        // `unlink` will throw an error, if the item to unlink does not exist
        .catch((err) => {
          console.log(err.message);
        });
  }

  uploadFile = () => {
    let uploadUrl = 'http://requestb.in/1mhbfei1';  // For testing purposes, go to http://requestb.in/ and create your own link
    // create an array of objects of the files you want to upload
    let files = [
      {
        name: 'test1',
        filename: 'test1.w4a',
        filepath: RNFS.PicturesDirectoryPath + '/test1.w4a',
        filetype: 'audio/x-m4a'
      }, {
        name: 'test2',
        filename: 'test2.w4a',
        filepath: RNFS.PicturesDirectoryPath + '/test2.w4a',
        filetype: 'audio/x-m4a'
      }
    ];
    let uploadBegin = (response) => {
      let jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };
    let uploadProgress = (response) => {
      let percentage = Math.floor((response.totalBytesSent / response.totalBytesExpectedToSend) * 100);
      console.log('UPLOAD IS ' + percentage + '% DONE!');
    };

    // upload files
    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      fields: {
        'hello': 'world',
      },
      begin: uploadBegin,
      progress: uploadProgress
    }).then((response) => {
      if (response.statusCode == 200) {
        console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
      } else {
        console.log('SERVER ERROR');
      }
    }).catch((err) => {
      if (err.description === "cancelled") {
        // cancelled by user
      }
      console.log(err);
    });
  }

  printPath = () => {
    console.log('主要bundle目录-' + RNFS.MainBundlePath);//undefined
    console.log('缓存目录-' + RNFS.CachesDirectoryPath);
    console.log('文档目录-' + RNFS.DocumentDirectoryPath);
    console.log('临时目录ios-' + RNFS.TemporaryDirectoryPath);//null
    console.log('外部存储目录android-' + RNFS.ExternalDirectoryPath);
    console.log('图片目录-' + RNFS.PicturesDirectoryPath);
  }
}


const styles = StyleSheet.create({
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
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
});


AppRegistry.registerComponent('dongFang32', () => dongFang32);
