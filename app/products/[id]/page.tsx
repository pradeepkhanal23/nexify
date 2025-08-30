import BreadCrumbs from "@/components/product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import ProductRating from "../../../components/product/ProductRating";
import AddToCart from "@/components/product/AddToCart";
import FavouriteToggleButton from "@/components/products/FavouriteToggleButton";
import { formatPrice } from "@/utils/format";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) => {
  // Ensuring the "params.id" is resolved before using it
  // refer to the next js latest docs to extract the dynamic section when we recieve it as a prop to either layout, page or router etc
  const id = (await params).id;
  const singleProduct = await fetchSingleProduct(id);
  const { name, company, description, image, price } = singleProduct;

  return (
    <>
      <section className="container mx-auto px-4 py-8">
        {/* Breadcrumb Component */}
        <BreadCrumbs productName={name} />

        {/* Product Grid */}
        <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <div className="relative h-96 lg:h-auto">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="w-full rounded-lg object-cover dark:border-gray-600 border"
              priority // Ensures the image is prioritized for loading
            />
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col gap-y-3">
            {/* Product Name and Favourite Button */}
            <div className="flex  gap-4 items-center justify-between ">
              <h1 className="capitalize text-2xl font-bold sm:text-3xl ">
                {name}
              </h1>
              <div className="mr-auto ml-5">
                <FavouriteToggleButton productId={id} />
              </div>
            </div>

            {/* Product Rating */}
            <ProductRating />

            {/* Company Name */}
            <h4 className="text-lg text-muted-foreground sm:text-xl">
              {company}
            </h4>

            {/* Price */}
            <span className="font-mono font-semibold bg-muted w-[140px] p-3 rounded-lg text-base">
              {formatPrice(price)}
            </span>

            {/* Description */}
            <p className="text-muted-foreground leading-7 sm:leading-8">
              {description}
            </p>

            {/* Add to Cart Button */}
            <div className="mt-4">
              <AddToCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
