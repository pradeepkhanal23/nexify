import prisma from "./db";

// fetching the featured Products
export const fetchFeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};
// fetching all the products
export const fetchAllProducts = async () => {
  // we can directly return the result as well without using the async and await keyword in this case
  const products = await prisma.product.findMany();
  return products;
};
