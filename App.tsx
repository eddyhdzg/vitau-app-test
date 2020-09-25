import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { ThemeProvider } from "theme";
import { ButtonsPage } from "pages";

export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <ButtonsPage />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
