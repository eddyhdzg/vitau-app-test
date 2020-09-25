import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Box, Icon, Text } from "atoms";
import { ButtonStatus, ButtoSize } from "../button.types";
import styles from "../button.jss";

interface Props {
  onPress?: () => void;
  status?: ButtonStatus;
  size?: ButtoSize;
  text?: string;
  icon?: string;
  iconSide?: "left" | "right";
  price?: string;
}

const ButtonPrimary: React.FC<Props> = ({
  status,
  size,
  text,
  onPress,
  icon,
  iconSide = "left",
  price,
}) => {
  // Fix: change to hash
  const getButtonBoxVariant = () => {
    switch (size) {
      case "base":
        switch (status) {
          case "default":
            return "buttonContained";
          case "success":
            return "buttonContainedSuccess";
          case "destructive":
            return "buttonContainedDestructive";
          default:
            return "buttonContained";
        }
      case "small":
        switch (status) {
          case "default":
            return "buttonContainedSmall";
          case "success":
            return "buttonContainedSuccessSmall";
          case "destructive":
            return "buttonContainedDestructiveSmall";
          default:
            return "buttonContainedSmall";
        }
      default:
        return "buttonContained";
    }
  };

  // Fix: change to hash
  const getButtonTextVariant = () => {
    switch (size) {
      case "base":
        return "buttonDefault";
      case "small":
        return "buttonDefaultSmall";
      default:
        return "buttonDefault";
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Box variant={getButtonBoxVariant()}>
        <View style={styles.container}>
          {price && (
            <View style={styles.price}>
              <Text variant="buttonDefaultPrice">{price}</Text>
            </View>
          )}

          {icon && iconSide === "left" && (
            <Icon name={icon} style={styles.leftIcon} />
          )}

          <Text variant={getButtonTextVariant()}>{text}</Text>

          {icon && iconSide === "right" && (
            <Icon name={icon} style={styles.rightIcon} />
          )}
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
