import { buttonVariants } from "./button.jss";
import {
  ButtonIconSide,
  ButtonSize,
  ButtonStatus,
  ButtonType,
} from "./button.types";

interface Params {
  iconSide: ButtonIconSide;
  size: ButtonSize;
  status: ButtonStatus;
  type: ButtonType;
}

const useButton = ({ iconSide, size, status, type }: Params) => {
  const variant = buttonVariants[type];
  const color = variant.color[status];
  const textColor = variant.textColor[status];
  const boxVariant = variant.box;
  const textVariant = variant.text[size];

  const iconStyles = {
    marginRight: iconSide === "left" ? 8 : 0,
    marginLeft: iconSide === "right" ? 8 : 0,
  };

  const flexDirection: "row" | "row-reverse" =
    iconSide === "left" ? "row" : "row-reverse";

  const backgroundColor = type === "primary" && color;
  const borderColor = type === "secondary" && color;
  const paddingHorizontal = size === "base" ? "3xl" : "base";

  return {
    textColor,
    boxVariant,
    textVariant,
    iconStyles,
    flexDirection,
    backgroundColor,
    borderColor,
    paddingHorizontal,
  };
};

export default useButton;
