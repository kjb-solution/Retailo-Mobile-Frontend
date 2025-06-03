import React, { useEffect } from "react";
import { Modal, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const Drawer = ({ children, isOpen, setIsOpen }) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(width);

  useEffect(() => {
    translateX.value = withTiming(isOpen ? 0 : width, {
      duration: 200,
      easing: isOpen ? Easing.out(Easing.cubic) : Easing.in(Easing.cubic),
    });
  }, [isOpen, width]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="none" // Animation handled by reanimated
      onRequestClose={() => setIsOpen(false)}
    >
      {/* Drawer */}
      <Animated.View style={[styles.drawerContainer, animatedStyle, { width }]}>
        {/* Close Button */}
        <Pressable
          onPress={() => setIsOpen(false)}
          style={styles.closeButton}
          accessibilityLabel="Close drawer"
          accessibilityRole="button"
        >
          <Text style={styles.closeText}>X</Text>
        </Pressable>
        {children}
      </Animated.View>
    </Modal>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  drawerContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#fff",
    padding: 20,
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