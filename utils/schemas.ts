import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  company: z.string(),
  price: z.number(),
  description: z.string(),
  featured: z.boolean(),
});
