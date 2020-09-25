import { createTheme } from "@shopify/restyle";
import tokens from "./tokens";

export const theme = createTheme({
  spacing: tokens.units,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  colors: {
    white: tokens.colors.white,
    // Box
    boxPrimary: tokens.colors.brandBlue,
    boxSuccess: tokens.colors.green60,
    boxDestructive: tokens.colors.red50,
    boxSoft: tokens.colors.grey5,
    // Button
    buttonTextDefault: tokens.colors.brandBlue,
    buttonTextPlain: tokens.colors.grey70,
    buttonTextDestructive: tokens.colors.red50,
    // Link
    link: tokens.colors.brandBlueShadow,
    // Tag
    tagOpacity: tokens.colors.grey0,
    // Text
    textTitle: tokens.colors.grey100,
    textRegular: tokens.colors.grey90,
    textSecondary: tokens.colors.grey60,
    textSectionName: tokens.colors.grey50,
    textSectionTitle: tokens.colors.grey100,
  },
  boxVariants: {
    buttonContained: {
      backgroundColor: "boxPrimary",
      paddingHorizontal: "3xl",
      height: 44,
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  textVariants: {
    sectionHeaderTitle: {
      color: "textSectionTitle",
      fontFamily: "Galano Grotesque Alt",
      fontWeight: "600",
      fontSize: 36,
      lineHeight: 36,
    },
    sectionHeaderName: {
      color: "textSectionName",
      fontWeight: "800",
      fontSize: 14,
      lineHeight: 19,
      textTransform: "uppercase",
      letterSpacing: 2,
    },
    sectionTitle: {
      color: "textTitle",
      fontFamily: "Galano Grotesque Alt",
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 24,
    },
    sectionSubTitle: {
      color: "textSecondary",
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "700",
      textTransform: "uppercase",
      letterSpacing: 2,
    },
    buttonDefault: {
      fontWeight: "600",
      color: "white",
      fontSize: 16,
      lineHeight: 22,
    },
    textRegular: {
      fontWeight: "400",
      color: "textRegular",
      fontSize: 16,
      lineHeight: 24,
    },
  },
});

export type Theme = typeof theme;
