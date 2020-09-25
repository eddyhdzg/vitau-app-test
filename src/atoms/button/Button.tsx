import React from "react";
<<<<<<< HEAD
import { TouchableOpacity, View } from "react-native";

import { Box, Text } from "atoms";

interface Props {
  onPress: () => void;
}

const Button = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box variant="buttonContained">
        <Text variant="buttonDefault">XX Hola</Text>
      </Box>
    </TouchableOpacity>
  );
=======
import { ButtonStatus, ButtonType, ButtoSize } from "./button.types";
import ButtonPrimary from "./buttonVariants/ButtonPrimary";

interface Props {
  onPress?: () => void;
  type?: ButtonType;
  status?: ButtonStatus;
  size?: ButtoSize;
  text?: string;
  icon?: string;
}

const Button: React.FC<Props> = ({
  type = "primary",
  size = "base",
  ...rest
}) => {
  switch (type) {
    case "primary":
      return <ButtonPrimary size={size} {...rest} />;

    default:
      return <ButtonPrimary {...rest} />;
  }
>>>>>>> Eddy/APP/restyle
};

export default Button;
