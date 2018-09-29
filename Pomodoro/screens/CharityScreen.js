import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';


export class CharityScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  press = () => {
    this.props.nav('time');   
  };

  render() {
      return (
              <View>
              <Text> Charity screen! </Text>
              <Button onPress={this.press} title="Click me to go to time!"></Button>
              </View>
             );
  }
}

