import React from 'react';
import {
  View,
  Text,
  StyleSheet,
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

    const charityLogos = [
      require("../img/united-way-worldwide.png"),
      require("../img/task-force-for-global-health.png"),
      require("../img/feeding-america.png"),
      require("../img/salvation-army.png"),
      require("../img/st-jude-childrens-research-hospital.png"),
      require("../img/habitat-for-humanity-international.png")
    ];

    return (
      <View style={this.styles.charityContainer}>
        {
          charityNames.map((name, i) => (
            <CharityBox 
              key={i} 
              id={i} 
              onPress={this.selectCharity} 
              name={name} 
              image={charityLogos[i]}
            />
          ))
        }
      </View>
    );
  }
s
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

