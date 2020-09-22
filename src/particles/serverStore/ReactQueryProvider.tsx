import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

const ReactQueryProvider: React.FC = ({ children }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {children}
    </ReactQueryCacheProvider>
  );
};

export default ReactQueryProvider;
