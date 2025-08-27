import { createRoot } from "react-dom/client";
// import App from "./App";

import App from "./ReactQueryApp.jsx";
// import { Provider } from "react-redux"; 
// import { store } from "./store.js";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const container = document.getElementById("root");
const root = createRoot(container);

const queryClient = new QueryClient()

root.render(
  //last time redux le store pathau nw ko lage Provider store gare ka themm
  //so now query pathau nw ko lage 
  //yo khale ko comp props.children lene comp ho
  <QueryClientProvider client={queryClient}>
    <App/>
  </QueryClientProvider>
);


