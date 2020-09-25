import React from "react";
import { TouchableOpacity, View } from "react-native";

import { Box, Text } from "atoms";

interface Props {
  onPress: () => void;
}

const Button = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box variant="buttonContained">
        <Text variant="buttonDefault">Hola</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Button;
