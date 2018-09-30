import React from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';


export class PomodoroScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
        };
    }

    tick = () => {
        if (this.state.time > 0) {
            this.setState((state, props) => ({
                time: state.time - 1,
            }));
        } else {
            // Do nothing
        }
    };

    componentDidMount() {
        this.timerId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    pressGoToCharity = () => this.props.nav('charity');
    pressGoToTime = () => this.props.nav('time');

    render() {
        let isFinished = this.state.time == 0;
        let buttons = (
                <View>
                    <Button title="Change charity" onPress={this.pressGoToCharity}></Button>
                    <Button title="Change time" onPress={this.pressGoToTime}></Button>
                </View>
                );

        return (
                <View>
                <Text> The amount of time left is { this.state.time }! </Text>
                {isFinished &&
                    buttons
                }
                </View>
               );
    }
}

