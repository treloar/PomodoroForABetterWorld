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

  initCharityBoxes() {
    const charityNames = [
      "United Way Worldwide",
      "Task Force for Global Health",
      "Feeding America",
      "Salvation Army",
      "St. Jude Children's Research Hospital",
      "Habitat for Humanity International"
    ];

    return (
      <View style={this.styles.charityContainer}>
        {
          charityNames.map((name, i) => (
            <CharityBox key={i} id={i} onPress={this.selectCharity} name={name} />
          ))
        }
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>Hello world</Text>
        { this.initCharityBoxes() }
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

