import { createClient } from "offix-client";

export class ItemService {
  config = {
    httpUrl: "http://localhost:4000/graphql",
    wsUrl: "ws://localhost:4000/graphql"
  };
  createAClient = async () => {
    const client = await createClient(this.config);
  };
}
