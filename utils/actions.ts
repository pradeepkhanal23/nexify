"use server";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./db";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { uploadImage } from "./supabase";

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
    // while doing the safe parsing, zod wont throw the error straight away
    // it provides the success and data properties inside an object which we can access and display the result accordingly either its a sucess or an error occured

    const rawData = Object.fromEntries(formData);

    // making sure the file is of type File
    const file = formData.get("image") as File;

    // now instead of doing the safe parse we use the validateWithZodSchema reuseable function to validate the schema against the raw data
    // let say if we create another schema called image, then we can actually use this function to validate the schema for the given raw data
    const validatedFields = validateWithZodSchema(productSchema, rawData);

    // now validating the uploaded file against our imageSchema and passing the uploaded file in the image property
    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    // Uploading the image to Supabase Storage using the helper function.
    // This returns the full public URL of the uploaded image (e.g. hosted on Supabase's CDN).
    // The image is stored in a specific bucket with a unique name (e.g. timestamped) to avoid filename conflicts.
    // This URL will later be saved in the database as part of the product's image reference.
    const fullPath = await uploadImage(validatedFile.image);

    await prisma.product.create({
      data: {
        ...validatedFields,
        //  now acutally passing the full path of the image url which will be made available to the public via supabase
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  // also redirecting to the products page upon successfull image upload
  redirect("/admin/products");
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
