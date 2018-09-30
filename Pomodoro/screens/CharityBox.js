import React from 'react';
import {
  View,
  Text,
  StyleSheet,
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
      color: 'black',
      backgroundColor: 'lightblue',
      borderRadius: 50,
    }
  });
}

export default CharityBox;