import { z } from "zod";

export const postSchema = z.object({
    title:      z.string().min(3, "Title is too short"),
    content:    z.string().min(5, "Content is too short"),
    author:     z.string().min(1, "Author is required"),
});

export type PostSchemaType = z.infer<typeof postSchema>;

