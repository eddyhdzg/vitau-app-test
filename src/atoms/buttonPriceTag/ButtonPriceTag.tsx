import React from "react";
import { View } from "react-native";
import { Text } from "../../atoms";
import styles from "./buttonPriceTag.jss";

const ButtonPriceTag: React.FC = ({ children }) => {
  return (
    <View style={styles.price}>
      <Text variant="buttonPriceTag">{children}</Text>
    </View>
  );
};

export default ButtonPriceTag;
