import { StackScreenWithSearchBar } from "@/constants/layout";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const Tab2Layout = () => {
  return (
    <View style={defaultStyles.container}>
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

export default Tab2Layout;

// const styles = StyleSheet.create({});
