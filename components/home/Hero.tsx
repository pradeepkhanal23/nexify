import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 ">
      {/* Grid layout for text and carousel */}
      <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Discover Our Latest Collection
          </h1>
          <p className="text-lg text-muted-foreground ">
            Explore our curated selection of trendsetting styles that blend
            comfort and elegance. Find your perfect look today.
          </p>
          <Button size="lg" className="w-full sm:w-auto">
            Shop All
          </Button>
        </div>

        {/* Carousel */}
        <HeroCarousel />
      </div>
    </section>
  );
}
