import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";
import { color, ColorProps, useRestyle } from "@shopify/restyle";
import { Theme } from "theme";

interface IIconProps {
  name: string;
  size?: number;
  style?: StyleProp<TextStyle>;
}

const restyleFunctions = [color];

const Icon: React.FC<IIconProps & ColorProps<Theme>> = ({
  size = 16,
  ...rest
}) => {
  const props = useRestyle(restyleFunctions, rest);
  return <FontAwesome5 name="accessible-icon" size={size} {...props} />;
};

Icon.defaultProps = {
  color: "textRegular",
};

export default Icon;
