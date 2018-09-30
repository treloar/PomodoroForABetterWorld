import React from 'react';
import {
    View,
    Button,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
    tomatoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    tomatoImg: {
        marginTop: 60,
        marginBottom: 40,
        width: Dimensions.get('window').width * 2/3,
        height: Dimensions.get('window').width * 2/3,
    },
    centralFlexContainer: {
        paddingTop: 50,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    countdownText: {
        textAlign: 'center',
        fontSize: 48,
        fontWeight: '600',
    },
    ctaButton: {
        paddingTop: 80,
    },
});

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
                    <Button style={styles.ctaButton} title="Change charity" onPress={this.pressGoToCharity}></Button>
                    <Button style={styles.ctaButton} title="Change time" onPress={this.pressGoToTime}></Button>
                </View>
                );

        return (
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <View style={styles.centralFlexContainer}>
                        <View style={styles.tomatoContainer}>
                            <Image style={styles.tomatoImg} source={require('../img/tomato.png')}/>
                        </View>
                        <Text style={styles.countdownText}>{ this.state.time }!</Text>
                        {isFinished &&
                            buttons
                        }
                    </View>
                </View>
               );
    }
}

