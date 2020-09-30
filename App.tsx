import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { ThemeProvider } from "theme";
import { ProviderNavigation } from "navigation/Provider";


export default function App() {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
          <ProviderNavigation/>
      </ThemeProvider>
    </ReactQueryProvider>
  );
}



