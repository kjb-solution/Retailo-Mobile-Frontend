import React, { useEffect, useState, useRef } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from "react-native-reanimated";
import AntDesign from "@expo/vector-icons/AntDesign";

const Drawer = ({ children, isOpen, setIsOpen }) => {
  const { width } = useWindowDimensions();
  const translateX = useSharedValue(width);
  const [modalVisible, setModalVisible] = useState(isOpen);

  const isAnimating = useRef(false);

  useEffect(() => {
    if (isOpen) {
      setModalVisible(true);
      isAnimating.current = true;
      translateX.value = withTiming(
        0,
        {
          duration: 200,
          easing: Easing.inOut(Easing.cubic), // Changed easing for intro
        },
        (finished) => {
          if (finished) {
            isAnimating.current = false;
          }
        }
      );
    } else {
      isAnimating.current = true;
      translateX.value = withTiming(
        width,
        {
          duration: 200,
          easing: Easing.inOut(Easing.cubic), // Changed easing for exit
        },
        (finished) => {
          if (finished) {
            runOnJS(setModalVisible)(false);
            isAnimating.current = false;
          }
        }
      );
    }
  }, [isOpen, width]);

  useEffect(() => {
    if (isOpen && !modalVisible && !isAnimating.current) {
      setModalVisible(true);
    }
  }, [isOpen, modalVisible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
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
      {modalVisible && (
        <Pressable
          style={styles.overlay}
          onPress={() => setIsOpen(false)}
          accessibilityLabel="Close drawer"
          accessibilityRole="button"
        />
      )}

      <Animated.View style={[styles.drawerContainer, animatedStyle, { width }]}>
        <Pressable
          onPress={() => setIsOpen(false)}
          style={styles.closeButton}
          accessibilityLabel="Close drawer"
          accessibilityRole="button"
        >
          <Text style={styles.closeText}>
            <AntDesign name="close" size={24} color="black" />
          </Text>
        </Pressable>
        {children}
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
