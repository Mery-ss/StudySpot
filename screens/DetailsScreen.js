// Importerer React
import React from "react";

// Importerer de React Native-komponenter, vi skal bruge
import { View, Text, Button } from "react-native";

// Importerer vores styling fra den separate styling-fil
import { GlobalStyle } from "../styles/GlobalStyle";

// DetailsScreen viser information om det StudySpot, brugeren har valgt
export default function DetailsScreen({ route, navigation }) {

  // Henter det valgte studiested fra StudySpotsScreen
  const { place } = route.params;

  return (
    <View style={GlobalStyle.container}>

      {/* Navnet på det valgte StudySpot */}
      <Text style={GlobalStyle.title}>
        {place.name}
      </Text>

      {/* Information om studiestedet */}
      <Text style={GlobalStyle.text}>
        Støjniveau: {place.noise}
      </Text>

      <Text style={GlobalStyle.text}>
        Wi-Fi: {place.wifi}
      </Text>

      <Text style={GlobalStyle.text}>
        Strøm: {place.power}
      </Text>

      <Text style={GlobalStyle.text}>
        Bedst til: {place.bestFor}
      </Text>

      {/* Knap der sender brugeren tilbage til listen */}
      <Button
        title="Tilbage til StudySpots"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}

