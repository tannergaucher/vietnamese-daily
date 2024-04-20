import Link from "next/link";

import { Card } from "@/app/components/card";
import { Grid } from "@/app/components/grid";
import { Pagination } from "@/app/components/pagination";
import { conversationImageBucket, getSignedUrl } from "../storage";
import { contentIndex } from "../algolia";
import { ContentHit } from "@functional-vietnamese/cloud-function-events";

type ContentHitWithSignedUrl = ContentHit & { signedUrl: string };

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
    type?: string | string[];
  };
}) {
  const hitsPerPage = 9;

  let typeFilters =
    searchParams.type && !Array.isArray(searchParams.type)
      ? `type:${`'${searchParams.type}'`}`
      : Array.isArray(searchParams.type)
      ? searchParams.type.map((type) => `type:${`'${type}'`}`).join(" OR ")
      : undefined;

  let { hits, nbHits } = await contentIndex.search<ContentHitWithSignedUrl>(
    "",
    {
      hitsPerPage,
      page: parseInt(searchParams.page || "0"),
      filters: typeFilters ? `${typeFilters}` : undefined,
    }
  );

  hits = await Promise.all(
    hits.map(async (hit) => {
      const signedUrl = await getSignedUrl({
        filePath: `${hit.situationId}.webp`,
        bucket: conversationImageBucket,
      });
      return {
        ...hit,
        signedUrl,
      };
    })
  );

  return (
    <div>
      <Grid>
        {hits.map((hit) => {
          return (
            <Link href={`conversation/${hit.objectID}`} key={hit.objectID}>
              <Card
                size="medium"
                image={
                  hit.signedUrl
                    ? {
                        src: hit.signedUrl,
                        width: 1000,
                        height: 1000,
                        alt: `Vibrant Vietnamese folk painting of ${hit.situation}`,
                      }
                    : undefined
                }
                small={new Date(hit.date).toDateString()}
                heading={hit.title}
                subHeading={hit.situation}
              />
            </Link>
          );
        })}
      </Grid>
      <Pagination nbHits={nbHits} hitsPerPage={9} />
    </div>
  );
}
