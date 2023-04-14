import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function ResultsDetail({ result }) {
  return (
    <View>
      <Text>{result.name}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({});
