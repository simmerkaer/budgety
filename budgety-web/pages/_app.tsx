import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient, makeOperation, Provider } from "urql";
import { authExchange } from "@urql/exchange-auth";

interface AuthState {
  token: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient({
    url: "http://localhost:4000/graphql",
    // exchanges: [
    //   authExchange({
    //     addAuthToOperation: ({
    //       authState,
    //       operation,
    //     }: {
    //       authState: AuthState;
    //       operation: any;
    //     }) => {
    //       // the token isn't in the auth state, return the operation without changes
    //       if (!authState || !authState.token) {
    //         return operation;
    //       }

    //       // fetchOptions can be a function (See Client API) but you can simplify this based on usage
    //       const fetchOptions =
    //         typeof operation.context.fetchOptions === "function"
    //           ? operation.context.fetchOptions()
    //           : operation.context.fetchOptions || {};

    //       return makeOperation(operation.kind, operation, {
    //         ...operation.context,
    //         fetchOptions: {
    //           ...fetchOptions,
    //           headers: {
    //             ...fetchOptions.headers,
    //             Authorization: authState.token,
    //           },
    //         },
    //       });
    //     },
    //     getAuth: async ({
    //       authState,
    //       mutate,
    //     }: {
    //       authState: AuthState;
    //       mutate: any;
    //     }) => {
    //       // for initial launch, fetch the auth state from storage (local storage, async storage etc)
    //       if (!authState && typeof window !== "undefined") {
    //         const token = localStorage.getItem("token");
    //         if (token) {
    //           return { token };
    //         }
    //         return null;
    //       }
    //     },
    //   }),
    // ],
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
