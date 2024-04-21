import * as functions from "@google-cloud/functions-framework";
import algoliasearch, { SearchClient } from "algoliasearch";

functions.http("searchContent", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");

  if (req.method === "OPTIONS") {
    // Pre-flight request. Reply successfully:
    res.status(204).send("Preflight success");
    return;
  }

  const { search }: { search?: string } = req.query;

  if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
    throw new Error("Algolia credentials are missing");
  }

  const algolia = algoliasearch(
    process.env.ALGOLIA_APPLICATION_ID,
    process.env.ALGOLIA_API_KEY
  );

  const content = await searchContent({ search, algolia });

  res.status(200).send(content);
});

export async function searchContent({
  search,
  algolia,
}: {
  search?: string;
  algolia: SearchClient;
}) {
  if (!search) {
    return [];
  }

  const index = algolia.initIndex("dev_daily_vietnamese");

  const searchResponse = await index.search(search);

  return searchResponse.hits;
}
