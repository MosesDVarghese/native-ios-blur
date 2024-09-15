import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import ContentCard from "@/components/ContentCard";
import Header from "@/components/Header";

const Tab1 = () => {
  return (
    <View style={{ flex: 1, marginBottom: 80 }}>
      {/* <Header title="Hi" /> */}
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

export default Tab1;

const styles = StyleSheet.create({});
