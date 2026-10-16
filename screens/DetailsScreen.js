
import React from "react";
import { View, Text, Button } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function DetailsScreen({ route, navigation }) {
  // Henter det studiested, som brugeren har valgt på listen.
  const { place } = route.params;

  return (
    <View style={GlobalStyle.container}>
      {/* Viser studiestedets navn og område. */}
      <Text style={GlobalStyle.title}>📍 {place.name}</Text>
      <Text style={GlobalStyle.subtitle}>{place.area}</Text>

      {/* Viser flere oplysninger om studiestedet. */}
      <View style={GlobalStyle.itemContainer}>
        <Text style={GlobalStyle.infoText}>🤫 Støjniveau: {place.noise}</Text>

        <Text style={GlobalStyle.infoText}>📶 Wi-Fi: {place.wifi}</Text>

        <Text style={GlobalStyle.infoText}>🔌 Strøm: {place.power}</Text>

        <Text style={GlobalStyle.infoText}>📚 Bedst til: {place.bestFor}</Text>
      </View>

      {/* Navigerer til FindWayScreen og sender studiestedets data med. */}
      <Button
        title="📍 Find vej"
        onPress={() => navigation.navigate("FindWay", { place: place })}
      />

      {/* Går tilbage til listen over studiesteder. */}
      <Button
        title="Tilbage til StudySpots"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
