"use server";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./db";
import { productSchema, validateWithZodSchema } from "./schemas";

// fetching the featured Products
export const fetchFeaturedProducts = async () => {
  const featuredProducts = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return featuredProducts;
};

// error rendering action
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

// getting user action
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
    // raw data without validation
    const rawData = Object.fromEntries(formData);

    // while doing the safe parsing, zod wont throw the error straight away
    // it provides the success and data properties inside an object which we can access and display the result accordingly either its a sucess or an error occured

    // now instead of doing the safe parse we use the validateWithZodSchema reuseable function to validate the schema against the raw data
    const validatedFields = validateWithZodSchema(productSchema, rawData);

    await prisma.product.create({
      data: {
        ...validatedFields,
        // manual passing of image for now, until we create a separate schema for image validation and upload
        image: "/images/hero4.png",
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
