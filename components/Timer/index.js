import Timer from "./presenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as tomatoActions } from "../../reducer";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

function mapDispatchToProps(dispatch) {
  //dispatch는 reducer에 함수를 보내주는 함수이다.
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch), //dispatch와 startTimer를 묶어줌.
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
