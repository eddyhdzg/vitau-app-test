import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Box, Icon, Text } from "atoms";
import { ButtonStatus, ButtoSize } from "../button.types";
import styles from "../button.jss";

interface IButtonProps {
  onPress?: () => void;
  status?: ButtonStatus;
  size?: ButtoSize;
  text?: string;
  icon?: string;
}

const ButtonPrimary: React.FC<IButtonProps> = ({
  status,
  size,
  text,
  onPress,
  icon,
}) => {
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
      default:
        return "buttonContained";
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Box variant={getButtonBoxVariant()}>
        <View style={styles.container}>
          {icon && <Icon name={icon} style={styles.icon} />}
          <Text variant="buttonDefault">{text}</Text>
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
