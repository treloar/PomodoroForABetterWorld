import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';


export class CharityBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={this.styles.charityBox}>
        <Text onPress={() => this.props.onPress(this.props.id)} style={this.styles.charityName}>{this.props.name}</Text>
        <View>
          <Image source={this.props.image} style={this.styles.charityImage} resizeMode="contain" />
        </View>
      </View>
    );
  }

  styles = StyleSheet.create({
    charityBox: {
      height: 175,
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 15,
      alignItems: 'center',
      backgroundColor: 'lightblue',
      width: Dimensions.get('window').width / 2.5,
    },
    charityName: {
      color: 'white',
      textAlign: 'center',
    },
    charityImage: {
      alignSelf: 'stretch',
      flex: 1,
      marginTop: 10,
      marginBottom: 40,
    },
  });
}

export default CharityBox;