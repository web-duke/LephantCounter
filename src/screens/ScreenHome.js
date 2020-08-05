import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SCORE } from "../../consts/navigation";
import { HomeButton } from "../components/HomeButton";
import { ModalBase } from "../components/ModalBase";
import { Tag } from "../components/Tag";
import { COLOR_BACK, COLOR_FRONT } from "../css/consts";

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
          onPress={() => setModalVisible(true)}
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

      <ModalBase
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <Tag updateState={setPlayersList} tags={playersList} />

        <HomeButton
          onPress={() => setModalVisible(false)}
          label="Close"
          style={{ marginVertical: 0 }}
        />
      </ModalBase>
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
});
