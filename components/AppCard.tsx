import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";
import TextButton from "./TextButton";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const AppCard = ({
  appImgUrl = require("@/assets/images/dev.png"),
  title = "A long title",
  subtitle = "a kinda longer desc over here",
  action = "Get",
}: {
  appImgUrl?: string;
  title?: string;
  subtitle?: string;
  action?: string;
}) => {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={appImgUrl}
          style={[
            styles.appIcon,
            { borderColor: Colors[colorScheme ?? "light"].background },
          ]}
          contentFit="cover"
          transition={100}
        />
      </View>
      <View style={styles.appText}>
        <ThemedText type="defaultBold">{title}</ThemedText>
        <ThemedText style={styles.appSubtitle}>{subtitle}</ThemedText>
      </View>
      <TextButton
        onPress={() => {}}
        width={70}
        hasBorder={false}
        backgroundColor={Colors[colorScheme ?? "light"].buttonTint}
        text={action}
        textColor={Colors[colorScheme ?? "light"].buttonText}
      />
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
    minWidth: 190,
  },
  appSubtitle: {
    color: "#909090",
  },
});
