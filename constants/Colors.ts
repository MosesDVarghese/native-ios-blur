/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    buttonText: "#007aff",
    background: "#fff",
    tint: tintColorLight,
    buttonTint: "#eeeeef",
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    outlineLight: "#e1e1e1",
    outlineMedium: "#d1d1d1",
  },
  dark: {
    text: "#ECEDEE",
    buttonText: "#007aff",
    background: "#151718",
    tint: tintColorDark,
    buttonTint: "#313135",
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    outlineLight: "#1e1e1e",
    outlineMedium: "#2e2e2e",
  },
};
