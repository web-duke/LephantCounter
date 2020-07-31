import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HOME, SCORE } from "./consts/navigation";
import { ScreenHome } from "./src/screens/ScreenHome";
import { ScreenScore } from "./src/screens/ScreenScore";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={ScreenHome} />
        <Stack.Screen name={SCORE} component={ScreenScore} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
