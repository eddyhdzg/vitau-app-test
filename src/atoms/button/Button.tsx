import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  IButtonPrimary,
  IButtonSecondary,
  IButtonTertiary,
} from "./button.types";
import { Box, Icon, Text } from "../../atoms";
import styles from "./button.jss";
import useButton from "./useButton";

const Button: React.FC<IButtonPrimary | IButtonSecondary | IButtonTertiary> = ({
  type = "primary",
  status = "default",
  size = "base",
  text,
  onPress,
  icon,
  iconSide = "left",
  style,
  children,
}) => {
  const {
    textColor,
    boxVariant,
    textVariant,
    iconStyles,
    flexDirection,
    backgroundColor,
    borderColor,
    paddingHorizontal,
  } = useButton({ iconSide, size, status, type });

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        variant={boxVariant}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        paddingHorizontal={paddingHorizontal}
        style={style}
      >
        {children}

        <View style={[styles.container, { flexDirection }]}>
          {icon && (
            <Icon name={icon} color={textColor} size={16} style={iconStyles} />
          )}

          {text && (
            <Text variant={textVariant} color={textColor}>
              {text}
            </Text>
          )}
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
