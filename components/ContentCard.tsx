import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export type ContentCardProps = {
  variant?: "1" | "2" | "3" | "4" | "5";
  imageUrl?: string;
  lightColor?: string;
  darkColor?: string;
};

/**
 *
 * variant 1: small, get app
 *
 * variant 2: big, apps
 *
 */

const ContentCard = () => {
  const colorScheme = useColorScheme();

  return (
    <View>
      <View
        style={[
          styles.container,
          { backgroundColor: Colors[colorScheme ?? "light"].background },
        ]}
      >
        <ThemedText type="defaultSemiBold" style={{ color: "#c1c1c1" }}>
          Our Favorites
        </ThemedText>
        <ThemedText type="title" style={{ fontSize: 27 }}>
          Top iPhone apps this week
        </ThemedText>
        {/* AppCard */}
        <ThemedText>AppCard</ThemedText>
        <ThemedText>AppCard</ThemedText>
        <ThemedText>AppCard</ThemedText>
        <ThemedText>AppCard</ThemedText>
      </View>
    </View>
  );
};

export default ContentCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
  },
});
