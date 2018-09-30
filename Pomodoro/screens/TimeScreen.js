import React from 'react';
import {
  View,
  Button,
  Text,
} from 'react-native';


export class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  press = () => {
    this.props.start(15);   
  };

  render() {
    return (
              <View>
              <Text> Time screen! </Text>
              <Button onPress={this.press} title="Click me to go to charity!"></Button>
              </View>
    );
  }
}

