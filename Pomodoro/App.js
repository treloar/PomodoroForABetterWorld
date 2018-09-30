import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CharityScreen } from './screens/CharityScreen.js';
import { TimeScreen } from './screens/TimeScreen.js';
import { PomodoroScreen } from './screens/PomodoroScreen.js';

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
    };

    startTimer = _time => {
        this.setState({
            screen: 'pomodoro',
            time: _time,
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
                screenComponent = ( <TimeScreen start={this.startTimer} ></TimeScreen> );
                break;
            case 'pomodoro':
                screenComponent = ( <PomodoroScreen time={this.state.time} nav={this.navigate}></PomodoroScreen> );
                break;
        }
        return (
                <View>
                    { screenComponent }
                </View>
               );
    }
}
