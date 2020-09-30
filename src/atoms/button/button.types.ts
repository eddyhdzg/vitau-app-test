import { StyleProp, TextStyle } from "react-native";

export type ButtonIconSide = "left" | "right";
export type ButtonSize = "base" | "small";
export type ButtonStatus = "default" | "plain" | "destructive" | "success";
export type ButtonType = "primary" | "secondary" | "tertiary";

export interface ButtonCommonProps {
  onPress?: () => void;
  status?: ButtonStatus;
  size?: ButtonSize;
  text?: string;
  icon?: string;
  iconSide?: ButtonIconSide;
  style?: StyleProp<TextStyle>;
}

export interface IButtonPrimary extends ButtonCommonProps {
  type?: "primary";
}

export interface IButtonSecondary extends ButtonCommonProps {
  type: "secondary";
}
export interface IButtonTertiary extends ButtonCommonProps {
  type: "tertiary";
}

