import React from "react";
import { Text, View } from "react-native";
import { SCORE } from "../../consts/navigation";

export const ScreenScore = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{`${SCORE} Screen`}</Text>
    </View>
  );
};
