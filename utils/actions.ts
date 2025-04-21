"use server";
import { currentUser, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./db";
import { productSchema } from "./schemas";

// fetching the featured Products
export const fetchFeaturedProducts = async () => {
  const featuredProducts = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return featuredProducts;
};

const renderError = (
  error: unknown
): {
  message: string;
} => {
  console.log(error);

  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) {
    throw new Error("You must be logged in to access this route!!");
  }

  return user;
};

// creating a product action
export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = productSchema.parse(rawData);

    const name = formData.get("name") as string;
    const company = formData.get("company") as string;
    // the price is a string to begin with so using Number() constructor we turned it into a number
    const price = Number(formData.get("price") as string);
    const image = formData.get("image") as File;
    const description = formData.get("description") as string;

    // converting featured into boolean as well
    const featured = Boolean(formData.get("featured") as string);

    await prisma.product.create({
      data: {
        ...validatedFields,
        image: "/images/apple-watch.png",
        clerkId: user.id,
      },
    });

    return { message: "product created" };
  } catch (error) {
    return renderError(error);
  }
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
