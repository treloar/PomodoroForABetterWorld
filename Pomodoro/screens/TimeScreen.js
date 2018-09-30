import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
} from 'react-native';


export class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        time: 25,
    }
  }

  press = () => this.props.start(this.state.time);   

  nonNumericToNumeric = text =>
    text.split('').filter(c => '0123456789'.indexOf(c) > -1).join('');

  onChanged = text => {
    this.setState({
        time: this.nonNumericToNumeric(text),
    });
  };

  render() {
      return (
              <View>
              <Text> Time screen! </Text>
              <Button onPress={this.press} title="Click me to go to charity!"></Button>
              <TextInput 
              keyboardType='numeric'
              onChangeText={this.onChanged}
              value={this.state.time.toString()}
              onSubmitEditing={this.press}
              /> 
              </View>
             );
  }
}

