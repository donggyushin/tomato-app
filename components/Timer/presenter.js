import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Buttons from "../Buttons";

export default class Timer extends React.Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timeInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        timeInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.timeInterval);
    }
  }

  _timeFormat(time) {
    let minutes = Math.floor(time / 60);
    let seconds = parseInt(time % 60);
    return `${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
      seconds < 10 ? `0${seconds}` : `${seconds}`
    }`;
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {this._timeFormat(timerDuration - elapsedTime)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying ? (
            <Buttons iconName={"play"} onPress={startTimer} />
          ) : null}
          {isPlaying ? (
            <Buttons iconName={"pause"} onPress={restartTimer} />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 100,
    fontWeight: "100"
  }
});
