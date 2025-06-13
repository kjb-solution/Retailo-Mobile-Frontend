import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemedText from "./ThemedText";

const Drawer = ({ children, isOpen, setIsOpen, title = "" }) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(width);
  const overlayOpacity = useSharedValue(0);
  const [modalVisible, setModalVisible] = useState(isOpen);
  const isAnimating = useSharedValue(false);

  useEffect(() => {
    if (isOpen) {
      setModalVisible(true);
      translateX.value = width;
      isAnimating.value = true;

      translateX.value = withSpring(
        0,
        {
          damping: 18,
          stiffness: 150,
          mass: 0.9,
          overshootClamping: true,
        },
        (finished) => {
          if (finished) {
            isAnimating.value = false;
          }
        }
      );

      overlayOpacity.value = withTiming(1, { duration: 300 });
    } else {
      isAnimating.value = true;

      translateX.value = withSpring(
        width,
        {
          damping: 18,
          stiffness: 150,
          mass: 0.9,
          overshootClamping: true,
        },
        (finished) => {
          if (finished) {
            runOnJS(setModalVisible)(false);
            isAnimating.value = false;
          }
        }
      );

      overlayOpacity.value = withTiming(0, { duration: 300 });
    }
  }, [isOpen, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="none"
      onRequestClose={() => {
        if (isOpen) {
          setIsOpen(false);
        }
      }}
    >
      <Animated.View style={[styles.overlay, overlayStyle]}>
        <Pressable
          style={StyleSheet.absoluteFill}
          onPress={() => setIsOpen(false)}
          accessibilityLabel="Close drawer"
          accessibilityRole="button"
        />
      </Animated.View>

      <Animated.View style={[styles.drawerContainer, animatedStyle, { width }]}>
        <View style={styles.headerContainer}>
          <ThemedText style={styles.sectionTitle}>{title}</ThemedText>
          <Pressable
            onPress={() => setIsOpen(false)}
            style={styles.closeButton}
            accessibilityLabel="Close drawer"
            accessibilityRole="button"
          >
            <Text style={styles.closeText}>
              <AntDesign name="close" size={24} color="white" />
            </Text>
          </Pressable>
        </View>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView
              contentContainerStyle={styles.container}
              keyboardShouldPersistTaps="handled"
            >
              {children}
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Animated.View>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 9,
  },
  container: {
    marginBottom: 30,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingVertical: 5,
    backgroundColor: "#233250",
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    paddingHorizontal: 10,
  },
  drawerContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#fff",
    zIndex: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  closeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
