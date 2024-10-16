import algoliasearch from "algoliasearch";

if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
  throw new Error("Algolia credentials not found");
}

const client = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_API_KEY
);

export const contentIndex = client.initIndex("dev_daily_vietnamese_date_desc");

export const HITS_PER_PAGE = 9;
