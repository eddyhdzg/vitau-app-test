import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Box, Icon, Text } from "atoms";
import { ButtonStatus, ButtoSize } from "../button.types";
import styles from "../button.jss";
import { Theme } from "theme";
import { useTheme } from "@shopify/restyle";

interface Props {
  onPress?: () => void;
  status?: ButtonStatus;
  size?: ButtoSize;
  text?: string;
  icon?: string;
}

const ButtonSecondary: React.FC<Props> = ({
  status = "default",
  size,
  text,
  onPress,
  icon,
}) => {
  // Fix: change to hash
  const getButtonBoxVariant = () => {
    switch (size) {
      case "base":
        switch (status) {
          case "default":
            return "buttonOutlined";
          case "destructive":
            return "buttonOutlinedDestructive";
          default:
            return "buttonOutlined";
        }
      case "small":
        switch (status) {
          case "default":
            return "buttonOutlinedSmall";
          case "destructive":
            return "buttonOutlinedDestructiveSmall";
          default:
            return "buttonOutlinedSmall";
        }
      default:
        return "buttonOutlined";
    }
  };

  // Fix: change to hash
  const getButtonTextVariant = () => {
    switch (size) {
      case "base":
        switch (status) {
          case "default":
            return "buttonOutlined";
          case "destructive":
            return "buttonOutlinedDestructive";
          default:
            return "buttonOutlined";
        }
      case "small":
        switch (status) {
          case "default":
            return "buttonOutlinedSmall";
          case "destructive":
            return "buttonOutlinedDestructiveSmall";
          default:
            return "buttonOutlinedSmall";
        }
      default:
        return "buttonOutlined";
    }
  };

  const theme = useTheme<Theme>();
  const {
    buttonTextOutlinedDefault,
    buttonTextOutlinedDestructive,
  } = theme.colors;

  console.log(size, getButtonTextVariant());

  return (
    <TouchableOpacity onPress={onPress}>
      <Box variant={getButtonBoxVariant()}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              style={styles.leftIcon}
              color={
                status === "default"
                  ? buttonTextOutlinedDefault
                  : buttonTextOutlinedDestructive
              }
            />
          )}

          <Text variant={getButtonTextVariant()}>{text}</Text>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default ButtonSecondary;
