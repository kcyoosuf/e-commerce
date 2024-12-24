import { createLazyFileRoute } from "@tanstack/react-router";
import SEOMetadata from "../components/seo/SEOMetadata";
import { getMetadata } from "../utils/utils";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <SEOMetadata {...getMetadata("about")} />
      <div className="p-2">Hello from About!</div>
    </>
  );
}
