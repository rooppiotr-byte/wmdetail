import { createFileRoute } from "@tanstack/react-router";
import { ServicePageLayout, buildServiceHead } from "@/lib/services";

const SLUG = "detailing-wnetrza";
export const Route = createFileRoute("/uslugi/detailing-wnetrza")({
  head: () => buildServiceHead(SLUG),
  component: () => <ServicePageLayout slug={SLUG} />,
});
