import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: 400,
  },
  image: {
    width: 160,
    height: 160,
  },
  body: {
    padding: 8,
  },
  textContainer: {
    marginBottom: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
  },
  regular: {
    fontSize: 14,
    fontWeight: "400",
  },
  secondary: {
    fontSize: 14,
    fontWeight: "400",
    color: "#666",
  },
});

export default styles;
