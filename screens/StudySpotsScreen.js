// Importerer React og useState
import React, { useState } from "react";

// Importerer de React Native-komponenter, vi skal bruge
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";

// Importerer vores styling
import { GlobalStyle } from "../styles/GlobalStyle";

// Liste med StudySpots
const studySpots = [
  {
    id: "1",
    name: "CBS Library",
    area: "Solbjerg Plads",
    noise: "Lavt",
    wifi: "Ja",
    power: "Ja",
    bestFor: "Individuel læsning",
    type: "Stille",
  },
  {
    id: "2",
    name: "Frederiksberg Bibliotek",
    area: "Frederiksberg",
    noise: "Lavt",
    wifi: "Ja",
    power: "Ja",
    bestFor: "Fordybelse og opgaveskrivning",
    type: "Stille",
  },
  {
    id: "3",
    name: "Café Nexus",
    area: "Solbjerg Plads",
    noise: "Mellem",
    wifi: "Ja",
    power: "Begrænset",
    bestFor: "Gruppearbejde",
    type: "Gruppe",
  },
  {
    id: "4",
    name: "CBS Library – Dalgas Have",
    area: "Dalgas Have 15",
    noise: "Lavt",
    wifi: "Ja",
    power: "Ja",
    bestFor: "Individuel læsning og fordybelse",
    type: "Stille",
  },
];

export default function StudySpotsScreen({ navigation }) {
  // Husker hvilket filter brugeren har valgt
  const [filter, setFilter] = useState("Alle");

  // Husker hvilke StudySpots brugeren har gemt som favoritter
  const [favorites, setFavorites] = useState([]);

  // Filtrerer listen
  const filteredStudySpots =
    filter === "Alle"
      ? studySpots
      : studySpots.filter((place) => place.type === filter);

  // Tilføjer eller fjerner et StudySpot fra favoritter
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Find et StudySpot 📚</Text>

      <Text style={GlobalStyle.text}>Hvad leder du efter?</Text>

      {/* Filterknapper */}
      <View>
        <Button title="Alle" onPress={() => setFilter("Alle")} />

        <Button title="🤫 Stille" onPress={() => setFilter("Stille")} />

        <Button title="👥 Gruppe" onPress={() => setFilter("Gruppe")} />
      </View>

      {/* Listen over StudySpots */}
      <FlatList
        data={filteredStudySpots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={GlobalStyle.itemContainer}>
            {/* Tryk på stedet for at se detaljer */}
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { place: item })}
            >
              <Text style={GlobalStyle.itemTitle}>{item.name}</Text>

              <Text style={GlobalStyle.infoText}>📍 {item.area}</Text>

              <Text style={GlobalStyle.infoText}>
                🤫 Støjniveau: {item.noise}
              </Text>

              <Text style={GlobalStyle.infoText}>
                📚 Bedst til: {item.bestFor}
              </Text>
            </TouchableOpacity>

            {/* Favoritknap */}
            <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
              <Text style={GlobalStyle.infoText}>
                {favorites.includes(item.id)
                  ? "❤️ Gemt som favorit"
                  : "🤍 Gem som favorit"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
