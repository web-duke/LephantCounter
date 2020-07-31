import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { HOME, PLAYERS, SCORE } from "../../consts/navigation";

export const Home = ({ navigation }) => {
  const [players, setPlayers] = useState({
    player1: { name: "player 1", score: 0 },
    player2: { name: "player 2", score: 0 },
  });
  const playersState = {
    players,
    setPlayers,
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`${HOME} Screen ${players.player1.name}`}</Text>

      <Button
        title={PLAYERS}
        onPress={() => navigation.navigate(PLAYERS, playersState)}
      />
      <Button
        title={SCORE}
        onPress={() => navigation.navigate(SCORE, players)}
      />
    </View>
  );
};
