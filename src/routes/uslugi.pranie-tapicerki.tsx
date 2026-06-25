import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/lib/services";

const SLUG = "pranie-tapicerki";
export const Route = createFileRoute("/uslugi/pranie-tapicerki")({
  head: () => buildServiceHead(SLUG),
  component: () => <ServicePageLayout slug={SLUG} />,
});
