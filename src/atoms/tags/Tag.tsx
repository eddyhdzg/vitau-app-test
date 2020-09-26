import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Box, Icon, Text } from "atoms";
import { TagColor, TagType } from "./tag.types";
import styles from "./tag.jss";
import {theme} from "../../theme/theme"

interface Props {
  onPress?: () => void;
  status?: TagType;
  color?: TagColor;
  text?: string;
  icon?: string;
  iconSide?:string;
}

const Tag: React.FC<Props> = ({
  status,
  color,
  text,
  onPress,
  icon,
  iconSide = "right",
}) => {
  // Fix: change to hash
  const getTagColorVariant = () => {
    switch (color) {
        case "purple":
            return theme.colors.tagPurple;
        case "blue":
            return theme.colors.tagBlue;
        case "orange":
            return theme.colors.tagOrange;
        case "gray":
            return theme.colors.boxSoft;
        case "red":
          return theme.colors.tagRed;
        case "yellow":
          return theme.colors.tagYellow;
        case "green":
          return theme.colors.tagGreen;
        default:
            return theme.colors.tagPurple;
    }
  };

  const getTypeVariant = () => {
    switch (status) {
        case "tag":
            return "tagContained";
        case "status":
            return "statusContained";
        default:
            return "statusContained";
    }
  };

  // Fix: change to hash
  const getColorText = () => {
    switch (color) {
      case "purple":
          return theme.colors.textpurple;
      case "blue":
          return theme.colors.textblue;
      case "orange":
          return theme.colors.textorange;
      case "gray":
          return theme.colors.textgray;
      case "red":
        return theme.colors.textred;
      case "yellow":
        return theme.colors.textyellow;
      case "green":
        return theme.colors.textgreen;
      default:
          return theme.colors.textpurple;
    }
  };

  const getTypeText = () => {
    switch (status) {
      case "tag":
          return "textTag";
      case "status":
          return "textStatus";
      default:
          return theme.colors.textpurple;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Box variant={getTypeVariant()} style={{backgroundColor:getTagColorVariant()}}>
        <View style={styles.container}>
          {icon && iconSide === "left" && (
            <Icon name={icon} style={styles.leftIcon} />
          )}

          <Text variant={getTypeText()} style={{color:getColorText()}}>{text}</Text>

          {icon && iconSide === "right" && (
            <Icon name={icon} style={styles.rightIcon} color={getColorText()} />
          )}
        </View>
      </Box>
    </TouchableOpacity>
  );
};

export default Tag;
