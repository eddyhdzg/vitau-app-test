import React from "react";
import { ReactQueryProvider } from "./src/particles/serverStore";
import { ThemeProvider } from "./src/theme";
import { ButtonsPage } from "./src/pages";

export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <ButtonsPage />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
