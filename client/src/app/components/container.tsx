import React from "react";

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="container mx-auto px-2">{children}</div>;
}
