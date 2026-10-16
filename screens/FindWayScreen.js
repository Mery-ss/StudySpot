import React from "react";
import { View, Text, Button, Linking } from "react-native";
import { GlobalStyle } from "../styles/GlobalStyle";

export default function FindWayScreen({ route, navigation }) {
  const { place } = route.params;

  const openMaps = () => {
    const address = encodeURIComponent(place.address);
    const url = `https://www.google.com/maps/search/?api=1&query=${address}`;

    Linking.openURL(url);
  };

  return (
    <View style={GlobalStyle.container}>
      <Text style={GlobalStyle.title}>📍 Find vej</Text>

      <Text style={GlobalStyle.subtitle}>{place.name}</Text>

      <View style={GlobalStyle.itemContainer}>
        <Text style={GlobalStyle.infoText}>Placering: {place.area}</Text>

        <Button title="Åbn i Google Maps" onPress={openMaps} />
      </View>

      <Button
        title="Tilbage til detaljer"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

// den nye screen viser navnet og placeringen på det studiested, brugeren har valgt
// når man trykker på "åbn i Google Maps" åbner den Google Maps med adressen på studiestedet
// derfra kan brugeren vælge rutevejledning

// vi bruger linking, som er en funktion fra React Native, som kan bruges til at åbne eksterne links.
