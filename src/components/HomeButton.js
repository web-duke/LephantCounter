import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLOR_BACK, COLOR_TEXT } from "../css/consts";

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
    fontSize: 18,
    color: COLOR_TEXT,
  },
});
