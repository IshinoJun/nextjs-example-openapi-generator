import { Configuration, ExampleApi } from "../openapi-generator/example-api";

export class ExampleClient {
  private config = new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_BASE_URL || "/api",
  });

  public exampleApi = new ExampleApi(this.config);
}
