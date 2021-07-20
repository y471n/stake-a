import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import WeatherListPage from "./pages/WeatherListPage";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <WeatherListPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
