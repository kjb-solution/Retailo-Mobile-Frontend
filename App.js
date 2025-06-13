import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BillingScreen from "./screens/BillingScreen/BillingScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback } from "react";
import Toast from "react-native-toast-message";
import { toastConfig } from "./components/toastConfig";
import ViewSales from "./screens/RestaurantScreens/ViewSales/ViewSales";
import Master from "./screens/MasterScreens/Master";

// Prevent native splash screen from auto hiding before app is ready
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={styles.container}
          edges={["top", "bottom"]}
          onLayout={onLayoutRootView}
        >
          <StatusBar style="auto" />
          {/* <BillingScreen /> */}

          {/* <ViewSales /> */}
          <Master />
        </SafeAreaView>
      </SafeAreaProvider>
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingBottom: 20,
  },
});
