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
// fetching all the products
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
