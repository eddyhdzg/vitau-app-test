import { createTheme } from "@shopify/restyle";
import tokens from "./tokens";
import { boxSharedStyles } from "./themeSharedStyles";

export const theme = createTheme({
  spacing: tokens.units,
  breakpoints: {},
  colors: {
    white: tokens.colors.white,
    // Box
    boxPrimary: tokens.colors.brandBlue,
    boxSuccess: tokens.colors.green60,
    boxDestructive: tokens.colors.red50,
    boxSoft: tokens.colors.grey5,
    // Button
    buttonTextDefault: tokens.colors.white,
    buttonTextOutlinedDefault: tokens.colors.brandBlue,
    buttonTextOutlinedDestructive: tokens.colors.red50,
    // Link
    link: tokens.colors.brandBlueShadow,
    // Tag
    tagOpacity: tokens.colors.grey0,
    //Status
    tagPurple: tokens.colors.lightpurple,
    tagBlue: tokens.colors.lighthblue,
    tagGreen: tokens.colors.lightgreen,
    tagOrange: tokens.colors.lightorange,
    tagRed: tokens.colors.lightred,
    tagYellow: tokens.colors.lightyellow,
    // Text
    textTitle: tokens.colors.grey100,
    textRegular: tokens.colors.grey90,
    textSecondary: tokens.colors.grey60,
    textSectionName: tokens.colors.grey50,
    textSectionTitle: tokens.colors.grey100,
    textgray: tokens.colors.grey90,
    textpurple: tokens.colors.purple,
    textblue: tokens.colors.blue,
    textyellow: tokens.colors.yellow,
    textred: tokens.colors.red,
    textorange: tokens.colors.orange,
    textgreen: tokens.colors.green
  },

  boxVariants: {
    buttonContained: {
      ...boxSharedStyles.base,
      backgroundColor: "boxPrimary",
    },
    buttonContainedSmall: {
      ...boxSharedStyles.small,
      backgroundColor: "boxPrimary",
    },
    buttonContainedSuccess: {
      ...boxSharedStyles.base,
      backgroundColor: "boxSuccess",
    },
    buttonContainedSuccessSmall: {
      ...boxSharedStyles.small,
      backgroundColor: "boxSuccess",
    },
    buttonContainedDestructive: {
      ...boxSharedStyles.base,
      backgroundColor: "boxDestructive",
    },
    buttonContainedDestructiveSmall: {
      ...boxSharedStyles.small,
      backgroundColor: "boxDestructive",
    },
    buttonOutlined: {
      ...boxSharedStyles.base,
      ...boxSharedStyles.outlined,
      borderColor: "boxPrimary",
    },
    buttonOutlinedDestructive: {
      ...boxSharedStyles.base,
      ...boxSharedStyles.outlined,
      borderColor: "boxDestructive",
    },
    buttonOutlinedSmall: {
      ...boxSharedStyles.small,
      ...boxSharedStyles.outlined,
      borderColor: "boxPrimary",
    },
    buttonOutlinedDestructiveSmall: {
      ...boxSharedStyles.small,
      ...boxSharedStyles.outlined,
      borderColor: "boxDestructive",
    },
    buttonBlank: {
      ...boxSharedStyles.base,
    },

    //OthersPage:
    tagContained: {
      paddingHorizontal: "md",
      height: 32,
      borderRadius: 22,
      alignItems: "center",
      justifyContent: "center",
    },
    statusContained: {
      paddingHorizontal: "base",
      height: 29,
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
      color: "buttonTextDefault",
      fontSize: 16,
      lineHeight: 22,
    },
    buttonDefaultSmall: {
      fontWeight: "600",
      color: "buttonTextDefault",
      fontSize: 14,
      lineHeight: 19,
    },
    buttonDefaultPrice: {
      fontWeight: "700",
      color: "buttonTextDefault",
      fontSize: 16,
      lineHeight: 22,
    },
    buttonOutlined: {
      fontWeight: "600",
      color: "buttonTextOutlinedDefault",
      fontSize: 16,
      lineHeight: 22,
    },
    buttonOutlinedDestructive: {
      fontWeight: "600",
      color: "buttonTextOutlinedDestructive",
      fontSize: 16,
      lineHeight: 22,
    },
    buttonOutlinedSmall: {
      fontWeight: "600",
      color: "buttonTextOutlinedDefault",
      fontSize: 14,
      lineHeight: 19,
    },
    buttonOutlinedDestructiveSmall: {
      fontWeight: "600",
      color: "buttonTextOutlinedDestructive",
      fontSize: 14,
      lineHeight: 19,
    },
    textRegular: {
      fontWeight: "400",
      color: "textRegular",
      fontSize: 16,
      lineHeight: 24,
    },
    textTag: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 24,
    },
    textStatus: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: 14,
      lineHeight: 21,
    },
  },
});

export type Theme = typeof theme;
