import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

interface IIconProps {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

const Icon: React.FC<IIconProps> = ({
  name,
  size = 16,
  color = "white",
  style,
}) => {
  return <FontAwesome name={name} size={size} color={color} style={style} />;
};

export default Icon;
