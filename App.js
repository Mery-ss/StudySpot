import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import StudySpotsScreen from "./screens/StudySpotsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FindWayScreen from "./screens/FindWayScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "StudySpot" }}
        />

        <Stack.Screen
          name="StudySpots"
          component={StudySpotsScreen}
          options={{ title: "StudySpots" }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detaljer" }}
        />

        <Stack.Screen
          name="FindWay"
          component={FindWayScreen}
          options={{ title: "Find vej" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
