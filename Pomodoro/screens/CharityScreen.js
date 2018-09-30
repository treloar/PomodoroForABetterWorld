import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CharityBox from './CharityBox';
//import Stripe from 'react-native-stripe-api';

export class CharityScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  selectCharity = (id) => {
    //alert("You have selected charity with id = " + id);
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
      <View>
        <Text style={this.styles.charityText}>Pick your favorite charity!</Text>
        <View style={this.styles.charityBoxesContainer}>
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
      </View>
    );
  }

  makePayment(amount) {
    //alert("You donated $" + amount);
    // const apiKey = 'sk_test_txfxAzRD0FPONtT6wSv084Ck';
    // const client = new Stripe(apiKey);

    // // Create a Stripe token with new card info
    // client.createToken({
    //   number: '4242424242424242',
    //   exp_month: '09',
    //   exp_year: '18',
    //   cvc: '111',
    //   address_zip: '12345'
    // }).then((token) => {
    //   client.createCustomer(token.id, 'richardjshu@gmail.com', 'richardshu', 'Richard', 'Shu').then((customer) => {
    //     client.createCharge(amount, customer.id, 'Payment example','USD');
    //   });
    // }).catch((e) => {
    //   alert(e);
    // });
  }

  render() {
    return (
      <View style={this.styles.charityScreenContainer}>
        <View style={this.styles.buttonsContainer}>
          <Text onPress={() => this.makePayment(0.5)} style={this.styles.button}>$0.50</Text>
          <Text onPress={() => this.makePayment(1)} style={this.styles.button}>$1.00</Text>
          <Text onPress={() => this.makePayment(2)} style={this.styles.button}>$2.00</Text>
        </View>
        { this.initCharityBoxes() }
      </View>
    );
  }

  styles = StyleSheet.create({
    charityScreenContainer: {
      marginTop: 30,
    },
    charityText: {
      textAlign: 'center',
      fontSize: 25,
    },
    charityBoxesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    buttonsContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#FC152B',
      borderRadius: 50,
      padding: 20,
      margin: 20,
      borderWidth: 3,
      borderColor: 'black',
      textAlign: 'center',
    },
  });
}

