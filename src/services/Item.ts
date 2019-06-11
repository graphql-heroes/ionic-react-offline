import { createClient, VoyagerClient } from "offix-client";
import { ADD_TASK } from "../graphQL/queries/graphql.queries";

export class ItemService {
  client: any;

  config = {
    httpUrl: "http://localhost:4000/graphql",
    wsUrl: "ws://localhost:4000/graphql"
  };

  createAClient = async () => {
    if (this.client) {
      this.client = await createClient(this.config);
    }
    return this.client;
  };

  getItems = async () => {
    console.log("In method");
    const client = await createClient(this.config);
    const data = await client.query({
      query: ADD_TASK,
      fetchPolicy: "network-only",
      errorPolicy: "none"
    });
    console.log("data", data);
  };
}
