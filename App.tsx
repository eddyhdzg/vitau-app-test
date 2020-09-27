import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { ThemeProvider } from "theme";
import { ButtonsPage, OthersPage } from "pages";

export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
       {/*  <ButtonsPage /> */}
        <OthersPage/>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}
