import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ContentCard from "@/components/ContentCard";
import { ThemedText } from "@/components/ThemedText";

const Tab1 = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ paddingHorizontal: 24 }}
      >
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

export default Tab1;

const styles = StyleSheet.create({});
