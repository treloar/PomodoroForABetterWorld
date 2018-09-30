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
        <Text>Hello world</Text>
        <View style={this.styles.charitycontainer}>
          <CharityBox name="United Way Worldwide"/>
          <CharityBox name="Task Force for Global Health"/>
          <CharityBox name="Feeding America"/>
          <CharityBox name="Salvation Army"/>
          <CharityBox name="St. Jude Children's Research Hospital"/>
          <CharityBox name="Habitat for Humanity International"/>
        </View>
        <Button onPress={this.goToTimeScreen} title="Select Charity"></Button>
      </View>
    );
  }

  styles = StyleSheet.create({
    charitycontainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }
  });
}

