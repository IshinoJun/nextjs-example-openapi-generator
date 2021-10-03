import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ExampleClientContext } from "../contexts";
import { ExampleClient } from "../clients/ExampleClient";

const exampleClient = new ExampleClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExampleClientContext.Provider value={exampleClient}>
      <Component {...pageProps} />
    </ExampleClientContext.Provider>
  );
}
export default MyApp;
