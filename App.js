// Importerer React
import React from "react";

// Importerer NavigationContainer, som holder styr på navigationen i appen
import { NavigationContainer } from "@react-navigation/native";

// Importerer Stack Navigator, som bruges til at skifte mellem screens
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importerer vores tre StudySpot-screens
import HomeScreen from "./screens/HomeScreen";
import StudySpotsScreen from "./screens/StudySpotsScreen";
import DetailsScreen from "./screens/DetailsScreen";

// Opretter vores Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer omslutter hele navigationen
    <NavigationContainer>

      {/* Her registrerer vi de screens, som brugeren kan navigere mellem */}
      <Stack.Navigator>

        {/* Forsiden */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "StudySpot" }}
        />

        {/* Listen over StudySpots */}
        <Stack.Screen
          name="StudySpots"
          component={StudySpotsScreen}
          options={{ title: "StudySpots" }}
        />

        {/* Detaljesiden for det valgte StudySpot */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Detaljer" }}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}