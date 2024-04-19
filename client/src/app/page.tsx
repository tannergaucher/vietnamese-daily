import Link from "next/link";

import { Card } from "@/app/components/card";
import { Grid } from "@/app/components/grid";
import { Pagination } from "@/app/components/pagination";
import { conversationImageBucket, getSignedUrl } from "../storage";
import { contentIndex } from "../algolia";

type ContentHit = {
  objectID: string;
  title: string;
  date: string;
  situation: string;
  situationId: string;
  type: string;
  text: string;
} & {
  signedUrl?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
  };
}) {
  const hitsPerPage = 9;

  let { hits, nbHits } = await contentIndex.search<ContentHit>("", {
    hitsPerPage,
    page: parseInt(searchParams.page || "0"),
  });

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
