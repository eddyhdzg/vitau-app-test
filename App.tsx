import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { OthersPage } from "pages";

export default function App() {
  return (
    <ReactQueryProvider>
      <OthersPage />
    </ReactQueryProvider>
  );
}
