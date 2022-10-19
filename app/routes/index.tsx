import { FeaturesGrid } from "~/components/Features";
import { HeroContentLeft } from "~/components/Hero";

export default function Index() {
  return (
    <>
      <HeroContentLeft />
      <FeaturesGrid id="features" title="Features" />
    </>
  );
}
