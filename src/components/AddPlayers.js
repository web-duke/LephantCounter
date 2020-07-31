import React from "react";
import { Text, View } from "react-native";
import { PLAYERS } from "../../consts/navigation";

export const Players = ({ route }) => {
  const { players, setPlayers } = route.params;
  // setPlayers([...players, { name: "player 3", score: 0 }]);
  console.log(players);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`${PLAYERS} Screen ${players[0].name}`}</Text>
    </View>
  );
};
