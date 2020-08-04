import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScoreButton } from "../components/ScoreButton";
import {
  COLOR_BACK,
  COLOR_FRONT,
  COLOR_HL_LIGHT,
  COLOR_MIDDLE,
  COLOR_TEXT,
} from "../css/consts";

const renderItem = ({ item, index, drag, isActive }, setCurrentPlayerData) => {
  return (
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
};

export const ScreenScore = ({ route }) => {
  const [playersData, setPlayersData] = useState(route.params.playersData);
  const [currentPlayerData, setCurrentPlayerData] = useState(undefined);
  const [isAdding, setIsAdding] = useState(true);

  const isDisabled = !currentPlayerData ? true : false;
  const toggleIsAdding = () => setIsAdding((previousState) => !previousState);

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
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setIsAdding(!isAdding)}
        >
          <Text style={styles.addButtonText}>{isAdding ? "+" : "-"}</Text>
        </TouchableOpacity>

        <ScoreButton
          value={1}
          label="1"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={2}
          label="2"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={3}
          label="3"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={4}
          label="4"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={5}
          label="5"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={6}
          label="6"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={7}
          label="7"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={8}
          label="8"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={9}
          label="9"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={10}
          label="10"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={11}
          label="V"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={12}
          label="Q"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />

        <ScoreButton
          value={13}
          label="K"
          isAdding={isAdding}
          currentPlayerData={currentPlayerData}
          playersData={playersData}
          setPlayersData={setPlayersData}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 3, backgroundColor: COLOR_FRONT },
  playerRow: {
    flex: 1,
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
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: COLOR_BACK,
    alignContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  addButton: {
    width: 40,
    height: 40,
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
