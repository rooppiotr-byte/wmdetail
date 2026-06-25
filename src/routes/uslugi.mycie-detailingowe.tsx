import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/lib/services";

const SLUG = "mycie-detailingowe";
export const Route = createFileRoute("/uslugi/mycie-detailingowe")({
  head: () => buildServiceHead(SLUG),
  component: () => <ServicePageLayout slug={SLUG} />,
});
