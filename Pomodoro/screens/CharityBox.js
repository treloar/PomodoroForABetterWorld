import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';


export class CharityBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
            <Text style={this.styles.charitybox}>{this.props.name}</Text>
        </View>
    );
  }

  styles = StyleSheet.create({
    charitybox: {
      color: 'white',
      backgroundColor: 'lightblue',
      height: 150,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 15,
      width: Dimensions.get('window').width / 2.5,
    }
  });
}

export default CharityBox;