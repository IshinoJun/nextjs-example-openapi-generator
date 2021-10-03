import { useContext } from "react";

import type { ExampleClient } from "../clients/ExampleClient";
import { ExampleClientContext } from "../contexts";

export const useExampleClient = (): ExampleClient => {
  const exampleClient = useContext(ExampleClientContext);
  if (!exampleClient)
    throw new Error("useExampleClient must be inside a Provider with a value");

  return exampleClient;
};
