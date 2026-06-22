import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rzg5qvy1",
  dataset: "production",
  apiVersion: "2023-06-01",
  useCdn: true,
});
