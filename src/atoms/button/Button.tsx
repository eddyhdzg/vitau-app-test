import React from "react";
import { ButtonStatus, ButtonType, ButtoSize } from "./button.types";
import ButtonPrimary from "./buttonVariants/ButtonPrimary";
import ButtonSecondary from "./buttonVariants/ButtonSecondary";

// Fix: Dynamic types
interface Props {
  onPress?: () => void;
  type?: ButtonType;
  status?: ButtonStatus;
  size?: ButtoSize;
  text?: string;
  icon?: string;
  iconSide?: "left" | "right";
  price?: string;
}

const Button: React.FC<Props> = ({
  type = "primary",
  size = "base",
  ...rest
}) => {
  switch (type) {
    case "primary":
      return <ButtonPrimary size={size} {...rest} />;
    case "secondary":
      return <ButtonSecondary size={size} {...rest} />;

    default:
      return <ButtonPrimary {...rest} />;
  }
};

export default Button;
