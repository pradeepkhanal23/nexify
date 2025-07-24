import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(100, {
      message: "name must be less than 100 characters.",
    }),
  company: z.string(),
  featured: z.coerce.boolean(),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive number.",
  }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words.",
    }
  ),
});

// creating a Zod schema that expects an object with an image field.
export const imageSchema = z.object({
  //  this image field must pass the validateImageFile() function.
  image: validateImageFile(),
});

function validateImageFile() {
  const maxUploadSize = 1024 * 1024; // 1 MB in bytes
  const acceptedFileTypes = ["image/"];

  return z
    .instanceof(File) // Making sure it's a File object
    .refine((file) => {
      return !file || file.size <= maxUploadSize; // File must be ≤ 1MB
    }, `File size must be less than 1 MB`)
    .refine((file) => {
      return (
        !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
      ); // Must be an image MIME type
    }, "File must be an image");
}

// because we have to validate the raw data against the schema everytime we perform some actions with CRUD, we try to create a separate fucntion which does that instead of repeating it many times during each actions
// this function takes the raw data from the form and the schema of the product which we created
export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    // because in the ZodError Object has another object regarding the detailed explanation of the issues occured, we loop over all that error obj and then send a combined error message where the validation failed
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }
  return result.data;
}
