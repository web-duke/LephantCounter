import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HOME, SCORE } from "./consts/navigation";
import { COLOR_BACK, COLOR_TEXT } from "./src/css/consts";
import { ScreenHome } from "./src/screens/ScreenHome";
import { ScreenScore } from "./src/screens/ScreenScore";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME}>
        <Stack.Screen
          name={HOME}
          component={ScreenHome}
          options={{
            headerTintColor: COLOR_TEXT,
            headerStyle: {
              backgroundColor: COLOR_BACK,
            },
          }}
        />
        <Stack.Screen
          name={SCORE}
          component={ScreenScore}
          options={{
            headerTintColor: COLOR_TEXT,
            headerStyle: {
              backgroundColor: COLOR_BACK,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
