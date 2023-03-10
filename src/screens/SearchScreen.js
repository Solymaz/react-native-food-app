import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)}
        onTermSubmit={() => console.log("submitted")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
