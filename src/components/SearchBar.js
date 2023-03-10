import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput style={styles.textInputStyle} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#f8f8f8",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  textInputStyle: {
    fontSize: 18,
    flex: 1, // this is for text input to take up the entire horizontal space */
  },
});
