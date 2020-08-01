import React from "react";
import { Text, View } from "react-native";
import { SCORE } from "../../consts/navigation";

export const ScreenScore = ({ route }) => {
  const { playersList } = route.params;
  let playersScoreList = {};
  playersList.map((player) => (playersScoreList[player] = 0));
  console.log(playersScoreList);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`${SCORE} Screen`}</Text>
    </View>
  );
};
