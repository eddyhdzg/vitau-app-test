import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { OthersPage } from "pages";
import { ThemeProvider } from "theme";

export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <OthersPage />
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
