import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CharityScreen } from './screens/CharityScreen.js';
import { TimeScreen } from './screens/TimeScreen.js';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: 'charity',
        }
    }

    navigate = route => {
        this.setState({
            screen: route,
        });
    }

    render = () => {
        let { screen } = this.state;
        var screenComponent = ( <View><Text> Something went wrong </Text></View> );
        switch (screen) {
            case 'charity':
                screenComponent = ( <CharityScreen nav={this.navigate} ></CharityScreen> );
                break;
            case 'time':
                screenComponent = ( <TimeScreen nav={this.navigate} ></TimeScreen> );
                break;
        }
        return (
                <View>
                    { screenComponent }
                </View>
               );
    }
}
