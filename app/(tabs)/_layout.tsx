import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontWeight: "500",
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopWidth: 0,
          paddingTop: 8,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="(tab1)"
        options={{
          title: "Today",
          tabBarIcon: ({ color }) => (
            <Ionicons name="reader-outline" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: "Games",
          tabBarIcon: ({ color }) => (
            <Ionicons name="rocket" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab3"
        options={{
          title: "Apps",
          tabBarIcon: ({ color }) => (
            <Ionicons name="layers" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab4"
        options={{
          title: "Arcade",
          tabBarIcon: ({ color }) => (
            <Ionicons name="game-controller" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tab5"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
