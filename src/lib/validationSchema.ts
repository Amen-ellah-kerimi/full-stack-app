import { z } from "zod";

export const postSchema = z.object({
  title: z.string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title must be under 100 characters"),
  content : z.string()
    .min(10, "content must be at least 10 characters")
});

export type PostSchemaType = z.infer<typeof postSchema>;
