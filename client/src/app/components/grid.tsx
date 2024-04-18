import { Container } from "./container";

export function Grid({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-2">
        {children}
      </div>
    </Container>
  );
}
