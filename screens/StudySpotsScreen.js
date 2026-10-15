import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GlobalStyle } from "../styles/GlobalStyle";
import { studySpots } from "../data/studySpots";

export default function StudySpotsScreen({ navigation }) {
  const [filter, setFilter] = useState("Alle");
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [search, setSearch] = useState("");

  // Hent gemte favoritter
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const savedFavorites = await AsyncStorage.getItem("favorites");

        if (savedFavorites !== null) {
          setFavorites(JSON.parse(savedFavorites));
        }
      } catch (error) {
        console.log("Fejl ved hentning af favoritter:", error);
      } finally {
        setLoaded(true);
      }
    };

    loadFavorites();
  }, []);

  // Gem favoritter, når de ændres
  useEffect(() => {
    if (!loaded) {
      return;
    }

    const saveFavorites = async () => {
      try {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
      } catch (error) {
        console.log("Fejl ved gemning af favoritter:", error);
      }
    };

    saveFavorites();
  }, [favorites, loaded]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  let filteredStudySpots = studySpots;

  // Filtrering efter type
  if (filter === "Stille") {
    filteredStudySpots = filteredStudySpots.filter(
      (place) => place.type === "Stille",
    );
  }

  if (filter === "Gruppe") {
    filteredStudySpots = filteredStudySpots.filter(
      (place) => place.type === "Gruppe",
    );
  }

  if (filter === "Favoritter") {
    filteredStudySpots = filteredStudySpots.filter((place) =>
      favorites.includes(place.id),
    );
  }

  // Søgning efter navn eller område
  filteredStudySpots = filteredStudySpots.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.area.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>Find et StudySpot 📚</Text>
      <Text style={GlobalStyle.text}>Hvad leder du efter?</Text>

      <TextInput
        style={GlobalStyle.searchInput}
        placeholder="🔎 Søg efter studiested..."
        value={search}
        onChangeText={setSearch}
      />

      <View>
        <Button title="Alle" onPress={() => setFilter("Alle")} />
        <Button title="🤫 Stille" onPress={() => setFilter("Stille")} />
        <Button title="👥 Gruppe" onPress={() => setFilter("Gruppe")} />
        <Button title="❤️ Favoritter" onPress={() => setFilter("Favoritter")} />
      </View>

      <FlatList
        data={filteredStudySpots}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={GlobalStyle.itemContainer}>
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

      {filteredStudySpots.length === 0 && (
        <Text style={GlobalStyle.text}>Ingen studiesteder fundet.</Text>
      )}
    </View>
  );
}
