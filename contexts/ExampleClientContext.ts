import React from "react";

import type { ExampleClient } from "../clients/ExampleClient";

export const ExampleClientContext = React.createContext<
  ExampleClient | undefined
>(undefined);
