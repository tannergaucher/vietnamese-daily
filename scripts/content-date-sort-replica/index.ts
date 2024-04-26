import algoliasearch, { SearchIndex } from "algoliasearch";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.ALGOLIA_APPLICATION_ID || !process.env.ALGOLIA_API_KEY) {
  throw new Error("Missing Algolia credentials");
}

const algolia = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_API_KEY
);

configureReplica({ index: algolia.initIndex("dev_daily_vietnamese") });

async function configureReplica({ index }: { index: SearchIndex }) {
  index
    .setSettings({
      replicas: [index.indexName + "_date_desc"],
    })
    .then(() => {
      console.log("Replica configured");
    });

  const replicaIndex = algolia.initIndex(index.indexName + "_date_desc");

  await replicaIndex
    .setSettings({
      ranking: ["desc(epochDate)"],
    })
    .then(() => {
      console.log("Replica settings configured");
    });
}
