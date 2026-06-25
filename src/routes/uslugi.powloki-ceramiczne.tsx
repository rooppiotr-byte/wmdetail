import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/lib/services";

const SLUG = "powloki-ceramiczne";
export const Route = createFileRoute("/uslugi/powloki-ceramiczne")({
  head: () => buildServiceHead(SLUG),
  component: () => <ServicePageLayout slug={SLUG} />,
});
