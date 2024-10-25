import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./Router";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClinet = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet}>
      <Router />
    </QueryClientProvider>
  </StrictMode>
);
