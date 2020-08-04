import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLOR_BACK, COLOR_FRONT, COLOR_TEXT } from "../css/consts";

export const HomeButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: COLOR_BACK,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  buttonText: {
    // fontWeight: "bold",
    fontSize: 18,
    color: COLOR_TEXT,
  },
});
