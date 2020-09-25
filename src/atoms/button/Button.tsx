import React from "react";
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
};

export default Button;
