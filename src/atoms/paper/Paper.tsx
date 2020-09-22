import React from "react";
import { View } from "react-native";
import styles from "./paper.jss";

const Paper: React.FC = ({ children }) => {
  return <View style={styles.paper}>{children}</View>;
};

export default Paper;
