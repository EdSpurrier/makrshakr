import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "24l265kr",
  dataset: "production",
  apiVersion: "2022-10-21",
  useCdn: false,
};

const client = createClient(config);

export default client;
