import React, { useState } from "react";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  COLOR_FRONT,
  COLOR_BACK,
  COLOR_MIDDLE,
  COLOR_HL,
  COLOR_HL_LIGHT,
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

const updatePlayerData = (
  value,
  isAdding,
  currentPlayerData,
  playersData,
  setPlayersData
) => {
  const playerIndex = playersData.findIndex(
    (element) => element.key === currentPlayerData.key
  );
  const val = isAdding ? value : -value;

  let newArray = [...playersData];
  newArray[playerIndex] = {
    ...newArray[playerIndex],
    score: newArray[playerIndex].score + val,
  };

  setPlayersData(newArray);
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
        <Switch
          onValueChange={toggleIsAdding}
          value={isAdding}
          disabled={isDisabled}
        />
        <Text>{isAdding ? "+" : "-"}</Text>

        <Button
          style={styles.button}
          title="1"
          onPress={() =>
            updatePlayerData(
              1,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="2"
          onPress={() =>
            updatePlayerData(
              2,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="3"
          onPress={() =>
            updatePlayerData(
              3,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="4"
          onPress={() =>
            updatePlayerData(
              4,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="5"
          onPress={() =>
            updatePlayerData(
              5,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="6"
          onPress={() =>
            updatePlayerData(
              6,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="7"
          onPress={() =>
            updatePlayerData(
              7,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="8"
          onPress={() =>
            updatePlayerData(
              8,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="9"
          onPress={() =>
            updatePlayerData(
              9,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="10"
          onPress={() =>
            updatePlayerData(
              10,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="valet"
          onPress={() =>
            updatePlayerData(
              11,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="dame"
          onPress={() =>
            updatePlayerData(
              12,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
        <Button
          style={styles.button}
          title="roi"
          onPress={() =>
            updatePlayerData(
              13,
              isAdding,
              currentPlayerData,
              playersData,
              setPlayersData
            )
          }
          disabled={isDisabled}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 2, backgroundColor: COLOR_FRONT },
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
  },
  button: {
    width: 20,
    height: 20, // ne marche pas, peut etre car bouton natif
  },
});
