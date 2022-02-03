import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, Provider } from "urql";
import { getAccessToken } from "./../token";

interface AuthState {
  token: string;
}

function MyApp({ Component, pageProps }: any) {
  const client = createClient({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include",
    },
  });

  return (
    <Provider value={client}>
      <ChakraProvider>
        <Component {...pageProps} />{" "}
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
