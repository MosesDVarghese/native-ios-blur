import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

const Tab1Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerLargeTitle: true,
            headerTransparent: true,
            headerBlurEffect: "prominent",
            headerTitle: "Search",
          }}
        />
      </Stack>
    </View>
  );
};

export default Tab1Layout;

const styles = StyleSheet.create({});
