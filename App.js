
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importerer de skærme, som brugeren kan navigere mellem.
import HomeScreen from "./screens/HomeScreen";
import StudySpotsScreen from "./screens/StudySpotsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import FindWayScreen from "./screens/FindWayScreen";

// Opretter en stack-navigation, hvor skærme åbnes oven på hinanden.
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer styrer navigationen i appen.
    <NavigationContainer>
      <Stack.Navigator>
        {/* Startskærmen i appen. */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "StudySpot" }}
        />

        {/* Viser listen over studiesteder og søgefunktionerne. */}
        <Stack.Screen
          name="StudySpots"
          component={StudySpotsScreen}
          options={{ title: "StudySpots" }}
        />

        {/* Viser detaljer om det valgte studiested. */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detaljer" }}
        />

        {/* Viser adressen og muligheden for at åbne Google Maps. */}
        <Stack.Screen
          name="FindWay"
          component={FindWayScreen}
          options={{ title: "Find vej" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
