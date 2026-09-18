// Importerer StyleSheet fra React Native
import { StyleSheet } from "react-native";

// Samler appens styling i én separat fil
export const GlobalStyle = StyleSheet.create({

  // Bruges som container på vores screens
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  // Styling til store overskrifter
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // Styling til almindelig tekst
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },

  // Styling til en lille introduktion/underoverskrift
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },

  // Styling til hvert StudySpot i listen
  itemContainer: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 16,
    borderRadius: 12,

    // Let skygge omkring hvert StudySpot
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  // Navnet på et StudySpot i listen
  itemTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 6,
  },

  // Bruges til små informationer om et StudySpot
  infoText: {
    fontSize: 15,
    marginBottom: 5,
  },

});