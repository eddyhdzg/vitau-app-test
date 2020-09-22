import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { Home } from "pages";

export default function App() {
  return (
    <ReactQueryProvider>
      <Home />
    </ReactQueryProvider>
  );
}
