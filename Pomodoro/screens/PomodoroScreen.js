import React from 'react';
import {
    View,
    Button,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Video } from 'expo';

const styles = StyleSheet.create({
    tomatoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    tomatoImg: {
        width: Dimensions.get('window').width * 2/3,
        height: Dimensions.get('window').width * 2/3,
    },
    tomatoVid: {
        width: Dimensions.get('window').width * 1.2,
        height: Dimensions.get('window').width * 1.2,
    },
    centralFlexContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    countdownText: {
        textAlign: 'center',
        fontSize: 48,
        fontWeight: '600',
    },
    ctaButton: {
        marginBottom: 20,
        marginLeft: Dimensions.get('window').width * 1/4,
        width: Dimensions.get('window').width * 1/2,
    },
});

const tomatoVids = {
    '10': require('../vid/tomato10tan.mp4'),
    '25': require('../vid/tomato25tan.mp4'),
    '60': require('../vid/tomato60tan.mp4'),
};

export class PomodoroScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: props.time,
        };
        switch(props.time){
            case 10:
                this.tomatoVid = tomatoVids['10'];
                break;
            case 25:
                this.tomatoVid = tomatoVids['25'];
                break;
            case 60:
                this.tomatoVid = tomatoVids['60'];
                break;
        }
    }

    tick = () => {
        if (this.state.time > 0) {
            this.setState((state, props) => ({
                time: state.time - 1,
            }));
        } else {
            clearInterval(this.timerId);
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
                <View style={{display: 'flex', flexDirection:'column'}}>
                    <View style={styles.ctaButton}>
                    <Button color="#FC152B" title="Change charity" onPress={this.pressGoToCharity}></Button>
                    </View>
                    <View style={styles.ctaButton}>
                    <Button color="#FC152B" title="Change time" onPress={this.pressGoToTime}></Button>
                    </View>
                </View>
                );

        //<Image style={styles.tomatoImg} source={require('../img/tomato.png')}/>
        //<Text style={styles.countdownText}>{ this.state.time }!</Text>
        return (
                <View style={{height: Dimensions.get('window').height, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#FFDCBA'}}>
                    <View style={styles.centralFlexContainer}>
                        <View style={styles.tomatoContainer}>
							<Video
							source={this.tomatoVid}
							style={styles.tomatoVid}
                            shouldPlay
							resizeMode={"cover"}
							/>
                        </View>
                        {isFinished &&
                            buttons
                        }
                    </View>
                </View>
               );
    }
}

