import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./Router";
import { MantineProvider } from "@mantine/core";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <>
      <MantineProvider theme={{ loader: "bars" }}>
        <QueryClientProvider client={queryClient}>
          <Notifications />
          <Router />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}

export default App;
