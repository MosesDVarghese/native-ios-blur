import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ContentCard from "@/components/ContentCard";

const Tab2 = () => {
  return (
    <View style={{ flex: 1, marginBottom: 80 }}>
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

export default Tab2;

const styles = StyleSheet.create({});
