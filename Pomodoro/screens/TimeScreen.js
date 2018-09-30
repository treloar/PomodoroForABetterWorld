import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
    timeButton: {
        //width: Dimensions.get('window').width * 1/2,
        //height: Dimensions.get('window').height * 1/6,
        //marginLeft: Dimensions.get('window').width * 1/3,
        //marginRight: Dimensions.get('window').width * 1/3,
    },
	button: {
		alignItems: 'center',
		backgroundColor: '#FC152B',
		padding: 20,
		borderRadius: 100,
		marginHorizontal: 10,
		borderBottomWidth: 4,
		borderBottomColor: 'black',
		borderRightWidth: 4,
		borderRightColor: 'black',
		borderLeftWidth: 4,
		borderLeftColor: 'black',
		borderTopWidth: 4,
		borderTopColor: 'black',
	},
	buttonText: {
		fontSize: 24,
	},
	tomatoImage: {
		width: 150,
		height: 150,
		marginBottom: 30,
	},
	timeContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: Dimensions.get('window').height,
        backgroundColor: "#FFDCBA",
		alignItems: 'center'
    },
});

export class TimeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  press = (time) => this.props.start(time);   

  render() {
      return (
              <View style={styles.timeContainer}>
				  <Image style={styles.tomatoImage} source={require('../img/tomato.png')}/>
				  <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
					  <View style={styles.timeButton}>
						<TouchableHighlight style={styles.button} onPress={() => this.press(10)}>
							<Text style={styles.buttonText}>10</Text>
						</TouchableHighlight>
					  </View>
					  <View style={styles.timeButton}>
						<TouchableHighlight style={styles.button} onPress={() => this.press(25)}>
							<Text style={styles.buttonText}>25</Text>
						</TouchableHighlight>
					  </View>
					  <View style={styles.timeButton}>
						<TouchableHighlight style={styles.button} onPress={() => this.press(60)}>
							<Text style={styles.buttonText}>60</Text>
						</TouchableHighlight>
					  </View>
			      </View>
              </View>
             );
  }
}

