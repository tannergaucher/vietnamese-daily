import React from "react";

import { Card } from "@/app/components/card";
import { Container } from "@/app/components/container";

export default function Loading() {
  return (
    <Container>
      <Card heading="Loading Post..." size="large" />
    </Container>
  );
}
