import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      // /search will be added to the end of the base URL
      params: {
        limit: 50,
        term: searchTerm,
        location: "stockholm",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)} // onSearchTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      <Text>{results.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
