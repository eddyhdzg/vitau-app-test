import React from "react";
import { lightTheme } from "./theme";
import { ThemeProvider as RestyleProvider } from "@shopify/restyle";

const ThemeProvider: React.FC = ({ children }) => {
  return <RestyleProvider theme={lightTheme}>{children}</RestyleProvider>;
};
export default ThemeProvider;
