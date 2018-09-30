import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


export class CharityBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.id)}>
        <View onPress={this.trigger} style={this.styles.charityBox}>
          <Text style={this.styles.charityName}>{this.props.name}</Text>
          <View>
            <Image 
              source={this.props.image} 
              style={this.styles.charityImage} 
              resizeMode="contain" 
            />
          </View>
        </View>
      </TouchableOpacity>
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
      width: Dimensions.get('window').width / 2.25,
    },
    charityName: {
      color: 'white',
      textAlign: 'center',
    },
    charityImage: {
      flex: 1,
      alignSelf: 'stretch',
      marginTop: 10,
      marginBottom: 40,
    },
  });
}

export default CharityBox;