import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import CharityBox from './CharityBox';


export class CharityScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  goToTimeScreen = () => {
    this.props.nav('time');   
  }

  render() {
    return (
      <View>
        <Text>Charity screen!</Text>
        <View style={this.styles.charityContainer}>
          <CharityBox name="Salvation Army"/>
          <CharityBox name="Habitat for Humanity"/>
          <CharityBox name="YMCA"/>
        </View>
        <Button onPress={this.goToTimeScreen} title="Click me to go to time!"></Button>
      </View>
    );
  }

  styles = StyleSheet.create({
    charityContainer: {
      
    },
  });
}

