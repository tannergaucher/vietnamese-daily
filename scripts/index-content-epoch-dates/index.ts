import algoliasearch, { SearchIndex } from "algoliasearch";
import { ContentHit } from "@functional-vietnamese/cloud-function-events";

import dotenv from "dotenv";

dotenv.config();

if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
  throw new Error("Missing Algolia credentials");
}

const algolia = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_API_KEY
);

indexContentEpochDates({ index: algolia.initIndex("dev_daily_vietnamese") });

async function indexContentEpochDates({ index }: { index: SearchIndex }) {
  const query = await index.search<ContentHit>("", {
    hitsPerPage: 1000,
  });

  const records = query.hits.map((hit) => {
    return {
      ...hit,
      epochDate: new Date(hit.date).getTime(),
    };
  });

  console.log(records);

  await index.saveObjects(records);
}
