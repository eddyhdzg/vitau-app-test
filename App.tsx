import React from "react";
import { ReactQueryProvider } from "particles/serverStore";
import { HomePage } from "pages";

export default function App() {
  return (
    <ReactQueryProvider>
      <HomePage />
    </ReactQueryProvider>
  );
}
