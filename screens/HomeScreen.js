// Importerer React
import React from "react";

// Importerer de React Native-komponenter, vi bruger på siden
import { View, Text, Button } from "react-native";

// Importerer vores styling fra den separate styling-fil
import { GlobalStyle } from "../styles/GlobalStyle";

// HomeScreen er forsiden i StudySpot
export default function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyle.container}>
      {/* View 1: Appens introduktion */}
      <View>
        <Text style={GlobalStyle.title}>StudySpot</Text>

        <Text style={GlobalStyle.text}>Find det perfekte sted at studere</Text>
      </View>

      {/* View 2: Kort forklaring af appens værdi */}
      <View>
        <Text style={GlobalStyle.text}>
          Er du ny studerende? Find et studiested, der passer til dine behov for
          ro, Wi-Fi, strøm og studieform.
        </Text>
      </View>

      {/* View 3: Navigation til StudySpots */}
      <View>
        <Button
          title="Find StudySpots"
          onPress={() => navigation.navigate("StudySpots")}
        />
      </View>
    </View>
  );
}
