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

  selectCharity = (id) => {
    alert("You have selected charity with id = " + id);
    this.goToTimeScreen();
  }

  goToTimeScreen = () => {
    this.props.nav('time');
  }

  render() {
    return (
      <View>
        <Text>Hello world</Text>
        <View style={this.styles.charityContainer}>
          <CharityBox id={1} onPress={this.selectCharity} name="United Way Worldwide"/>
          <CharityBox id={2} onPress={this.selectCharity} name="Task Force for Global Health"/>
          <CharityBox id={3} onPress={this.selectCharity} name="Feeding America"/>
          <CharityBox id={4} onPress={this.selectCharity} name="Salvation Army"/>
          <CharityBox id={5} onPress={this.selectCharity} name="St. Jude Children's Research Hospital"/>
          <CharityBox id={6} onPress={this.selectCharity} name="Habitat for Humanity International"/>
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    charityContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }
  });
}

