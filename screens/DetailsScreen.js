// Importerer React
import React from "react";

// Importerer de React Native-komponenter, vi skal bruge
import { View, Text, Button } from "react-native";

// Importerer vores styling
import { GlobalStyle } from "../styles/GlobalStyle";

// DetailsScreen viser information om det valgte StudySpot
export default function DetailsScreen({ route, navigation }) {

  // Henter det valgte studiested fra StudySpotsScreen
  const { place } = route.params;

  return (
    <View style={GlobalStyle.container}>

      {/* Navnet på StudySpottet */}
      <Text style={GlobalStyle.title}>
        📍 {place.name}
      </Text>

      {/* Område */}
      <Text style={GlobalStyle.subtitle}>
        {place.area}
      </Text>

      {/* Information om stedet */}
      <View style={GlobalStyle.itemContainer}>

        <Text style={GlobalStyle.infoText}>
          🤫 Støjniveau: {place.noise}
        </Text>

        <Text style={GlobalStyle.infoText}>
          📶 Wi-Fi: {place.wifi}
        </Text>

        <Text style={GlobalStyle.infoText}>
          🔌 Strøm: {place.power}
        </Text>

        <Text style={GlobalStyle.infoText}>
          📚 Bedst til: {place.bestFor}
        </Text>

      </View>

      {/* Knap tilbage til listen */}
      <Button
        title="Tilbage til StudySpots"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}