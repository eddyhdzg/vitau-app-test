import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftIcon: {
    marginRight: 8,
    fontSize: 16,
  },
  rightIcon: {
    marginLeft: 8,
    fontSize: 16,
  },
  price: {
    marginRight: 35,
    height: 28,
    paddingHorizontal: 8,
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    justifyContent: "center",
    borderRadius: 4,
  },
});

export default styles;
