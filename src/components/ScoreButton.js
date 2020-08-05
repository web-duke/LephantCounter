import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLOR_BACK, COLOR_FRONT } from "../css/consts";

const updatePlayerData = (
  value,
  isAdding,
  currentPlayerData,
  playersData,
  setPlayersData
) => {
  const playerIndex = playersData.findIndex(
    (element) => element.key === currentPlayerData.key
  );
  const val = isAdding ? value : -value;

  let newArray = [...playersData];
  newArray[playerIndex] = {
    ...newArray[playerIndex],
    score: newArray[playerIndex].score + val,
  };

  setPlayersData(newArray);
};

export const ScoreButton = ({
  value,
  isAdding,
  currentPlayerData,
  playersData,
  setPlayersData,
  label,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        updatePlayerData(
          value,
          isAdding,
          currentPlayerData,
          playersData,
          setPlayersData
        )
      }
      disabled={isDisabled}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 54,
    backgroundColor: COLOR_FRONT,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 22,
    color: COLOR_BACK,
  },
});
