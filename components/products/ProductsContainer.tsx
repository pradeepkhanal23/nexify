import { Button } from "../ui/button";
import Link from "next/link";
import { LayoutGrid, LayoutList } from "lucide-react";
import { Separator } from "../ui/separator";
import { fetchAllProducts } from "@/utils/actions";

const ProductsContainer = async ({
  search,
  layout,
}: {
  search: string;
  layout: string;
}) => {
  const allProducts = await fetchAllProducts();
  const totalLength = allProducts.length;

  console.log(allProducts);

  return (
    <div className="mt-5  max-w-5xl mx-auto">
      {/* header */}
      <section className="flex items-baseline justify-between mb-3">
        <div>
          <p className="font-semibold text-xl">
            {totalLength} Product{totalLength > 1 && "s"}
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            variant={layout === "grid" ? "default" : "ghost"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=grid`}>
              <LayoutGrid />
            </Link>
          </Button>
          <Button
            variant={layout === "list" ? "default" : "ghost"}
            size="icon"
            asChild
          >
            <Link href={`/products?layout=list`}>
              <LayoutList />
            </Link>
          </Button>
        </div>
      </section>

      {/* Shadcn Separator Component */}
      <Separator />

      {/* products */}
      <section>
        {totalLength === 0 && (
          <p className="mt-4 text-2xl">
            Sorry, no products matched your search..
          </p>
        )}
      </section>
    </div>
  );
};
export default ProductsContainer;
