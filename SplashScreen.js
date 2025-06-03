import { StyleSheet, View, Image } from "react-native";
import Icon from "./assets/splash-logo.png";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Icon} style={styles.image} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
});
