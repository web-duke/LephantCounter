import React from "react";
import { Text, View } from "react-native";
import { PLAYERS } from "../../consts/navigation";

export const Players = ({ route }) => {
  const { players, setPlayers } = route.params;
  // setPlayers({...players, "player 3"})

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`${PLAYERS} Screen ${players.player1.name}`}</Text>
    </View>
  );
};
