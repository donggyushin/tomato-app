import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

function Buttons({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={50} color="white" />
    </TouchableOpacity>
  );
}

Buttons.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Buttons;
