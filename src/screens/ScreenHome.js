import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { HOME, SCORE } from "../../consts/navigation";
import TagInput from "react-native-tags-input";

export const ScreenHome = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [playersList, setPlayersList] = useState({
    tag: "",
    tagsArray: [],
  });

  const clearPlayers = () => setPlayersList({ tag: "", tagsArray: [] });

  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{`${HOME} Screen`}</Text>

        <Text>{`Players : ${playersList.tagsArray.length}`}</Text>

        <Button
          title="Add Players"
          onPress={() => {
            setModalVisible(true);
          }}
        />

        <Button title="Clear players" onPress={clearPlayers} />

        <Button
          title={SCORE}
          onPress={() => navigation.navigate(SCORE, playersList)}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
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
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
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
