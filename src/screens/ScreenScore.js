import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScoreButtonsList } from "../components/ScoreButtonsList";
import {
  COLOR_BACK,
  COLOR_FRONT,
  COLOR_HL_LIGHT,
  COLOR_MIDDLE,
  COLOR_TEXT,
} from "../css/consts";

const renderItem = ({ item, index, drag, isActive }, setCurrentPlayerData) => (
  <TouchableOpacity
    style={[
      styles.playerRow,
      { backgroundColor: isActive ? COLOR_HL_LIGHT : COLOR_MIDDLE },
    ]}
    delayLongPress={100}
    onLongPress={drag}
    onPress={() => setCurrentPlayerData(item)}
  >
    <Text
      style={[
        styles.playerRowText,
        { color: isActive ? COLOR_BACK : COLOR_TEXT },
      ]}
    >
      {item.key}
    </Text>

    <Text
      style={[
        styles.playerRowText,
        { color: isActive ? COLOR_BACK : COLOR_TEXT },
      ]}
    >
      {item.score}
    </Text>
  </TouchableOpacity>
);

export const ScreenScore = ({ route }) => {
  const [playersData, setPlayersData] = useState(route.params.playersData);
  const [currentPlayerData, setCurrentPlayerData] = useState(undefined);
  const [isAdding, setIsAdding] = useState(true);
  const isDisabled = !currentPlayerData ? true : false;
  return (
    <>
      <View style={styles.screen}>
        <DraggableFlatList
          data={playersData}
          renderItem={(props) => renderItem(props, setCurrentPlayerData)}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => setPlayersData(data)}
          autoscrollThreshold={200}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsContainerWrapper}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setIsAdding(!isAdding)}
            disabled={isDisabled}
          >
            <Text style={styles.addButtonText}>{isAdding ? "+" : "-"}</Text>
          </TouchableOpacity>
          <ScoreButtonsList
            isAdding={isAdding}
            currentPlayerData={currentPlayerData}
            playersData={playersData}
            setPlayersData={setPlayersData}
            isDisabled={isDisabled}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 3, backgroundColor: COLOR_FRONT },
  playerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: COLOR_FRONT,
  },
  playerRowText: {
    color: COLOR_TEXT,
    fontSize: 18,
    textTransform: "capitalize",
  },
  buttonsContainer: {
    height: 140,
    backgroundColor: COLOR_BACK,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainerWrapper: {
    maxWidth: 400,
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  addButton: {
    width: 40,
    height: 54,
    backgroundColor: COLOR_FRONT,
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  addButtonText: {
    fontWeight: "bold",
    fontSize: 28,
    color: COLOR_BACK,
  },
});
