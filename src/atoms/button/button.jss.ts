import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export const buttonVariants = {
  primary: {
    box: "buttonContained",
    text: {
      base: "buttonText",
      small: "buttonTextSmall",
    },
    color: {
      default: "boxPrimary",
      success: "boxSuccess",
      destructive: "boxDestructive",
      plain: "boxPlain",
    },
    textColor: {
      default: "buttonTextPrimary",
      success: "buttonTextPrimary",
      destructive: "buttonTextPrimary",
      plain: "buttonTextPrimary",
    },
  },
  secondary: {
    box: "buttonOutlined",
    text: {
      base: "buttonText",
      small: "buttonTextSmall",
    },
    color: {
      default: "boxPrimary",
      success: "boxSuccess",
      destructive: "boxDestructive",
      plain: "boxPlain",
    },
    textColor: {
      default: "buttonTextDefault",
      success: "buttonTextSuccess",
      destructive: "buttonTextDestructive",
      plain: "buttonTextPlain",
    },
  },
  tertiary: {
    box: "buttonBlank",
    text: {
      base: "buttonText",
      small: "buttonTextSmall",
    },
    color: {
      default: "transparent",
      success: "transparent",
      destructive: "transparent",
      plain: "transparent",
    },
    textColor: {
      default: "buttonTextDefault",
      success: "buttonTextSuccess",
      destructive: "buttonTextDestructive",
      plain: "buttonTextPlain",
    },
  },
};

export default styles;
