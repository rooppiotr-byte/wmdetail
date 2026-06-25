import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/lib/services";

const SLUG = "korekta-lakieru";
export const Route = createFileRoute("/uslugi/korekta-lakieru")({
  head: () => buildServiceHead(SLUG),
  component: () => <ServicePageLayout slug={SLUG} />,
});
