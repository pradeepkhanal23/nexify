import { redirect } from "next/navigation";
import prisma from "./db";

// fetching the featured Products
export const fetchFeaturedProducts = async () => {
  const featuredProducts = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return featuredProducts;
};

// fetching all the products OR fetch based on the search provided
export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  // we can directly return the result as well without using the async and await keyword in this case
  const products = await prisma.product.findMany({
    // adding some filtering based on name and company
    where: {
      OR: [
        {
          name: {
            contains: search,
            mode: "insensitive", // Default value: default
          },
        },
        {
          company: {
            contains: search,
          },
        },
      ],
    },
  });
  return products;
};

// fetching single product
export const fetchSingleProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    redirect("/products");
  }

  return product;
};
