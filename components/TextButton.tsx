import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ThemedText } from "./ThemedText";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const TextButton = ({
  onPress,
  width = 150,
  hasBorder = false,
  borderRadius = 45,
  text = "Button",
  textColor = "",
  backgroundColor = "",
}: {
  onPress: () => void;
  width: number;
  hasBorder?: boolean;
  borderRadius?: number;
  text?: string;
  textColor?: string;
  backgroundColor?: string;
}) => {
  const colorScheme = useColorScheme();
  const borderColor = Colors[colorScheme ?? "light"].outlineMedium;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          minWidth: width,
          borderRadius: borderRadius,
          borderColor: hasBorder ? borderColor : backgroundColor,
          backgroundColor: backgroundColor,
        },
      ]}
      onPress={onPress}
    >
      <ThemedText
        type="defaultSemiBold"
        style={{
          color:
            textColor == "" ? Colors[colorScheme ?? "light"].text : textColor,
        }}
      >
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderCurve: "circular",
  },
});
