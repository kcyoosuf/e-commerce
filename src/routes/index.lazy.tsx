import { createLazyFileRoute } from "@tanstack/react-router";
import AnimateFadeIn from "../components/animation/AnimateFadeIn";
import Carousel from "../components/common/Caroucel";
import SEOMetadata from "../components/seo/SEOMetadata";
import { getMetadata } from "../utils/utils";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <SEOMetadata {...getMetadata("home")} />

      <AnimateFadeIn>
        <div className="max-w-screen-lg mx-auto">
          <Carousel />

          <h3>Welcome Home!</h3>
        </div>
      </AnimateFadeIn>
    </>
  );
}
