import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BillingScreen from "./screens/BillingScreen/BillingScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";

// Prevent native splash screen from autohiding before app is ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the native splash screen to hide once the layout has happened
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Or a custom loading indicator if you prefer
  }

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
      onLayout={onLayoutRootView}
    >
      <StatusBar style="auto" />
      <BillingScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingBottom: 20,
  },
});
