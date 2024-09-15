import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import ContentCard from "./ContentCard";

const SampleContent = () => {
  return (
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: 24 }}
      >
        <View style={{ marginTop: 15 }} />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </ScrollView>
    </View>
  );
};

export default SampleContent;

const styles = StyleSheet.create({});
