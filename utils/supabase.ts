import { createClient } from "@supabase/supabase-js";

// Name of the Supabase Storage bucket where images will be uploaded
const bucket = "product-images";

// Create a single supabase client for interacting with your database

// Initialize a Supabase client using environment variables.
// Make sure these env vars are defined in your `.env` file:
// - SUPABASE_URL: your project URL (e.g. https://xyz.supabase.co)
// - SUPABASE_KEY: your public anon key (NEVER use the service key on client side)
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

/**
 * Uploads an image file to Supabase Storage and returns its public URL.
 *
 * @param image - File object from a file input element
 * @returns Public URL of the uploaded image
 * @throws Error if upload fails
 */

export const uploadImage = async (image: File) => {
  // Generate a unique filename using a timestamp to avoid name collisions
  const timestamp = Date.now();

  // Optional: prefix with folder name like 'users/' for organized storage structure
  // const newName = `users/${timestamp}-${image.name}`;
  const newName = `${timestamp}-${image.name}`;

  // Upload the file to the specified bucket with the generated file path
  // cacheControl: how long the browser should cache the image (in seconds)
  const { data } = await supabase.storage.from(bucket).upload(newName, image, {
    cacheControl: "3600", // 1 hour browser cache
  });

  // If upload failed, throw an error to be handled by calling function
  if (!data) throw new Error("Image upload failed");

  // Get the public URL for the uploaded image so it can be used in the UI
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
