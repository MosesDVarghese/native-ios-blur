import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ThemedText } from "./ThemedText";
import { SafeAreaView } from "react-native-safe-area-context";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import TextButton from "./TextButton";
import { BlurView } from "expo-blur";

const Header = ({
  title = "",
  showBackButton = false,
  showUpgrade = false,
  showSearch = false,
  showSettings = false,
  mt = 0,
}) => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const headerBorderColor = Colors[colorScheme ?? "light"].outlineLight;

  const isNotUpgraded = true;
  const onUpgradePress = () => {
    console.log("upgrade");
  };

  return (
    <View>
      <SafeAreaView style={{}}>
        {/* <BlurView
          intensity={100}
          style={{
            ...StyleSheet.absoluteFillObject,
            overflow: "hidden",
          }}
        > */}
        <View style={[styles.container, { marginTop: mt }]}>
          <View style={styles.leftIcons}>
            {showBackButton && (
              <View>
                <Ionicons
                  name="chevron-back"
                  color={Colors[colorScheme ?? "light"].tint}
                  size={24}
                />
              </View>
            )}
          </View>
          <ThemedText type="defaultBold">{title}</ThemedText>
          <View style={styles.rightIcons}>
            {showUpgrade && isNotUpgraded && (
              <TextButton
                onPress={onUpgradePress}
                width={100}
                text={"Upgrade"}
              />
            )}
            {showSearch && (
              <View>
                <Ionicons
                  name="search"
                  color={Colors[colorScheme ?? "light"].tint}
                  size={28}
                />
              </View>
            )}
            {showSettings && (
              <View>
                <Ionicons
                  name="settings-sharp"
                  color={Colors[colorScheme ?? "light"].tint}
                  size={24}
                />
              </View>
            )}
          </View>
        </View>
        {/* </BlurView> */}
      </SafeAreaView>
      <View
        style={{ borderBottomWidth: 1, borderBottomColor: headerBorderColor }}
      ></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  leftIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    gap: 10,
    left: 0,
  },
  rightIcons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    gap: 10,
    right: 0,
  },
});
