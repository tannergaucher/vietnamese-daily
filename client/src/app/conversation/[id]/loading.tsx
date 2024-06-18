import React from "react";

import { Card } from "@/app/components/card";
import { Container } from "@/app/components/container";

export default function Loading() {
  return (
    <Container>
      <Card
        heading="Loading Post..."
        size="large"
        image={{
          src: "https://storage.googleapis.com/conversation-dalee-images/37043f3c-ed4c-4b55-86f2-57e7d8faf14f.webp",
          width: 2000,
          height: 2000,
          alt: "Loading",
          priority: true,
        }}
      />
    </Container>
  );
}
