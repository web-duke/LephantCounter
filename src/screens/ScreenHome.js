import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import TagInput from "react-native-tags-input";
import { SCORE } from "../../consts/navigation";
import { COLOR_FRONT, COLOR_BACK } from "../css/consts";
import { TouchableOpacity } from "react-native-gesture-handler";
import { HomeButton } from "../components/HomeButton";

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
      <View style={styles.screen}>
        <Text style={styles.title}>
          {`Players : ${playersList.tagsArray.length}`}
        </Text>

        <HomeButton
          onPress={() => {
            setModalVisible(true);
          }}
          label="Manage Players"
        />

        <HomeButton
          onPress={() =>
            navigation.navigate(SCORE, {
              playersData: setPlayersData(playersList),
            })
          }
          label={SCORE}
        />

        <HomeButton
          onPress={() => clearPlayers(setPlayersList)}
          label="Clear players"
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
            labelStyle={{ color: COLOR_FRONT }}
            inputStyle={{ color: "#fff" }}
          />

          <HomeButton
            onPress={() => setModalVisible(!modalVisible)}
            label="Close"
            style={{ marginVertical: 0 }}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLOR_FRONT,
  },
  title: {
    color: COLOR_BACK,
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 20,
  },
  modal: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
});
