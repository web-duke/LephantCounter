import React, { useState } from "react";
import { Text, View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SCORE } from "../../consts/navigation";

const renderItem = ({ item, index, drag, isActive }) => {
  return (
    <TouchableOpacity
      style={{
        height: 100,
        backgroundColor: isActive ? "blue" : item.backgroundColor,
        alignItems: "center",
        justifyContent: "center",
      }}
      delayLongPress={100}
      onLongPress={drag}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: 32,
        }}
      >
        {item.key} : {item.score}
      </Text>
    </TouchableOpacity>
  );
};

export const ScreenScore = ({ route }) => {
  const [playersData, setPlayersData] = useState(route.params.playersData);

  console.log(route.params.playersList);

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={playersData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setPlayersData(data)}
        autoscrollThreshold={200}
      />
    </View>
  );
};
