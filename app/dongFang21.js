import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DatePickerIOS,
} from 'react-native';


export default class dongFang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date1: new Date(),
      date2: new Date(),
      date3: new Date(),
    };
  }

  //const timeZoneOffsetInHours=(-1)*(new Date()).getTimezoneOffset()/60;

  onDateChange1(date) {
    this.setState({
      date1: date,
    });
  }

  onDateChange2(date) {
    this.setState({
      date2: date,
    });
  }

  onDateChange3(date) {
    this.setState({
      date3: date,
    });
  }

  render() {
    return (
        <View style={styles.container}>
          <DatePickerIOS
              style={styles.flex}
              date={this.state.date1}
              mode="datetime"
              onDateChange={d => this.onDateChange1(d)}
          />
          <DatePickerIOS
              style={styles.flex}
              date={this.state.date2}
              mode="time"
              onDateChange={d => this.onDateChange2(d)}
          />
          <DatePickerIOS
              style={styles.flex}
              date={this.state.date3}
              mode="date"
              onDateChange={d => this.onDateChange3(d)}
          />
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  item: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    height: 30,
    borderWidth: 1,
    padding: 6,
    borderColor: '#ddd',
  }
});


AppRegistry.registerComponent('dongFang', () => dongFang);
