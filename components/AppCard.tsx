import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import TextButton from "./TextButton";
import { Image } from "expo-image";

const AppCard = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={"@/assets/images/react-logo.png"}
          style={styles.appIcon}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.appText}>
        <ThemedText type="defaultBold" style={styles.appTitle}>
          A longer title
        </ThemedText>
        <ThemedText style={styles.appSubtitle}>Subtitle</ThemedText>
      </View>
      <TextButton onPress={() => {}} width={50} />
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  appIcon: {
    height: 50,
    width: 50,
    borderCurve: "circular",
    borderRadius: 12,
    borderWidth: 1,
    marginRight: 10,
  },
  appText: {
    flex: 1,
    flexDirection: "column",
    marginRight: 10,
  },
  appTitle: {},
  appSubtitle: {
    color: "#909090",
  },
});
