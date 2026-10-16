import React from "react";
import { View, Text, Button, Linking } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function FindWayScreen({ route, navigation }) {
  // Henter det studiested, som brugeren har valgt på den forrige skærm.
  const { place } = route.params;

  // Åbner Google Maps med adressen på det valgte studiested.
  const openMaps = () => {
    // Gør adressen klar til at blive brugt i en URL.
    const address = encodeURIComponent(place.address);
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;

    // Linking bruges til at åbne et eksternt link.
    Linking.openURL(url);
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>📍 Find vej</Text>

      {/* Viser navnet på det valgte studiested. */}
      <Text style={GlobalStyle.subtitle}>{place.name}</Text>

      <View style={GlobalStyle.itemContainer}>
        {/* Viser studiestedets område. */}
        <Text style={GlobalStyle.infoText}>Placering: {place.area}</Text>

        {/* Åbner Google Maps, når brugeren trykker på knappen. */}
        <Button title="Åbn i Google Maps" onPress={openMaps} />
      </View>

      {/* Går tilbage til den forrige skærm med detaljer. */}
      <Button
        title="Tilbage til detaljer"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
