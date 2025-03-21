/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#000000";
const tintColorDark = "#ffffff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#ffffff",
    headerBackground: "orange",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#c68e17",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#000000",
    headerBackground: "rgb(1,1.1)",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
