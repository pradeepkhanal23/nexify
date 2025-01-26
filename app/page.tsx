import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import SectionTitle from "@/components/global/SectionTitle";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTitle title="Featured Products" />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
