import React, { useState } from "react";
import { Button, Modal, Text, View } from "react-native";
import { HOME, PLAYERS, SCORE } from "../../consts/navigation";

export const ScreenHome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [players, setPlayers] = useState([{ name: "player 1", score: 0 }]);
  const playersState = {
    players,
    setPlayers,
  };
  console.log(players);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <Button
          title="Close"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </Modal>

      <Text>{`${HOME} Screen`}</Text>
      <Text>{`Players : ${players.length}`}</Text>

      <Button
        title={PLAYERS}
        onPress={() => {
          setModalVisible(true);
        }}
      />

      <Button
        title={SCORE}
        onPress={() => navigation.navigate(SCORE, players)}
      />
    </View>
  );
};
