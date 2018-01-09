# ?
android-mirror.bugly.qq.com


# Project structrue
/Users/ganyihuan/Library/Android/sdk
/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home
/Users/ganyihuan/Library/Android/sdk/ndk-bundle


# 手把手Android ios环境 part3 不用执行
JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_144.jdk/Contents/Home
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:JAVA_HOME/lib/tools.jar
ANDROID_HOME=/Users/ganyihuan/Library/Android/sdk
GRADLE_HOME=/Users/ganyihuan/Library/Android/gradle-3.3
PATH=$JAVA_HOME/bin:$PATH:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$GRADLE_HOME/bin:

export ANDROID_HOME
export JAVA_HOME
export CLASSPATH
export GRADLE_HOME
export PATH

# 不用执行
> open -e gradle-wrapper.properties
> distributionUrl=file:///Users/ganyihuan/Library/Android/gradle-3.3-all.zip



# 
cd ~
ls -l -a
touch .bash_profile
open -e .bash_profile
echo $PATH

(执行设置好的环境变量)
source ~/.bash_profile 
adb devices
gradle -v
java -version



- two update
- package.json
"dependencies": {
    "react": "^16.0.0-alpha.12",
    "react-native": "0.47.1"
},
"devDependencies": {
    "babel-jest": "20.0.3",
    "babel-preset-react-native": "2.1.0",
    "jest": "20.0.4",
    "react-test-renderer": "16.0.0-alpha.12"
},
- create assets file in /Users/ganyihuan/Documents/web/Code/React/handinhand/dongFangA/android/app/src/main/assets
- (进入项目的根目录下执行) 
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/



# Navigator需要低版本react-native
- Navigator
"dependencies": {
    "react": "16.0.0-alpha.6",
    "react-native": "0.43.0"
},
"devDependencies": {
    "babel-jest": "19.0.0",
    "babel-preset-react-native": "1.9.1",
    "jest": "19.0.2",
    "react-test1819-renderer": "16.0.0-alpha.6"
},



# replace shake the phone
adb shell input keyevent 82



# set phone ip
192.168.11.102:8081
192.168.1.114:8081



---
# run android
> react-native start
> update 2(android studio)
> android studio(run)



adb reverse tcp:8081 tcp:8081






# react-native run-android
- npm install
    "react": "16.0.0-alpha.6",
    "react-native": "0.43.0",
- android studio (open)
- update 2(android studio)
- react-native start
- run in android-studio(AVD)
- source ~/.bash_profile
- adb devices
- react-native run-android(真机)




# android simulator, genymotion
commad + m -> reload

