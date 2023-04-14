import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useRestaurants from "../hooks/useRestaurants";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useRestaurants();

  function filterResultsByPrice(price) {
    // price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  }
  // "flex: 1" in the most parent view is to fix the scrolling bug on android device.
  // This is to tell the device to use the actual visible screen that is visible and not more
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={(newSearchTerm) => setSearchTerm(newSearchTerm)} // onSearchTermChange={setSearchTerm}
        onTermSubmit={searchApi}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
