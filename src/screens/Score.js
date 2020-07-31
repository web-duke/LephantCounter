import React from "react";
import { Text, View } from "react-native";
import { SCORE } from "../../consts/navigation";

export const Score = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`${SCORE} Screen`}</Text>
    </View>
  );
};
