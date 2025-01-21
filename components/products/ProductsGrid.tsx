import { Product } from "@prisma/client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/utils/format";
import FavouriteToggleButton from "./FavouriteToggleButton";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <>
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => {
          const { image, name, price, company } = product;
          const productId = product.id;

          return (
            <article key={productId} className="group relative">
              <Link href={`/products/${productId}`}>
                <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                  <CardContent className="p-4">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-48 rounded overflow-hidden ">
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
                    <div className="mt-4 text-center">
                      <h2 className="text-lg  capitalize">{name}</h2>
                      <p className="text-lg font-semibold text-gray-600 tracking-tighter dark:text-muted-foreground">
                        {company}
                      </p>
                      <p className="text-muted-foreground mt-2">
                        {formatPrice(price)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <FavouriteToggleButton />
            </article>
          );
        })}
      </section>
    </>
  );
};
export default ProductsGrid;
