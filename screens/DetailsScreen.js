import React from "react";
import { View, Text, Button } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function DetailsScreen({ route, navigation }) {
  const { place } = route.params;

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>📍 {place.name}</Text>
      <Text style={GlobalStyle.subtitle}>{place.area}</Text>

      <View style={GlobalStyle.itemContainer}>
        <Text style={GlobalStyle.infoText}>🤫 Støjniveau: {place.noise}</Text>

        <Text style={GlobalStyle.infoText}>📶 Wi-Fi: {place.wifi}</Text>

        <Text style={GlobalStyle.infoText}>🔌 Strøm: {place.power}</Text>

        <Text style={GlobalStyle.infoText}>📚 Bedst til: {place.bestFor}</Text>
      </View>

      <Button
        title="📍 Find vej"
        onPress={() => navigation.navigate("FindWay", { place: place })}
      />

      <Button
        title="Tilbage til StudySpots"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
