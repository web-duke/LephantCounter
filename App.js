import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { HOME, PLAYERS, SCORE } from "./consts/navigation";
import { Home } from "./src/screens/Home";
import { Players } from "./src/screens/Players";
import { Score } from "./src/screens/Score";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HOME}>
          <Stack.Screen name={HOME} component={Home} />
          <Stack.Screen name={PLAYERS} component={Players} />
          <Stack.Screen name={SCORE} component={Score} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
