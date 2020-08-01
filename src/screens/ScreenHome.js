import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import TagInput from "react-native-tags-input";
import { HOME, SCORE } from "../../consts/navigation";

const setPlayersData = (playersList) => {
  const playersData = playersList.tagsArray.map((player) => ({
    key: player,
    score: 0,
  }));

  return playersData;
};

const clearPlayers = (setPlayersList) => {
  setPlayersList({ tag: "", tagsArray: [] });
};

export const ScreenHome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [playersList, setPlayersList] = useState({
    tag: "",
    tagsArray: [],
  });

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{`Players : ${playersList.tagsArray.length}`}</Text>

        <Button
          title="Add Players"
          onPress={() => {
            setModalVisible(true);
          }}
        />

        <Button
          title="Clear players"
          onPress={() => clearPlayers(setPlayersList)}
        />

        <Button
          title={SCORE}
          onPress={() =>
            navigation.navigate(SCORE, {
              playersData: setPlayersData(playersList),
            })
          }
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modal}>
          <TagInput
            updateState={setPlayersList}
            tags={playersList}
            placeholder="Name"
            label="Press space to add player"
            autoCorrect={false}
            keysForTag={" "}
            autoFocus
          />

          <Button
            title="Close"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
});
