import { StackScreenWithSearchBar } from "@/constants/layout";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

const Tab5Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: "Search",
          }}
        />
      </Stack>
    </View>
  );
};

export default Tab5Layout;

const styles = StyleSheet.create({});
