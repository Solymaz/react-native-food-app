import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ navigation }) {
  const [result, setResult] = useState();
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  return result ? (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo} // photo is a unique url / string so we can use it as keyExtractor
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  ) : (
    <Text>Name is missing!</Text>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 250,
  },
});
