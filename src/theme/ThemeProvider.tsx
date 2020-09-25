import React from "react";
import { theme } from "./theme";
import { ThemeProvider as RestyleProvider } from "@shopify/restyle";

const ThemeProvider: React.FC = ({ children }) => {
  return <RestyleProvider theme={theme}>{children}</RestyleProvider>;
};
export default ThemeProvider;
