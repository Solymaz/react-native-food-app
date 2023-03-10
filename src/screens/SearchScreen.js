import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async () => {
    try {
      const response = await yelp.get("/search", {
        // /search will be added to the end of the base URL as it should be according to the yelp documentation
        params: {
          limit: 50,
          term: searchTerm,
          location: "stockholm",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)} // onSearchTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage.length > 0 && <Text>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
