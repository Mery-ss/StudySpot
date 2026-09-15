// Importerer React
import React from "react";

// Importerer de React Native-komponenter, vi skal bruge
import { View, Text, FlatList, TouchableOpacity } from "react-native";

// Importerer vores styling fra den separate styling-fil
import { GlobalStyle } from "../styles/GlobalStyle";

// Liste med StudySpots og information om hvert sted
const studySpots = [
  {
    id: "1",
    name: "CBS Library",
    noise: "Lavt",
    wifi: "Ja",
    power: "Ja",
    bestFor: "Individuel læsning",
  },
  {
    id: "2",
    name: "Frederiksberg Bibliotek",
    noise: "Lavt",
    wifi: "Ja",
    power: "Ja",
    bestFor: "Fordybelse og opgaveskrivning",
  },
  {
    id: "3",
    name: "Café Nexus",
    noise: "Mellem",
    wifi: "Ja",
    power: "Begrænset",
    bestFor: "Gruppearbejde",
  },
  {
    id: "4",
    name: "Student House",
    noise: "Mellem",
    wifi: "Ja",
    power: "Ja",
    bestFor: "Gruppearbejde og sociale studiemøder",
  },
];

// StudySpotsScreen viser listen over studiesteder
export default function StudySpotsScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>

      {/* Overskrift */}
      <Text style={GlobalStyle.title}>Find et StudySpot</Text>

      {/* FlatList viser alle vores StudySpots */}
      <FlatList
        data={studySpots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          // Hvert StudySpot kan trykkes på
          <TouchableOpacity
            style={GlobalStyle.itemContainer}
            onPress={() =>
              navigation.navigate("Details", { place: item })
            }
          >
            {/* Navnet på StudySpottet */}
            <Text style={GlobalStyle.itemTitle}>
              {item.name}
            </Text>

            {/* Viser kort hvad stedet er bedst til */}
            <Text style={GlobalStyle.text}>
              Bedst til: {item.bestFor}
            </Text>

          </TouchableOpacity>
        )}
      />

    </View>
  );
}

