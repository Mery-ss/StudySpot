// Importerer React
import React from "react";

// Importerer de React Native-komponenter, vi bruger på siden
import { View, Text, Button } from "react-native";

// Importerer vores styling
import { GlobalStyle } from "../styles/GlobalStyle";

// HomeScreen er forsiden i StudySpot
export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>

      {/* Introduktion til StudySpot */}
      <View>
        <Text style={GlobalStyle.title}>📍 StudySpot</Text>

        <Text style={GlobalStyle.subtitle}>
          Find dit næste studiested på CBS
        </Text>
      </View>

      {/* Forklaring af appens formål */}
      <View>
        <Text style={GlobalStyle.text}>
          Er du ny på CBS? StudySpot hjælper dig med at finde et studiested,
          der passer til dine behov.
        </Text>

        <Text style={GlobalStyle.text}>
          🤫 Find ro til individuel læsning
        </Text>

        <Text style={GlobalStyle.text}>
          👥 Find steder til gruppearbejde
        </Text>

        <Text style={GlobalStyle.text}>
          📶 Se Wi-Fi og strøm
        </Text>
      </View>

      {/* Knap til listen over StudySpots */}
      <View>
        <Button
          title="Find StudySpots"
          onPress={() => navigation.navigate("StudySpots")}
        />
      </View>

    </View>
  );
}

