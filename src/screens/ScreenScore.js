import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";

const renderItem = ({ item, index, drag, isActive }, setCurrentPlayerData) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        backgroundColor: isActive ? "blue" : "gray",
        alignItems: "center",
        justifyContent: "center",
      }}
      delayLongPress={100}
      onLongPress={drag}
      onPress={() => setCurrentPlayerData(item)}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 22,
        }}
      >
        {item.key} : {item.score}
      </Text>
    </TouchableOpacity>
  );
};

const updatePlayerData = (
  value,
  currentPlayerData,
  playersData,
  setPlayersData
) => {
  const playerIndex = playersData.findIndex(
    (element) => element.key === currentPlayerData.key
  );

  let newArray = [...playersData];
  newArray[playerIndex] = {
    ...newArray[playerIndex],
    score: newArray[playerIndex].score + value,
  };

  setPlayersData(newArray);
};

export const ScreenScore = ({ route }) => {
  const [playersData, setPlayersData] = useState(route.params.playersData);
  const [currentPlayerData, setCurrentPlayerData] = useState(undefined);
  const isDisabled = !currentPlayerData ? true : false;
  return (
    <>
      <View style={{ flex: 2, backgroundColor: "lightgray" }}>
        <DraggableFlatList
          data={playersData}
          renderItem={(props) => renderItem(props, setCurrentPlayerData)}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          onDragEnd={({ data }) => setPlayersData(data)}
          autoscrollThreshold={200}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          title="1"
          onPress={() =>
            updatePlayerData(1, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="2"
          onPress={() =>
            updatePlayerData(2, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="3"
          onPress={() =>
            updatePlayerData(3, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="4"
          onPress={() =>
            updatePlayerData(4, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="5"
          onPress={() =>
            updatePlayerData(5, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="6"
          onPress={() =>
            updatePlayerData(6, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="7"
          onPress={() =>
            updatePlayerData(7, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="8"
          onPress={() =>
            updatePlayerData(8, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="9"
          onPress={() =>
            updatePlayerData(9, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="10"
          onPress={() =>
            updatePlayerData(10, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="valet"
          onPress={() =>
            updatePlayerData(11, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="dame"
          onPress={() =>
            updatePlayerData(12, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />

        <Button
          style={styles.button}
          title="roi"
          onPress={() =>
            updatePlayerData(13, currentPlayerData, playersData, setPlayersData)
          }
          disabled={isDisabled}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  button: {
    width: 20,
    height: 20, // ne marche pas, peut etre car bouton natif
  },
});
