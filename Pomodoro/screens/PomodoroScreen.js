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
        this.setState({
            time: 10,
        });
      }
  };

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
     clearInterval(this.timerId);
  }

  render() {
    return (
              <View>
              <Text> The amount of time left is { this.state.time }! </Text>
              </View>
    );
  }
}

