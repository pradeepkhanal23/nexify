import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Hero1 from "@/public/images/hero1.jpg";
import Hero2 from "@/public/images/hero2.jpg";
import Hero3 from "@/public/images/hero3.jpg";
import Hero4 from "@/public/images/hero1.jpg";

const carouselImages = [Hero1, Hero2, Hero3, Hero4];

export default function HeroCarousel() {
  return (
    <section className="hidden lg:block">
      <Carousel className="w-full max-w-lg mx-auto">
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full h-full">
                <Image
                  src={src}
                  alt={`Hero image ${index + 1}`}
                  width={600}
                  height={600}
                  className="w-full rounded-lg object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
