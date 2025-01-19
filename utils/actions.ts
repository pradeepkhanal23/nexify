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
export const fetchAllProducts = () => {
  // we can directly return the result as well without using the async and await keyword in this case
  return prisma.product.findMany({
    orderBy: {
      // we are returning the products based on their creation time, with the latest first
      createdAt: "desc",
    },
  });
};
