import { createTheme } from "@shopify/restyle";
import tokens from "./tokens";
import { boxSharedStyles, textSharedStyles } from "./themeSharedStyles";

export const theme = createTheme({
  spacing: tokens.units,
  breakpoints: {},
  colors: {
    // Common
    white: tokens.colors.white,
    transparent: tokens.colors.transparent,
    // Box
    boxPrimary: tokens.colors.brandBlue,
    boxSuccess: tokens.colors.green60,
    boxDestructive: tokens.colors.red50,
    boxPlain: tokens.colors.grey70,
    boxSoft: tokens.colors.grey5,
    // Button
    buttonTextPrimary: tokens.colors.white,
    buttonTextDefault: tokens.colors.brandBlue,
    buttonTextPlain: tokens.colors.grey70,
    buttonTextSuccess: tokens.colors.green60,
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
      ...boxSharedStyles.button,
    },
    buttonOutlined: {
      ...boxSharedStyles.button,
      borderWidth: 1,
    },
    buttonBlank: {
      ...boxSharedStyles.button,
    },
    buttonLink: {
      ...boxSharedStyles.link,
    },
  },
  borderRadii: {
    xs: 1,
    sm: 2,
    base: 4,
    lg: 8,
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
    textRegular: {
      fontWeight: "400",
      color: "textRegular",
      fontSize: 16,
      lineHeight: 24,
    },
    buttonPriceTag: {
      fontWeight: "700",
      color: "buttonTextPrimary",
      fontSize: 16,
      lineHeight: 22,
    },
    buttonText: {
      ...textSharedStyles.button.base,
    },
    buttonTextSmall: {
      ...textSharedStyles.button.small,
    },
    buttonLinkText: {
      ...textSharedStyles.link.base,
    },
    buttonLinkTextSmall: {
      ...textSharedStyles.link.small,
    },
    buttonLinkTextExtraSmall: {
      ...textSharedStyles.link.extraSmall,
    },
  },
});

export type Theme = typeof theme;
