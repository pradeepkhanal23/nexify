import { formatPrice } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@prisma/client";
import Image from "next/image";
import FavouriteToggleButton from "./FavouriteToggleButton";

function ProductsList({ products }: { products: Product[] }) {
  return (
    <section className="mt-20 grid grid-cols-1 gap-5">
      {products.map((product) => {
        const { image, name, price, company, description } = product;
        const productId = product.id;

        return (
          <article key={productId} className="group relative ">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 ">
                <CardContent className="p-4 flex">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-48 rounded overflow-hidden flex-1 ">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Product Information Section */}
                  <div className="text-left pl-4 flex-1 flex  flex-col gap-y-4">
                    <h2 className="text-lg  capitalize font-semibold">
                      {name}
                    </h2>
                    <p className="text-lg  text-gray-600  dark:text-muted-foreground">
                      {company}
                    </p>
                    <p className="dark:text-muted-foreground text-gray-600">
                      {description}
                    </p>
                    <p className="text-muted-foreground mt-2 font-mono">
                      {formatPrice(price)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Favourite toggle button */}
            <div className="absolute top-7 left-8">
              <FavouriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </section>
  );
}
export default ProductsList;
