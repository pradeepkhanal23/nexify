import BreadCrumbs from "@/components/product/BreadCrumbs";
import { fetchSingleProduct } from "@/utils/actions";
import Image from "next/image";
import ProductRating from "../../../components/product/ProductRating";
import AddToCart from "@/components/product/AddToCart";

const SingleProductPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const singleProduct = await fetchSingleProduct(params.id);

  const { name, company, description, image, price } = singleProduct;
  return (
    <>
      <section className="container mx-auto px-4 py-8">
        <BreadCrumbs productName={name} />
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div className="md:sticky md:top-24">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={400}
              height={400}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{name}</h1>
            <p className="text-sm text-muted-foreground mb-4">by {company}</p>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                <ProductRating />
              </div>
            </div>
            <p className="text-2xl font-bold mb-4">${price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="mt-auto">
              <AddToCart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleProductPage;
