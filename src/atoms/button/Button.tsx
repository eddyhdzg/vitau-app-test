import React from "react";
import { Button as RNButton, StyleProp, View, ViewStyle } from "react-native";

interface IButtonProps {
  title: string;
  onPress: (...args: any[]) => void;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<IButtonProps> = ({ onPress, title, style }) => {
  return (
    <View style={style}>
      <RNButton onPress={onPress} title={title} />
    </View>
  );
};

export default Button;
