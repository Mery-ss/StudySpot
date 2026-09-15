// Importerer StyleSheet fra React Native
import { StyleSheet } from "react-native";

// Samler appens styling i én separat fil
export const GlobalStyle = StyleSheet.create({

  // Bruges som container på vores screens
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },

  // Styling til hvert StudySpot i listen
  itemContainer: {
    backgroundColor: "white",
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  // Navnet på et StudySpot i listen
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

});