import { ContentHit } from "@functional-vietnamese/cloud-function-events";
import Link from "next/link";
import React, { Suspense } from "react";

import { Card } from "@/app/components/card";
import { Grid } from "@/app/components/grid";
import { Pagination } from "@/app/components/pagination";
import { RemoveFilterButtons } from "@/app/components/remove-filter-buttons";

import { contentIndex, HITS_PER_PAGE } from "../algolia";

import { formatDate } from "./utils/format-date";

type ContentWithSrc = ContentHit & { imageSrc: string };

export default async function Page({
  searchParams,
}: {
  searchParams: {
    page?: string;
    type?: string | string[];
  };
}) {
  const typeFilters =
    searchParams.type && !Array.isArray(searchParams.type)
      ? `type:${`'${searchParams.type}'`}`
      : Array.isArray(searchParams.type)
      ? searchParams.type.map((type) => `type:${`'${type}'`}`).join(" OR ")
      : undefined;

  const { hits, nbHits } = await contentIndex.search<ContentWithSrc>("", {
    hitsPerPage: HITS_PER_PAGE,
    page: parseInt(searchParams.page || "0"),
    filters: typeFilters ? `${typeFilters}` : undefined,
  });

  return (
    <div>
      <RemoveFilterButtons />
      <Grid>
        {hits.map((hit) => (
          <Link href={`conversation/${hit.objectID}`} key={hit.objectID}>
            <Card
              size="medium"
              image={{
                src: `https://storage.googleapis.com/conversation-dalee-images/${hit.situationId}.webp`,
                width: 1000,
                height: 1000,
                alt: `Vibrant Vietnamese folk painting of ${hit.situation}`,
              }}
              small={formatDate(hit.date)}
              heading={hit.title}
              subHeading={hit.situation}
              badge={hit.type}
            />
          </Link>
        ))}
      </Grid>
      <Suspense>
        <Pagination nbHits={nbHits} hitsPerPage={HITS_PER_PAGE} />
      </Suspense>
    </div>
  );
}
