import { ContentHit } from "@functional-vietnamese/cloud-function-events";
import moment from "moment-timezone";
import Link from "next/link";
import React, { Suspense } from "react";

import { Card } from "@/app/components/card";
import { Grid } from "@/app/components/grid";
import { Pagination } from "@/app/components/pagination";
import { RemoveFilterButtons } from "@/app/components/remove-filter-buttons";

import { contentIndex } from "../algolia";

type ContentWithSrc = ContentHit & { imageSrc: string };

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
    type?: string | string[];
  };
}) {
  const hitsPerPage = 9;

  const typeFilters =
    searchParams.type && !Array.isArray(searchParams.type)
      ? `type:${`'${searchParams.type}'`}`
      : Array.isArray(searchParams.type)
      ? searchParams.type.map((type) => `type:${`'${type}'`}`).join(" OR ")
      : undefined;

  const { hits, nbHits } = await contentIndex.search<ContentWithSrc>("", {
    hitsPerPage,
    page: parseInt(searchParams.page || "0"),
    filters: typeFilters ? `${typeFilters}` : undefined,
  });

  return (
    <div>
      <RemoveFilterButtons />
      <Grid>
        {hits.map((hit) => {
          return (
            <Link href={`conversation/${hit.objectID}`} key={hit.objectID}>
              <Card
                size="medium"
                image={{
                  src: `https://storage.googleapis.com/conversation-dalee-images/${hit.situationId}.webp`,
                  width: 1000,
                  height: 1000,
                  alt: `Vibrant Vietnamese folk painting of ${hit.situation}`,
                }}
                small={moment.tz(hit.date, "Asia/Ho_Chi_Minh").format("LL")}
                heading={hit.title}
                subHeading={hit.situation}
                badge={hit.type}
              />
            </Link>
          );
        })}
      </Grid>
      <Suspense>
        <Pagination nbHits={nbHits} hitsPerPage={9} />
      </Suspense>
    </div>
  );
}
