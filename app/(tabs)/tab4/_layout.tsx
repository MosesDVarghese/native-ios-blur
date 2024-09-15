import { StackScreenWithSearchBar } from "@/constants/layout";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

const Tab4Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Arcade",
          }}
        />
      </Stack>
    </View>
  );
};

export default Tab4Layout;

const styles = StyleSheet.create({});
